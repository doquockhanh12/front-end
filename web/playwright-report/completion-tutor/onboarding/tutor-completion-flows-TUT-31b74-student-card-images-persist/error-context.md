# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tutor-completion-flows.spec.js >> TUTOR-FLOW onboarding checklist and two student card images persist
- Location: tests\e2e\tutor-completion-flows.spec.js:19:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByRole('status')
Expected substring: "chờ Admin"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" getByRole('status') with timeout 5000ms
  - waiting for getByRole('status')

```

```yaml
- complementary "Điều hướng gia sư":
  - link "TutorNearMe Gia sư gần bạn. Tri thức gần hơn.":
    - /url: /
    - strong: TutorNearMe
    - text: Gia sư gần bạn. Tri thức gần hơn.
  - navigation "Các mục của gia sư":
    - link "Tổng quan":
      - /url: /tutor/dashboard
    - link "Yêu cầu học 6":
      - /url: /tutor/requests
    - link "Lịch dạy học":
      - /url: /tutor/timetable
    - link "Tìm học viên mới":
      - /url: /tutor/find-students
    - link "Ví & Thu nhập":
      - /url: /tutor/wallet
    - link "Thu nhập":
      - /url: /tutor/income
    - link "Hồ sơ gia sư":
      - /url: /tutor/profile
    - link "Tin nhắn":
      - /url: /messages
    - link "Kháng cáo":
      - /url: /appeals
    - link "Trung tâm Trợ giúp":
      - /url: /help
- banner:
  - navigation "Điều hướng nhanh":
    - link "Tìm lớp gần tôi":
      - /url: /tutor/map
    - link "Tổng Quan":
      - /url: /tutor/dashboard
  - button "Thông báo": "1"
  - link "Ảnh đại diện của Trần Gia Bảo giabao":
    - /url: /tutor/profile
    - img "Ảnh đại diện của Trần Gia Bảo"
    - text: giabao
  - button "Đăng xuất"
- main:
  - text: KHÔNG GIAN GIA SƯ · DEMO
  - heading "Hồ sơ gia sư" [level=1]
  - paragraph: Xem và chỉnh thông tin hiển thị trong hồ sơ demo.
  - heading "Thông tin chuyên môn" [level=2]
  - text: Họ và tên
  - textbox "Họ và tên": Trần Gia Bảo
  - text: Môn có thể dạy
  - textbox "Môn có thể dạy": Tiếng Anh, IELTS
  - group "Cấp độ có thể dạy":
    - text: Cấp độ có thể dạy
    - paragraph: Chọn một hoặc nhiều cấp độ phù hợp.
    - checkbox "Mầm Non"
    - text: Mầm Non
    - checkbox "Tiểu Học"
    - text: Tiểu Học
    - checkbox "THCS" [checked]
    - text: THCS
    - checkbox "THPT" [checked]
    - text: THPT
    - checkbox "Đại Học"
    - text: Đại Học
  - text: Khu vực dạy
  - textbox "Khu vực dạy": Thủ Đức
  - text: Mức phí mỗi buổi
  - spinbutton "Mức phí mỗi buổi": "220000"
  - text: Thời gian dạy cho một buổi
  - combobox "Thời gian dạy cho một buổi":
    - option "45 phút" [selected]
    - option "90 phút"
  - text: Giới thiệu cách dạy
  - textbox "Giới thiệu cách dạy": Tập trung phản xạ giao tiếp và phương pháp tự học để học viên tiến bộ bền vững.
  - button "Lưu hồ sơ demo"
  - complementary:
    - text: XEM TRƯỚC HỒ SƠ
    - heading "Trần Gia Bảo" [level=3]
    - paragraph: Tiếng Anh, IELTS · Thủ Đức
    - strong: 220.000đ / buổi
    - paragraph: "Thời lượng: 45 phút / buổi"
    - paragraph: Tập trung phản xạ giao tiếp và phương pháp tự học để học viên tiến bộ bền vững.
    - paragraph: "Cấp độ: THCS, THPT"
    - 'link "Tiếp tục: lịch dạy học"':
      - /url: /tutor/timetable
  - region "Xác minh thẻ sinh viên":
    - heading "Thẻ sinh viên & tích xanh" [level=2]
    - paragraph: Hai mặt thẻ được lưu trong trình duyệt này để Admin xét duyệt demo. Không phải dịch vụ xác minh danh tính thật.
    - text: Ảnh mặt trước thẻ sinh viên
    - button "Ảnh mặt trước thẻ sinh viên Mặt trước thẻ sinh viên student-card.png"
    - img "Mặt trước thẻ sinh viên"
    - text: student-card.png Ảnh mặt sau thẻ sinh viên
    - button "Ảnh mặt sau thẻ sinh viên Mặt sau thẻ sinh viên student-card-back.png"
    - img "Mặt sau thẻ sinh viên"
    - text: student-card-back.png
    - button "Gửi hồ sơ xác minh demo"
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
  15 |   await expect(page.getByRole('heading',{name:'Hành trình buổi dạy demo'})).toBeVisible();
  16 |   await expect(page.locator('main')).toContainText(/không.*GPS/i);
  17 | });
  18 | 
  19 | test('TUTOR-FLOW onboarding checklist and two student card images persist', async ({page})=>{
  20 |   await resetDemo(page); await login(page,'giabao','/tutor/profile');
  21 |   const image={name:'student-card.png',mimeType:'image/png',buffer:Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+j5ZkAAAAASUVORK5CYII=','base64')};
  22 |   await page.getByLabel('Ảnh mặt trước thẻ sinh viên').setInputFiles(image);
  23 |   await page.getByLabel('Ảnh mặt sau thẻ sinh viên').setInputFiles({...image,name:'student-card-back.png'});
  24 |   await page.getByRole('button',{name:'Gửi hồ sơ xác minh demo'}).click();
> 25 |   await expect(page.getByRole('status')).toContainText('chờ Admin');
     |                                          ^ Error: expect(locator).toContainText(expected) failed
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