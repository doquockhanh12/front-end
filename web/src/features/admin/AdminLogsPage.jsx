import { useState, useMemo } from 'react';
import { Search, ClipboardList, Shield, User, Clock, FileText } from 'lucide-react';
import Badge from '../../components/Badge.jsx';
import AdminShell from './AdminShell.jsx';
import useDemoDomain from '../domain/DemoDomainContext.jsx';
import { formatRecordCount } from './AdminTutorsPage.jsx';

export default function AdminLogsPage() {
  const { auditLogs = [] } = useDemoDomain();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAction, setSelectedAction] = useState('ALL');

  const actionTypes = useMemo(() => {
    const set = new Set(auditLogs.map((log) => log.action).filter(Boolean));
    return ['ALL', ...Array.from(set)];
  }, [auditLogs]);

  const filteredLogs = useMemo(() => {
    return auditLogs.filter((log) => {
      if (selectedAction !== 'ALL' && log.action !== selectedAction) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.trim().toLowerCase();
      return (
        (log.actorName && log.actorName.toLowerCase().includes(q)) ||
        (log.action && log.action.toLowerCase().includes(q)) ||
        (log.details && log.details.toLowerCase().includes(q)) ||
        (log.targetType && log.targetType.toLowerCase().includes(q))
      );
    });
  }, [auditLogs, selectedAction, searchQuery]);

  return (
    <AdminShell title="Nhật ký Hoạt động (Audit Log - A14)">
      <div className="admin-page-container">
        <div className="admin-page-header">
          <div>
            <h1 className="admin-page-title">Nhật ký Hoạt động Hệ thống (Audit Trail)</h1>
            <p className="admin-page-subtitle">
              Ghi nhận đầy đủ, bất biến mọi thao tác phê duyệt, xử lý tranh chấp, đổi biểu phí và quyết định của ban quản trị.
            </p>
          </div>
        </div>

        <div className="admin-controls-card" style={{ background: '#fff', borderRadius: '12px', padding: '1rem', marginBottom: '1.25rem', border: '1px solid #E2E8F0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#475569' }}>Lọc theo hành động:</span>
            <select
              value={selectedAction}
              onChange={(e) => setSelectedAction(e.target.value)}
              style={{ padding: '0.5rem 0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.875rem', background: '#FFF' }}
            >
              <option value="ALL">Tất cả hành động ({auditLogs.length})</option>
              {actionTypes.filter((a) => a !== 'ALL').map((act) => (
                <option key={act} value={act}>{act}</option>
              ))}
            </select>
          </div>

          <div className="admin-search-wrap" style={{ position: 'relative', minWidth: '280px' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
            <input
              type="text"
              placeholder="Tìm kiếm tác nhân, chi tiết thao tác..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem 0.75rem 0.5rem 2.25rem',
                borderRadius: '8px',
                border: '1px solid #CBD5E1',
                fontSize: '0.875rem',
              }}
            />
          </div>
        </div>

        <div style={{ marginBottom: '0.75rem', fontSize: '0.875rem', color: '#64748B', fontWeight: 600 }}>
          {formatRecordCount(filteredLogs.length, auditLogs.length)}
        </div>

        <div className="admin-table-container" style={{ background: '#fff', borderRadius: '12px', border: '1px solid #E2E8F0', overflowX: 'auto' }}>
          <table className="admin-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#475569', fontWeight: 700 }}>
                <th style={{ padding: '0.875rem 1rem' }}>Thời gian</th>
                <th style={{ padding: '0.875rem 1rem' }}>Tác nhân</th>
                <th style={{ padding: '0.875rem 1rem' }}>Hành động</th>
                <th style={{ padding: '0.875rem 1rem' }}>Đối tượng</th>
                <th style={{ padding: '0.875rem 1rem' }}>Chi tiết thao tác</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ padding: '3rem 1rem', textAlign: 'center', color: '#94A3B8' }}>
                    <ClipboardList size={36} style={{ margin: '0 auto 0.5rem auto', opacity: 0.5 }} />
                    <p>Không có nhật ký thao tác nào.</p>
                  </td>
                </tr>
              ) : (
                filteredLogs.map((log) => (
                  <tr key={log.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '0.875rem 1rem', color: '#64748B', whiteSpace: 'nowrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Clock size={14} />
                        {new Date(log.createdAt).toLocaleString('vi-VN')}
                      </div>
                    </td>
                    <td style={{ padding: '0.875rem 1rem', fontWeight: 600, color: '#0F172A', whiteSpace: 'nowrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <User size={14} color="#2563EB" />
                        {log.actorName || 'Hệ thống'}
                      </div>
                    </td>
                    <td style={{ padding: '0.875rem 1rem', whiteSpace: 'nowrap' }}>
                      <Badge tone={log.action.includes('APPROVE') ? 'success' : log.action.includes('DISPUTE') || log.action.includes('SUSPEND') ? 'danger' : 'info'}>
                        {log.action}
                      </Badge>
                    </td>
                    <td style={{ padding: '0.875rem 1rem', color: '#475569', whiteSpace: 'nowrap' }}>
                      <span style={{ background: '#F1F5F9', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontFamily: 'monospace' }}>
                        {log.targetType}: {log.targetId || '-'}
                      </span>
                    </td>
                    <td style={{ padding: '0.875rem 1rem', color: '#334155' }}>
                      {log.details}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}
