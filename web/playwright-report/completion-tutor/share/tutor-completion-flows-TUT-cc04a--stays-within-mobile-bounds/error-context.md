# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tutor-completion-flows.spec.js >> TUTOR-FLOW share trip opens a functional local demo view and stays within mobile bounds
- Location: tests\e2e\tutor-completion-flows.spec.js:5:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Hành trình buổi dạy demo' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('heading', { name: 'Hành trình buổi dạy demo' }) with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Hành trình buổi dạy demo' })

```

```yaml
- banner:
  - link "TutorNearMe — trang chủ":
    - /url: /
    - text: TN
    - strong: TutorNearMe
    - text: Gia sư gần bạn
  - button "Mở menu"
- main:
  - text: HỌC ĐÚNG NGƯỜI · HỌC ĐÚNG CÁCH
  - heading "Tìm đúng gia sư. Học đúng cách. Tiến bộ rõ ràng." [level=1]
  - paragraph: Chọn gia sư theo môn học, khu vực, lịch rảnh và ngân sách. Xem hồ sơ rõ ràng trước khi kết nối.
  - link "Tìm gia sư ngay":
    - /url: "#finder"
  - button "Nhận tư vấn miễn phí"
  - strong: 1.200+
  - text: hồ sơ minh họa
  - strong: 4.9/5
  - text: điểm đánh giá demo
  - strong: 20+
  - text: môn học
  - img "Gia sư đang hướng dẫn học viên"
  - img "Nhóm học viên học tập"
  - text: 4.9 đánh giá nổi bật 1.8 km gia sư gần bạn
  - link "Tìm gia sư":
    - /url: "#finder"
    - strong: Tìm gia sư
  - link "Gia sư gần bạn":
    - /url: "#map-section"
    - strong: Gia sư gần bạn
  - link "Ưu đãi học viên":
    - /url: "#offers"
    - strong: Ưu đãi học viên
  - link "Góc học tập":
    - /url: "#stories"
    - strong: Góc học tập
  - text: TÌM NHANH THEO NHU CẦU
  - heading "Tìm gia sư đúng nhu cầu" [level=2]:
    - text: Tìm gia sư
    - emphasis: đúng nhu cầu
  - paragraph: Chọn trình độ, mục tiêu và khu vực để bắt đầu với nhóm gia sư phù hợp.
  - text: Bạn đang học
  - combobox "Bạn đang học":
    - option "THCS · Lớp 6–9" [selected]
    - option "THPT · Lớp 10–12"
    - option "Đại học"
    - option "Người đi làm"
  - text: Mục tiêu
  - combobox "Mục tiêu":
    - option "Củng cố kiến thức" [selected]
    - option "Luyện thi"
    - option "Mất gốc"
    - option "Nâng cao"
  - text: Khu vực
  - combobox "Khu vực":
    - option "Bình Thạnh" [selected]
    - option "Thủ Đức"
    - option "Quận 3"
    - option "Phú Nhuận"
  - button "Khám phá gia sư"
  - paragraph: "Gợi ý: THCS · Lớp 6–9 · Củng cố kiến thức · Bình Thạnh"
  - text: GIA SƯ CHO MỌI MỤC TIÊU
  - heading "Mỗi mục tiêu, một cách học phù hợp." [level=2]
  - paragraph: "Bắt đầu từ vấn đề thực tế: mất gốc, luyện thi, ngoại ngữ hoặc học nâng cao."
  - link "THCS · THPT Mất gốc & củng cố nền tảng Học theo nhịp độ riêng, tập trung vào phần kiến thức còn yếu. Tìm gia sư phù hợp":
    - /url: /learner/search
    - text: THCS · THPT
    - heading "Mất gốc & củng cố nền tảng" [level=3]
    - paragraph: Học theo nhịp độ riêng, tập trung vào phần kiến thức còn yếu.
    - text: Tìm gia sư phù hợp
  - link "ÔN THI Luyện thi vào 10 & THPT Ôn trọng tâm, giải đề và theo dõi tiến độ từng giai đoạn. Tìm gia sư phù hợp":
    - /url: /learner/search
    - text: ÔN THI
    - heading "Luyện thi vào 10 & THPT" [level=3]
    - paragraph: Ôn trọng tâm, giải đề và theo dõi tiến độ từng giai đoạn.
    - text: Tìm gia sư phù hợp
  - link "NGOẠI NGỮ Tiếng Anh & IELTS Luyện kỹ năng, phản xạ và chuẩn bị kỳ thi quốc tế. Tìm gia sư phù hợp":
    - /url: /learner/search
    - text: NGOẠI NGỮ
    - heading "Tiếng Anh & IELTS" [level=3]
    - paragraph: Luyện kỹ năng, phản xạ và chuẩn bị kỳ thi quốc tế.
    - text: Tìm gia sư phù hợp
  - text: GIA SƯ TIÊU BIỂU
  - heading "Hồ sơ rõ ràng. Chọn gia sư tự tin hơn." [level=2]
  - paragraph: Dữ liệu dưới đây là nội dung minh họa cho prototype giao diện.
  - link "Xem tất cả":
    - /url: /learner/search
  - article:
    - text: Hồ sơ demo đã xác minh
    - button "Lưu Nguyễn Mai Anh"
    - heading "Nguyễn Mai Anh" [level=3]
    - paragraph: ĐH Khoa học Tự nhiên
    - strong: "4.9"
    - text: 48 đánh giá Toán Bình Thạnh
    - strong: 180.000đ
    - text: / buổi
    - link "Xem hồ sơ":
      - /url: /tutors/mai-anh
  - article:
    - img "Ảnh minh họa gia sư Trần Gia Bảo"
    - text: Hồ sơ demo đã xác minh
    - button "Lưu Trần Gia Bảo"
    - heading "Trần Gia Bảo" [level=3]
    - paragraph: ĐH Ngoại thương
    - strong: "4.9"
    - text: 36 đánh giá Tiếng Anh Thủ Đức
    - strong: 220.000đ
    - text: / buổi
    - link "Xem hồ sơ":
      - /url: /tutors/quoc-bao
  - article:
    - img "Ảnh minh họa gia sư Phạm Hà Linh"
    - text: Hồ sơ demo đã xác minh
    - button "Lưu Phạm Hà Linh"
    - heading "Phạm Hà Linh" [level=3]
    - paragraph: ĐH Sư phạm TP.HCM
    - strong: "4.8"
    - text: 29 đánh giá Ngữ văn Quận 3
    - strong: 160.000đ
    - text: / buổi
    - link "Xem hồ sơ":
      - /url: /tutors/ha-linh
  - text: CỘNG ĐỒNG HỌC TẬP
  - heading "Mỗi buổi học tốt là một bước tiến." [level=2]
  - paragraph: "TutorNearMe tập trung vào trải nghiệm học thật: đúng mục tiêu, đúng nhịp độ và đúng người đồng hành."
  - strong: 15.000+
  - text: buổi học minh họa
  - strong: 20+
  - text: môn học
  - strong: 5 km
  - text: phạm vi ví dụ
  - img "Nhóm học viên trong môi trường học tập"
  - text: “Củng cố kiến thức trước kỳ thi” TUTORNEARME MAP
  - heading "Tìm gia sư giỏi ngay gần bạn." [level=2]
  - paragraph: Vị trí chỉ biểu diễn ở mức khu vực để hỗ trợ so sánh, không hiển thị địa chỉ nhà chính xác.
  - list:
    - listitem:
      - text: "01"
      - strong: Khoảng cách
      - text: Ưu tiên lựa chọn thuận tiện.
    - listitem:
      - text: "02"
      - strong: Hình thức
      - text: Tại nhà, online hoặc kết hợp.
    - listitem:
      - text: "03"
      - strong: Lịch rảnh
      - text: So sánh trước khi gửi yêu cầu.
  - link "Xem gia sư gần tôi":
    - /url: /learner/search
  - text: BÌNH THẠNH THỦ ĐỨC QUẬN 3
  - button "Xem gia sư Nguyễn Mai Anh"
  - button "Xem gia sư Trần Gia Bảo"
  - button "Xem gia sư Phạm Hà Linh"
  - button "Xem gia sư Lê Đức Minh"
  - text: MA
  - strong: Nguyễn Mai Anh
  - text: Toán · Bình Thạnh
  - button "Xem hồ sơ Nguyễn Mai Anh"
  - text: Khu vực minh họa · Không hiển thị địa chỉ chính xác
  - img "Phụ huynh và học viên trao đổi kế hoạch học tập"
  - text: Chưa biết chọn gia sư thế nào? Bắt đầu bằng nhu cầu của bạn. NHẬN TƯ VẤN TÌM GIA SƯ
  - heading "Chia sẻ nhu cầu. Nhận gợi ý phù hợp." [level=2]
  - paragraph: Form này chỉ minh họa giao diện, không gửi dữ liệu thật.
  - text: Họ và tên
  - textbox "Họ và tên":
    - /placeholder: Tên của bạn
  - text: Số điện thoại
  - textbox "Số điện thoại":
    - /placeholder: Số điện thoại demo
  - text: Môn học
  - combobox "Môn học":
    - option "Toán" [selected]
    - option "Tiếng Anh"
    - option "Vật lý"
  - text: Khu vực
  - combobox "Khu vực":
    - option "Bình Thạnh" [selected]
    - option "Thủ Đức"
    - option "Quận 3"
  - text: Nhu cầu học tập
  - textbox "Nhu cầu học tập":
    - /placeholder: Mục tiêu, lịch học phù hợp...
  - button "Nhận gợi ý phù hợp"
  - text: ƯU ĐÃI DEMO · HỌC VIÊN MỚI
  - heading "Buổi đầu nhẹ nhàng hơn. Khởi đầu tự tin hơn." [level=2]
  - paragraph: Minh họa chương trình giảm 20% cho buổi học đầu tiên khi kết nối qua TutorNearMe.
  - button "Khám phá ưu đãi"
  - text: "* Nội dung khuyến mãi là dữ liệu demo. 3 BƯỚC ĐỂ BẮT ĐẦU"
  - heading "Từ nhu cầu đến buổi học đầu tiên." [level=2]
  - paragraph: Quy trình rõ ràng giúp phụ huynh, học viên và gia sư phối hợp dễ hơn.
  - text: "01"
  - heading "Tìm" [level=3]
  - paragraph: Chọn môn học, khu vực, lịch, hình thức và ngân sách.
  - text: "02"
  - heading "Kết nối" [level=3]
  - paragraph: Xem hồ sơ, đánh giá, lịch trống và gửi yêu cầu.
  - text: "03"
  - heading "Bắt đầu học" [level=3]
  - paragraph: Thống nhất lịch học và bắt đầu buổi đầu tiên.
  - text: GÓC HỌC TẬP
  - heading "Mẹo học dễ áp dụng mỗi ngày." [level=2]
  - article:
    - img "Học sinh đang học"
    - text: PHƯƠNG PHÁP HỌC
    - heading "5 câu hỏi nên đặt ra trước khi chọn một gia sư." [level=3]
    - paragraph: Đừng chỉ nhìn học phí. Hãy xem mục tiêu, cách dạy, lịch và mức độ phù hợp.
  - article:
    - text: ÔN THI
    - heading "Cách chia lộ trình 8 tuần trước kỳ thi." [level=3]
    - paragraph: Một kế hoạch vừa sức sẽ giúp việc học đều đặn hơn.
  - article:
    - text: NGOẠI NGỮ
    - heading "Học 1-1 khác gì lớp nhóm?" [level=3]
    - paragraph: Hiểu cách học nào phù hợp với mục tiêu hiện tại.
  - text: DÀNH CHO GIA SƯ
  - heading "Bạn giỏi một môn học? Có người đang cần bạn." [level=2]
  - paragraph: Xây hồ sơ chuyên môn, chủ động lịch dạy và kết nối học viên phù hợp trong khu vực.
  - link "Trở thành gia sư":
    - /url: /tutor
  - text: Chủ động lịch dạy Kết nối học viên gần bạn BẮT ĐẦU NGAY HÔM NAY
  - heading "Sẵn sàng tìm gia sư phù hợp?" [level=2]
  - link "Tìm gia sư ngay":
    - /url: /learner/search
