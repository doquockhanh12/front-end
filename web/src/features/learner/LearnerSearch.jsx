import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, BadgeCheck, Search, SlidersHorizontal, Sparkles, X, LayoutList, Map as MapIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Brand from '../../components/Brand.jsx';
import Badge from '../../components/Badge.jsx';
import Button from '../../components/Button.jsx';
import LearnerHeader from './LearnerHeader.jsx';
import LearnerHero from '../public/LearnerHero.jsx';
import { CheckboxFilter, QuickFilter } from './SearchFilters.jsx';
import TutorMap from './TutorMap.jsx';
import './search.css';
import SearchInput from '../../components/SearchInput.jsx';
import { availabilityOptions } from '../../data/tutors.js';
import { useScheduledTutors } from '../tutor/TutorWorkspaceState.jsx';
import TutorCard from './TutorCard.jsx';
import useDialogFocus from '../../hooks/useDialogFocus.js';
import useDemoDomain, { useSavedTutors } from '../domain/DemoDomainContext.jsx';

const MAP_POINTS = [[190, 170], [440, 145], [100, 295], [225, 310], [310, 205], [465, 330]];
const SPLIT_PAGE_SIZE = 3;

export default function LearnerSearch() {
  const tutors = useScheduledTutors();
  const { subjects, locations } = useDemoDomain();
  const subjectOptions = ['Tất cả môn', ...subjects.filter(item => item.isActive !== false).map(item => item.name)];
  const locationOptions = ['Tất cả khu vực', ...locations.filter(item => item.isActive !== false).map(item => item.name)];
  const levelOptions = ['Tất cả cấp độ', ...new Set(tutors.flatMap(tutor => tutor.levels || []))];
  const [levels, setLevels] = useState([]);
  const [query, setQuery] = useState('');
  const [subject, setSubject] = useState([]);
  const [location, setLocation] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [maxPrice, setMaxPrice] = useState('all');
  const [radius, setRadius] = useState('all');
  const [sortBy, setSortBy] = useState('recommended');
  const [viewMode, setViewMode] = useState('list');
  const [selectedTutorId, setSelectedTutorId] = useState(null);
  const [pagination, setPagination] = useState({ key: '', page: 1 });
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [savedIds, setSavedIds] = useSavedTutors();
  const filterRef = useDialogFocus(() => setFiltersOpen(false), filtersOpen);

  const results = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase('vi-VN');
    const filtered = tutors.filter((tutor) => (
      (!normalized || [tutor.name, tutor.university, tutor.location, ...tutor.subjects].join(' ').toLocaleLowerCase('vi-VN').includes(normalized)) &&
      (!subject.length || subject.some((value) => tutor.subjects.includes(value))) &&
      (!levels.length || levels.some(value => (tutor.levels || []).includes(value))) &&
      (!location.length || location.includes(tutor.location)) &&
      (!availability.length || availability.some((value) => tutor.availability.includes(value))) &&
      (maxPrice === 'all' || tutor.price <= Number(maxPrice))
    ));
    return [...filtered].sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'rating') return b.rating - a.rating || b.reviews - a.reviews;
      return Number(b.featured) - Number(a.featured) || b.rating - a.rating;
    });
  }, [tutors, query, subject, levels, location, availability, maxPrice, sortBy]);

  const resultsWithCoords = useMemo(() => {
    return results.map((tutor) => {
      const idx = tutors.findIndex(item => item.id === tutor.id);
      const pt = MAP_POINTS[idx % MAP_POINTS.length] || [200, 200];
      const estimatedDistance = Math.round(Math.hypot(pt[0] - 240, pt[1] - 220) * 0.025 * 10) / 10;
      return { ...tutor, x: pt[0], y: pt[1], estimatedDistance };
    });
  }, [results, tutors]);

  const displayedResults = useMemo(() => {
    if (radius === 'all') return resultsWithCoords;
    return resultsWithCoords.filter((t) => t.estimatedDistance <= Number(radius));
  }, [resultsWithCoords, radius]);

  const pageKey = JSON.stringify([query, subject, levels, location, availability, maxPrice, radius, sortBy]);
  const pageCount = Math.max(1, Math.ceil(displayedResults.length / SPLIT_PAGE_SIZE));
  const currentPage = pagination.key === pageKey ? Math.min(pagination.page, pageCount) : 1;
  const pageStart = (currentPage - 1) * SPLIT_PAGE_SIZE;
  const splitResults = displayedResults.slice(pageStart, pageStart + SPLIT_PAGE_SIZE);
  const changePage = (page) => { setPagination({ key: pageKey, page }); setSelectedTutorId(null); };

  useEffect(() => {
    if (viewMode === 'split' && selectedTutorId) {
      document.getElementById(`tutor-card-${selectedTutorId}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [viewMode, selectedTutorId, currentPage]);

  const activeFilterCount = subject.length + levels.length + location.length + availability.length + Number(maxPrice !== 'all') + Number(radius !== 'all');
  const toggleSave = (id) => setSavedIds((ids) => ids.includes(id) ? ids.filter((item) => item !== id) : [...ids, id]);
  const clearFilters = () => { setQuery(''); setSubject([]); setLevels([]); setLocation([]); setAvailability([]); setMaxPrice('all'); setRadius('all'); };

  return (
    <div className="public-page public-page--learner learner-page learner-search-page density-comfortable">
      <LearnerHeader />
      <main>
        <LearnerHero searchTarget="#search-controls" howTarget="/learner#how" />
        <section className="learner-container search-controls" id="search-controls" aria-label="Tìm kiếm nhanh">
          <form className="search-quickbar" onSubmit={(event) => { event.preventDefault(); document.getElementById('ket-qua')?.scrollIntoView({ behavior: 'smooth' }); }}>
            <label className="search-quickbar__query">Tên hoặc từ khóa<SearchInput id="tutor-search" value={query} onChange={setQuery} placeholder="Tên, môn học..." /></label>
            <QuickFilter title="Môn học" options={subjectOptions} selected={subject} onChange={setSubject} />
            <QuickFilter title="Khu vực" options={locationOptions} selected={location} onChange={setLocation} />
            <QuickFilter title="Thời gian rảnh" options={availabilityOptions} selected={availability} onChange={setAvailability} />
            <label>Mức phí<select value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)}><option value="all">Mọi mức phí</option><option value="160000">Đến 160.000đ</option><option value="180000">Đến 180.000đ</option><option value="200000">Đến 200.000đ</option></select></label>
            <Button type="submit"><Search size={18} /> Tìm gia sư</Button>
          </form>
        </section>

        <div className="learner-container learner-content" id="ket-qua">
          <div className="learner-section-heading"><div><span className="eyebrow">KHÁM PHÁ GIA SƯ</span><h2>Một lựa chọn tốt bắt đầu từ sự phù hợp</h2></div><p>Lọc theo điều quan trọng với bạn, rồi so sánh trong một góc nhìn rõ ràng.</p></div>

          <div className="learner-layout">
            <aside ref={filterRef} tabIndex={-1} role={filtersOpen ? 'dialog' : undefined} aria-modal={filtersOpen ? true : undefined} className={`filter-panel ${filtersOpen ? 'is-open' : ''}`} aria-label="Bộ lọc gia sư">
              <div className="filter-panel__heading"><div><SlidersHorizontal size={18} aria-hidden="true" /><h3>Bộ lọc</h3>{activeFilterCount > 0 && <Badge tone="brand">{activeFilterCount}</Badge>}</div><button className="filter-panel__close icon-button" type="button" onClick={() => setFiltersOpen(false)} aria-label="Đóng bộ lọc"><X size={20} /></button></div>
              <CheckboxFilter title="Môn học" options={subjectOptions} selected={subject} onChange={setSubject} />
              <CheckboxFilter title="Cấp độ học" options={levelOptions} selected={levels} onChange={setLevels} />
              <CheckboxFilter title="Khu vực" options={locationOptions} selected={location} onChange={setLocation} />
              <CheckboxFilter title="Thời gian rảnh" options={availabilityOptions} selected={availability} onChange={setAvailability} />
              <div className="filter-field"><label htmlFor="filter-radius">Bán kính tìm kiếm</label><select id="filter-radius" value={radius} onChange={(event) => setRadius(event.target.value)}><option value="all">Tất cả khoảng cách</option><option value="3">Trong bán kính 3 km</option><option value="5">Trong bán kính 5 km</option><option value="10">Trong bán kính 10 km</option></select></div>
              <div className="filter-field"><label htmlFor="filter-price">Học phí tối đa</label><select id="filter-price" value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)}><option value="all">Không giới hạn</option><option value="160000">Tối đa 160.000đ / buổi</option><option value="180000">Tối đa 180.000đ / buổi</option><option value="200000">Tối đa 200.000đ / buổi</option></select></div>
              <button className="text-button filter-panel__clear" type="button" onClick={clearFilters}>Xóa bộ lọc</button>
              <Button className="filter-panel__apply" onClick={() => setFiltersOpen(false)}>Xem {displayedResults.length} gia sư</Button>
            </aside>

            <section className="learner-results" aria-label="Kết quả tìm gia sư">
              <div className="learner-results__toolbar">
                <div>
                  <strong>{displayedResults.length} gia sư phù hợp</strong>
                  <span> tại TP. Hồ Chí Minh</span>
                </div>
                <div className="learner-results__actions">
                  <div className="view-mode-toggle" role="group" aria-label="Chế độ hiển thị">
                    <button
                      type="button"
                      className={viewMode === 'list' ? 'is-active' : ''}
                      onClick={() => setViewMode('list')}
                      aria-pressed={viewMode === 'list'}
                      title="Xem danh sách"
                    >
                      <LayoutList size={16} /> Danh sách
                    </button>
                    <button
                      type="button"
                      className={viewMode === 'split' ? 'is-active' : ''}
                      onClick={() => setViewMode('split')}
                      aria-pressed={viewMode === 'split'}
                      title="Bản đồ chia đôi"
                    >
                      <MapIcon size={16} /> Bản đồ chia đôi
                    </button>
                  </div>
                  <Button variant="secondary" size="sm" className="learner-results__filter" onClick={() => setFiltersOpen(true)}><SlidersHorizontal size={17} /> Bộ lọc {activeFilterCount > 0 && `(${activeFilterCount})`}</Button>
                  <label htmlFor="sort-tutors">Sắp xếp</label>
                  <select id="sort-tutors" value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
                    <option value="recommended">Đề xuất</option>
                    <option value="rating">Đánh giá cao</option>
                    <option value="price">Học phí thấp</option>
                  </select>
                </div>
              </div>

              {!displayedResults.length ? (
                <div className="learner-empty"><Sparkles size={28} /><h3>Chưa tìm thấy gia sư phù hợp</h3><p>Thử mở rộng khu vực, lịch rảnh hoặc mức học phí để xem thêm lựa chọn.</p><Button variant="secondary" onClick={clearFilters}>Đặt lại bộ lọc</Button></div>
              ) : viewMode === 'split' ? (
                <div className="learner-results--split">
                  <div className="learner-split-list">
                    {splitResults.map((tutor) => (
                      <TutorCard
                        key={tutor.id}
                        tutor={tutor}
                        saved={savedIds.includes(tutor.id)}
                        onSave={toggleSave}
                        highlighted={selectedTutorId === tutor.id}
                        onHighlight={setSelectedTutorId}
                      />
                    ))}
                    <nav className="learner-split-pagination" aria-label="Phân trang gia sư">
                      <p role="status" aria-live="polite">{pageStart + 1}–{Math.min(pageStart + SPLIT_PAGE_SIZE, displayedResults.length)} / {displayedResults.length} gia sư</p>
                      <div>
                        <Button variant="secondary" size="sm" disabled={currentPage === 1} onClick={() => changePage(currentPage - 1)}>Trang trước</Button>
                        <span>Trang {currentPage} / {pageCount}</span>
                        <Button variant="secondary" size="sm" disabled={currentPage === pageCount} onClick={() => changePage(currentPage + 1)}>Trang sau</Button>
                      </div>
                    </nav>
                  </div>
                  <div className="learner-split-map">
                    <div style={{ padding: '4px 6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155' }}>
                        📍 Bản đồ trực quan ({displayedResults.length} gia sư)
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                        Bấm ghim giá để chọn gia sư
                      </span>
                    </div>
                    <TutorMap
                      showPricePills
                      selectedId={selectedTutorId}
                      tutors={displayedResults}
                      onSelect={(tutor) => {
                        const index = displayedResults.findIndex(item => item.id === tutor.id);
                        setPagination({ key: pageKey, page: Math.floor(index / SPLIT_PAGE_SIZE) + 1 });
                        setSelectedTutorId(tutor.id);
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="tutor-results-grid">
                  {displayedResults.map((tutor) => (
                    <TutorCard
                      key={tutor.id}
                      tutor={tutor}
                      saved={savedIds.includes(tutor.id)}
                      onSave={toggleSave}
                      highlighted={selectedTutorId === tutor.id}
                    />
                  ))}
                </div>
              )}
            </section>

            <aside className="learner-support" id="vi-sao" aria-label="Thông tin hỗ trợ">
              <Link className="search-map-card" to="/learner/map"><span className="eyebrow">KHÁM PHÁ KHU VỰC</span><h3>Bản đồ gia sư gần bạn</h3><TutorMap compact /><p>Xem khu vực và khoảng cách giữa các gia sư.</p><span className="search-map-card__cta">Mở bản đồ <ArrowRight size={17} /></span></Link>
              <div className="learner-support__block learner-support__block--line"><span className="eyebrow">BẮT ĐẦU ĐƠN GIẢN</span><h3>Ba bước để bắt đầu</h3><ol><li><span>01</span>Chọn môn và khu vực</li><li><span>02</span>So sánh hồ sơ gia sư</li><li><span>03</span>Gửi yêu cầu học phù hợp</li></ol></div>
              <div className="learner-support__note"><BadgeCheck size={20} /><p><strong>Thông tin minh bạch</strong><br />Bạn luôn thấy mức phí và lịch rảnh trước khi quyết định.</p></div>
            </aside>
          </div>
        </div>
      </main>

      <footer className="learner-footer"><div className="learner-container"><Brand compact /><p>Kết nối đúng người. Học theo cách của bạn.</p><span>Giao diện mẫu · TutorNearMe</span></div></footer>
      {filtersOpen && <button className="filter-scrim" type="button" onClick={() => setFiltersOpen(false)} aria-label="Đóng bộ lọc" />}
    </div>
  );
}