- contentinfo:
  - link "TN TutorNearMe Gia sư gần bạn":
    - /url: /
    - text: TN
    - strong: TutorNearMe
    - text: Gia sư gần bạn
  - paragraph: Kết nối người học và gia sư theo môn học, khu vực, lịch rảnh và mục tiêu.
  - strong: Người học
  - link "Dành cho người học":
    - /url: /learner
  - link "Tìm gia sư":
    - /url: /learner/search
  - link "Yêu cầu học":
    - /url: /requests
  - strong: Gia sư
  - link "Trở thành gia sư":
    - /url: /tutor
  - link "Không gian gia sư":
    - /url: /tutor/dashboard
  - link "Cơ hội dạy":
    - /url: /tutor/requests
  - strong: Khám phá
  - link "Trang chủ":
    - /url: /
  - link "Admin demo":
    - /url: /admin/dashboard
  - text: © 2026 TutorNearMe · Giao diện tương tác với dữ liệu minh họa.
- complementary "Widget nhắn tin nhanh":
  - button "Mở cửa sổ trò chuyện"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { createDemoState, DOMAIN_STORAGE_KEY } from '../../src/features/domain/demoDomain.js';
  3  | import { resetDemo, login, fixedTime } from './demoHelpers.js';
  4  | 
  5  | test('TUTOR-FLOW share trip opens a functional local demo view and stays within mobile bounds', async ({ page }) => {
  6  |   await page.setViewportSize({width:390,height:844});
  7  |   await resetDemo(page); await login(page,'giabao','/tutor/timetable');
  8  |   await page.getByRole('button',{name:'Chia sẻ buổi dạy',exact:true}).first().click();
  9  |   const dialog=page.getByRole('dialog',{name:'Chia sẻ hành trình dạy học cho người thân'});
  10 |   const link=dialog.getByLabel('Liên kết demo buổi dạy');
  11 |   await expect(link).toHaveValue(/\/safety\/trip\?lesson=/);
  12 |   const box=await dialog.boundingBox(); const copy=await dialog.getByRole('button',{name:'Sao chép',exact:true}).boundingBox();
  13 |   expect(copy.x+copy.width).toBeLessThanOrEqual(box.x+box.width);
  14 |   await dialog.getByRole('link',{name:'Xem hành trình demo'}).click();
> 15 |   await expect(page.getByRole('heading',{name:'Hành trình buổi dạy demo'})).toBeVisible();
     |                                                                             ^ Error: expect(locator).toBeVisible() failed
  16 |   await expect(page.locator('main')).toContainText(/không.*GPS/i);
  17 | });
  18 | 
  19 | test('TUTOR-FLOW onboarding checklist and two student card images persist', async ({page})=>{
  20 |   await resetDemo(page); await login(page,'giabao','/tutor/profile');
  21 |   const image={name:'student-card.png',mimeType:'image/png',buffer:Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+j5ZkAAAAASUVORK5CYII=','base64')};
  22 |   await page.getByLabel('Ảnh mặt trước thẻ sinh viên').setInputFiles(image);
  23 |   await page.getByLabel('Ảnh mặt sau thẻ sinh viên').setInputFiles({...image,name:'student-card-back.png'});
  24 |   await page.getByRole('button',{name:'Gửi hồ sơ xác minh demo'}).click();
  25 |   await expect(page.getByRole('status')).toContainText('chờ Admin');
  26 |   await page.reload();
  27 |   await expect(page.getByRole('img',{name:'Mặt trước thẻ sinh viên'})).toBeVisible();
  28 |   await expect(page.getByRole('img',{name:'Mặt sau thẻ sinh viên'})).toBeVisible();
  29 |   await page.goto('/tutor/dashboard');
  30 |   await expect(page.getByLabel('Checklist hồ sơ gia sư')).toContainText('6/6');
  31 | });
  32 | 
  33 | test('TUTOR-FLOW pending application can be withdrawn and remains withdrawn on reload',async({page})=>{
  34 |   await resetDemo(page); await login(page,'giabao','/tutor/find-students');
  35 |   await page.getByRole('tab',{name:/Đơn ứng tuyển của tôi/}).click();
  36 |   const card=page.locator('.my-proposal-card').first();
  37 |   await card.getByRole('button',{name:'Rút đơn ứng tuyển'}).click();
  38 |   await expect(card).toContainText('Đã rút đơn'); await page.reload();
  39 |   await page.getByRole('tab',{name:/Đơn ứng tuyển của tôi/}).click();
  40 |   await expect(page.locator('.my-proposal-card').first()).toContainText('Đã rút đơn');
  41 | });
  42 | 
  43 | test('TUTOR-FLOW lesson progress, material and learner review persist through the shared domain',async({page})=>{
  44 |   const state=createDemoState(fixedTime);const lesson=state.lessons.find(l=>l.id==='seed-0');
  45 |   await resetDemo(page,{state}); await login(page,'giabao','/tutor/timetable');
  46 |   await page.getByRole('button',{name:new RegExp(`${lesson.subject}.*${lesson.learner}`)}).click();
  47 |   const dialog=page.getByRole('dialog',{name:'Chi tiết lớp học'});
  48 |   await dialog.getByLabel('Nhận xét tiến độ buổi học').fill('Đã nắm chắc nội dung; luyện thêm bài tập.');
  49 |   await dialog.getByLabel('Tài liệu và bài tập buổi học').setInputFiles({name:'lesson.txt',mimeType:'text/plain',buffer:Buffer.from('Demo lesson material')});
  50 |   await dialog.getByRole('button',{name:'Lưu tiến độ và tài liệu'}).click();
  51 |   await expect(dialog.getByRole('link',{name:'lesson.txt'})).toBeVisible();
  52 |   await dialog.getByRole('button',{name:'Đánh dấu hoàn tất'}).click();
  53 |   await dialog.getByLabel('Đánh giá người học').selectOption('5');
  54 |   await dialog.getByLabel('Nhận xét về người học').fill('Người học tích cực và đúng giờ.');
  55 |   await dialog.getByRole('button',{name:'Gửi đánh giá người học'}).click();
  56 |   await expect(dialog).toContainText('Đã lưu đánh giá người học');
  57 |   const runtime=await page.evaluate(key=>JSON.parse(localStorage.getItem(key)),DOMAIN_STORAGE_KEY);
  58 |   const saved=runtime.lessons.find(l=>l.id===lesson.id);
  59 |   expect(saved.progress).toContain('Đã nắm chắc');expect(saved.materials[0].name).toBe('lesson.txt');
  60 |   expect(runtime.tutorReviews.some(r=>r.lessonId===lesson.id)).toBe(true);
  61 | });
  62 | 
```