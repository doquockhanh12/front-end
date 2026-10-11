# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-learner-audit.spec.js >> UI-COMP-L07 lesson modal supports keyboard Escape and focus return
- Location: tests\e2e\completion-learner-audit.spec.js:81:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false

Call Log:
- Timeout 5000ms exceeded while waiting on the predicate
```

# Page snapshot

```yaml
- generic [ref=f1e1]:
  - generic [ref=f1e2]:
    - generic [ref=f1e3]:
      - banner [ref=f1e4]:
        - generic [ref=f1e5]:
          - link "TutorNearMe — trang chủ" [ref=f1e6] [cursor=pointer]:
            - /url: /
            - generic [ref=f1e7]: TN
            - generic [ref=f1e8]:
              - strong [ref=f1e9]: TutorNearMe
              - generic [ref=f1e10]: Gia sư gần bạn
          - navigation "Điều hướng chính" [ref=f1e11]:
            - link "Tìm gia sư" [ref=f1e12] [cursor=pointer]:
              - /url: /learner/search
            - link "Đăng tin lớp" [ref=f1e13] [cursor=pointer]:
              - /url: /learner/post-class
            - link "Lớp của tôi" [ref=f1e14] [cursor=pointer]:
              - /url: /learner/my-classes
            - link "Lịch học" [ref=f1e15] [cursor=pointer]:
              - /url: /learner/schedule
            - link "Ví của tôi" [ref=f1e16] [cursor=pointer]:
              - /url: /learner/wallet
            - link "Trợ giúp" [ref=f1e17] [cursor=pointer]:
              - /url: /help
          - generic [ref=f1e18]:
            - button "Thông báo" [ref=f1e20] [cursor=pointer]:
              - generic [ref=f1e24]: "1"
            - link "Ảnh đại diện của Nguyễn Minh Anh minhanh" [ref=f1e25] [cursor=pointer]:
              - /url: /learner/dashboard
              - img "Ảnh đại diện của Nguyễn Minh Anh" [ref=f1e26]:
                - generic [aria-hidden] [ref=f1e27]: MA
              - generic [ref=f1e28]: minhanh
            - button "Đăng xuất" [ref=f1e29] [cursor=pointer]
      - main [ref=f1e33]:
        - generic [ref=f1e34]:
          - generic [ref=f1e35]:
            - generic [ref=f1e36]: LỊCH HỌC & LỚP TRỰC TUYẾN
            - heading "Lịch học gia sư của bạn" [level=1] [ref=f1e37]
            - paragraph [ref=f1e38]: Xem lịch học, tham gia phòng học Google Meet và quản lý bảo lưu buổi dạy.
          - generic [ref=f1e39]:
            - button "Danh sách" [ref=f1e40] [cursor=pointer]
            - button "Lịch tuần" [ref=f1e42] [cursor=pointer]
        - generic [ref=f1e45]:
          - generic [ref=f1e46]:
            - button "Tất cả (20)" [ref=f1e47] [cursor=pointer]
            - button "Sắp diễn ra" [ref=f1e48] [cursor=pointer]
            - button "Đã hoàn thành" [ref=f1e49] [cursor=pointer]
            - button "Đã hủy" [ref=f1e50] [cursor=pointer]
          - generic [ref=f1e51]:
            - article [ref=f1e52]:
              - generic [ref=f1e53]:
                - generic [ref=f1e54]:
                  - strong [ref=f1e55]: Thứ 3, 06/10
                  - text: "2026"
                - generic [ref=f1e56]:
                  - heading "Toán" [level=3] [ref=f1e57]
                  - generic [ref=f1e58]:
                    - generic [ref=f1e59]: 07:00 – 07:45
                    - generic [ref=f1e63]: •
                    - generic [ref=f1e64]:
                      - text: "Gia sư:"
                      - strong [ref=f1e65]: Trần Gia Bảo
                    - generic [ref=f1e66]: •
                    - generic [ref=f1e67]: Địa điểm minh họa
              - generic [ref=f1e71]:
                - button "Vào phòng học Online" [ref=f1e72] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [active] [ref=f1e76] [cursor=pointer]
            - article [ref=f1e77]:
              - generic [ref=f1e78]:
                - generic [ref=f1e79]:
                  - strong [ref=f1e80]: Thứ 5, 08/10
                  - text: "2026"
                - generic [ref=f1e81]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e82]
                  - generic [ref=f1e83]:
                    - generic [ref=f1e84]: 08:30 – 09:15
                    - generic [ref=f1e88]: •
                    - generic [ref=f1e89]:
                      - text: "Gia sư:"
                      - strong [ref=f1e90]: Trần Gia Bảo
                    - generic [ref=f1e91]: •
                    - generic [ref=f1e92]: Địa điểm minh họa
              - generic [ref=f1e96]:
                - button "Vào phòng học Online" [ref=f1e97] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e101] [cursor=pointer]
            - article [ref=f1e102]:
              - generic [ref=f1e103]:
                - generic [ref=f1e104]:
                  - strong [ref=f1e105]: Thứ 6, 09/10
                  - text: "2026"
                - generic [ref=f1e106]:
                  - heading "Vật lý" [level=3] [ref=f1e107]
                  - generic [ref=f1e108]:
                    - generic [ref=f1e109]: 13:00 – 13:45
                    - generic [ref=f1e113]: •
                    - generic [ref=f1e114]:
                      - text: "Gia sư:"
                      - strong [ref=f1e115]: Trần Gia Bảo
                    - generic [ref=f1e116]: •
                    - generic [ref=f1e117]: Địa điểm minh họa
              - generic [ref=f1e121]:
                - button "Vào phòng học Online" [ref=f1e122] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e126] [cursor=pointer]
            - article [ref=f1e127]:
              - generic [ref=f1e128]:
                - generic [ref=f1e129]:
                  - strong [ref=f1e130]: Thứ 4, 07/10
                  - text: "2026"
                - generic [ref=f1e131]:
                  - heading "Toán" [level=3] [ref=f1e132]
                  - generic [ref=f1e133]:
                    - generic [ref=f1e134]: 14:30 – 15:15
                    - generic [ref=f1e138]: •
                    - generic [ref=f1e139]:
                      - text: "Gia sư:"
                      - strong [ref=f1e140]: Trần Gia Bảo
                    - generic [ref=f1e141]: •
                    - generic [ref=f1e142]: Địa điểm minh họa
              - generic [ref=f1e146]:
                - button "Vào phòng học Online" [ref=f1e147] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e151] [cursor=pointer]
            - article [ref=f1e152]:
              - generic [ref=f1e153]:
                - generic [ref=f1e154]:
                  - strong [ref=f1e155]: Thứ 7, 10/10
                  - text: "2026"
                - generic [ref=f1e156]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e157]
                  - generic [ref=f1e158]:
                    - generic [ref=f1e159]: 16:45 – 17:30
                    - generic [ref=f1e163]: •
                    - generic [ref=f1e164]:
                      - text: "Gia sư:"
                      - strong [ref=f1e165]: Trần Gia Bảo
                    - generic [ref=f1e166]: •
                    - generic [ref=f1e167]: Địa điểm minh họa
              - generic [ref=f1e171]:
                - button "Vào phòng học Online" [ref=f1e172] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e176] [cursor=pointer]
            - article [ref=f1e177]:
              - generic [ref=f1e178]:
                - generic [ref=f1e179]:
                  - strong [ref=f1e180]: Thứ 7, 09/05
                  - text: "2026"
                - generic [ref=f1e181]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e182]
                  - generic [ref=f1e183]:
                    - generic [ref=f1e184]: 09:00 – 09:45
                    - generic [ref=f1e188]: •
                    - generic [ref=f1e189]:
                      - text: "Gia sư:"
                      - strong [ref=f1e190]: Trần Gia Bảo
                    - generic [ref=f1e191]: •
                    - generic [ref=f1e192]: Online
              - generic [ref=f1e196]:
                - button "Vào phòng học Online" [ref=f1e197] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e201] [cursor=pointer]
            - article [ref=f1e202]:
              - generic [ref=f1e203]:
                - generic [ref=f1e204]:
                  - strong [ref=f1e205]: Thứ 7, 06/06
                  - text: "2026"
                - generic [ref=f1e206]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e207]
                  - generic [ref=f1e208]:
                    - generic [ref=f1e209]: 18:00 – 18:45
                    - generic [ref=f1e213]: •
                    - generic [ref=f1e214]:
                      - text: "Gia sư:"
                      - strong [ref=f1e215]: Trần Gia Bảo
                    - generic [ref=f1e216]: •
                    - generic [ref=f1e217]: Online
              - generic [ref=f1e221]:
                - button "Vào phòng học Online" [ref=f1e222] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e226] [cursor=pointer]
            - article [ref=f1e227]:
              - generic [ref=f1e228]:
                - generic [ref=f1e229]:
                  - strong [ref=f1e230]: Thứ 7, 20/06
                  - text: "2026"
                - generic [ref=f1e231]:
                  - heading "IELTS" [level=3] [ref=f1e232]
                  - generic [ref=f1e233]:
                    - generic [ref=f1e234]: 19:00 – 19:45
                    - generic [ref=f1e238]: •
                    - generic [ref=f1e239]:
                      - text: "Gia sư:"
                      - strong [ref=f1e240]: Trần Gia Bảo
                    - generic [ref=f1e241]: •
                    - generic [ref=f1e242]: Online
              - generic [ref=f1e246]:
                - button "Vào phòng học Online" [ref=f1e247] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e251] [cursor=pointer]
            - article [ref=f1e252]:
              - generic [ref=f1e253]:
                - generic [ref=f1e254]:
                  - strong [ref=f1e255]: Thứ 6, 03/07
                  - text: "2026"
                - generic [ref=f1e256]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e257]
                  - generic [ref=f1e258]:
                    - generic [ref=f1e259]: 18:00 – 18:45
                    - generic [ref=f1e263]: •
                    - generic [ref=f1e264]:
                      - text: "Gia sư:"
                      - strong [ref=f1e265]: Trần Gia Bảo
                    - generic [ref=f1e266]: •
                    - generic [ref=f1e267]: Online
              - generic [ref=f1e271]:
                - button "Vào phòng học Online" [ref=f1e272] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e276] [cursor=pointer]
            - article [ref=f1e277]:
              - generic [ref=f1e278]:
                - generic [ref=f1e279]:
                  - strong [ref=f1e280]: Thứ 6, 17/07
                  - text: "2026"
                - generic [ref=f1e281]:
                  - heading "IELTS" [level=3] [ref=f1e282]
                  - generic [ref=f1e283]:
                    - generic [ref=f1e284]: 19:00 – 19:45
                    - generic [ref=f1e288]: •
                    - generic [ref=f1e289]:
                      - text: "Gia sư:"
                      - strong [ref=f1e290]: Trần Gia Bảo
                    - generic [ref=f1e291]: •
                    - generic [ref=f1e292]: Thủ Đức
              - generic [ref=f1e296]:
                - button "Vào phòng học Online" [ref=f1e297] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e301] [cursor=pointer]
            - article [ref=f1e302]:
              - generic [ref=f1e303]:
                - generic [ref=f1e304]:
                  - strong [ref=f1e305]: Thứ 6, 07/08
                  - text: "2026"
                - generic [ref=f1e306]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e307]
                  - generic [ref=f1e308]:
                    - generic [ref=f1e309]: 18:00 – 18:45
                    - generic [ref=f1e313]: •
                    - generic [ref=f1e314]:
                      - text: "Gia sư:"
                      - strong [ref=f1e315]: Trần Gia Bảo
                    - generic [ref=f1e316]: •
                    - generic [ref=f1e317]: Online
              - generic [ref=f1e321]:
                - button "Vào phòng học Online" [ref=f1e322] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e326] [cursor=pointer]
            - article [ref=f1e327]:
              - generic [ref=f1e328]:
                - generic [ref=f1e329]:
                  - strong [ref=f1e330]: Thứ 7, 15/08
                  - text: "2026"
                - generic [ref=f1e331]:
                  - heading "IELTS" [level=3] [ref=f1e332]
                  - generic [ref=f1e333]:
                    - generic [ref=f1e334]: 19:00 – 19:45
                    - generic [ref=f1e338]: •
                    - generic [ref=f1e339]:
                      - text: "Gia sư:"
                      - strong [ref=f1e340]: Trần Gia Bảo
                    - generic [ref=f1e341]: •
                    - generic [ref=f1e342]: Online
              - generic [ref=f1e346]:
                - button "Vào phòng học Online" [ref=f1e347] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e351] [cursor=pointer]
            - article [ref=f1e352]:
              - generic [ref=f1e353]:
                - generic [ref=f1e354]:
                  - strong [ref=f1e355]: Thứ 6, 28/08
                  - text: "2026"
                - generic [ref=f1e356]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e357]
                  - generic [ref=f1e358]:
                    - generic [ref=f1e359]: 09:00 – 09:45
                    - generic [ref=f1e363]: •
                    - generic [ref=f1e364]:
                      - text: "Gia sư:"
                      - strong [ref=f1e365]: Trần Gia Bảo
                    - generic [ref=f1e366]: •
                    - generic [ref=f1e367]: Thủ Đức
              - generic [ref=f1e371]:
                - button "Vào phòng học Online" [ref=f1e372] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e376] [cursor=pointer]
            - article [ref=f1e377]:
              - generic [ref=f1e378]:
                - generic [ref=f1e379]:
                  - strong [ref=f1e380]: Thứ 7, 05/09
                  - text: "2026"
                - generic [ref=f1e381]:
                  - heading "IELTS" [level=3] [ref=f1e382]
                  - generic [ref=f1e383]:
                    - generic [ref=f1e384]: 19:00 – 19:45
                    - generic [ref=f1e388]: •
                    - generic [ref=f1e389]:
                      - text: "Gia sư:"
                      - strong [ref=f1e390]: Trần Gia Bảo
                    - generic [ref=f1e391]: •
                    - generic [ref=f1e392]: Online
              - generic [ref=f1e396]:
                - button "Vào phòng học Online" [ref=f1e397] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e401] [cursor=pointer]
            - article [ref=f1e402]:
              - generic [ref=f1e403]:
                - generic [ref=f1e404]:
                  - strong [ref=f1e405]: Thứ 7, 12/09
                  - text: "2026"
                - generic [ref=f1e406]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e407]
                  - generic [ref=f1e408]:
                    - generic [ref=f1e409]: 18:00 – 18:45
                    - generic [ref=f1e413]: •
                    - generic [ref=f1e414]:
                      - text: "Gia sư:"
                      - strong [ref=f1e415]: Trần Gia Bảo
                    - generic [ref=f1e416]: •
                    - generic [ref=f1e417]: Online
              - generic [ref=f1e421]:
                - button "Vào phòng học Online" [ref=f1e422] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e426] [cursor=pointer]
            - article [ref=f1e427]:
              - generic [ref=f1e428]:
                - generic [ref=f1e429]:
                  - strong [ref=f1e430]: CN, 20/09
                  - text: "2026"
                - generic [ref=f1e431]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e432]
                  - generic [ref=f1e433]:
                    - generic [ref=f1e434]: 18:00 – 18:45
                    - generic [ref=f1e438]: •
                    - generic [ref=f1e439]:
                      - text: "Gia sư:"
                      - strong [ref=f1e440]: Trần Gia Bảo
                    - generic [ref=f1e441]: •
                    - generic [ref=f1e442]: Online
              - generic [ref=f1e446]:
                - button "Vào phòng học Online" [ref=f1e447] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e451] [cursor=pointer]
            - article [ref=f1e452]:
              - generic [ref=f1e453]:
                - generic [ref=f1e454]:
                  - strong [ref=f1e455]: CN, 27/09
                  - text: "2026"
                - generic [ref=f1e456]:
                  - heading "IELTS" [level=3] [ref=f1e457]
                  - generic [ref=f1e458]:
                    - generic [ref=f1e459]: 19:00 – 19:45
                    - generic [ref=f1e463]: •
                    - generic [ref=f1e464]:
                      - text: "Gia sư:"
                      - strong [ref=f1e465]: Trần Gia Bảo
                    - generic [ref=f1e466]: •
                    - generic [ref=f1e467]: Online
              - generic [ref=f1e471]:
                - button "Vào phòng học Online" [ref=f1e472] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e476] [cursor=pointer]
            - article [ref=f1e477]:
              - generic [ref=f1e478]:
                - generic [ref=f1e479]:
                  - strong [ref=f1e480]: Thứ 5, 01/10
                  - text: "2026"
                - generic [ref=f1e481]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e482]
                  - generic [ref=f1e483]:
                    - generic [ref=f1e484]: 18:00 – 18:45
                    - generic [ref=f1e488]: •
                    - generic [ref=f1e489]:
                      - text: "Gia sư:"
                      - strong [ref=f1e490]: Trần Gia Bảo
                    - generic [ref=f1e491]: •
                    - generic [ref=f1e492]: Online
              - generic [ref=f1e496]:
                - button "Vào phòng học Online" [ref=f1e497] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e501] [cursor=pointer]
            - article [ref=f1e502]:
              - generic [ref=f1e503]:
                - generic [ref=f1e504]:
                  - strong [ref=f1e505]: Thứ 6, 02/10
                  - text: "2026"
                - generic [ref=f1e506]:
                  - heading "IELTS" [level=3] [ref=f1e507]
                  - generic [ref=f1e508]:
                    - generic [ref=f1e509]: 19:00 – 19:45
                    - generic [ref=f1e513]: •
                    - generic [ref=f1e514]:
                      - text: "Gia sư:"
                      - strong [ref=f1e515]: Trần Gia Bảo
                    - generic [ref=f1e516]: •
                    - generic [ref=f1e517]: Online
              - generic [ref=f1e521]:
                - button "Vào phòng học Online" [ref=f1e522] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e526] [cursor=pointer]
            - article [ref=f1e527]:
              - generic [ref=f1e528]:
                - generic [ref=f1e529]:
                  - strong [ref=f1e530]: Thứ 7, 03/10
                  - text: "2026"
                - generic [ref=f1e531]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e532]
                  - generic [ref=f1e533]:
                    - generic [ref=f1e534]: 09:00 – 09:45
                    - generic [ref=f1e538]: •
                    - generic [ref=f1e539]:
                      - text: "Gia sư:"
                      - strong [ref=f1e540]: Trần Gia Bảo
                    - generic [ref=f1e541]: •
                    - generic [ref=f1e542]: Online
              - generic [ref=f1e546]:
                - button "Vào phòng học Online" [ref=f1e547] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e551] [cursor=pointer]
    - complementary "Widget nhắn tin nhanh" [ref=f1e552]:
      - button "Mở cửa sổ trò chuyện" [ref=f1e553] [cursor=pointer]:
        - generic [ref=f1e556]: "1"
  - dialog [ref=f1e558]:
    - button "Đóng cửa sổ" [ref=f1e559] [cursor=pointer]
    - banner [ref=f1e563]:
      - generic [ref=f1e564]: CHI TIẾT BUỔI HỌC
      - heading "Toán" [level=2] [ref=f1e565]
      - generic [ref=f1e566]:
        - generic [ref=f1e567]: Thứ 3, 06/10 · 07:00 – 07:45
        - generic [ref=f1e571]: •
        - generic [ref=f1e572]:
          - text: "Gia sư:"
          - strong [ref=f1e573]: Trần Gia Bảo
        - generic [ref=f1e574]: •
        - generic [ref=f1e575]:
          - text: "Học phí:"
          - strong [ref=f1e576]: 220.000 đ
    - generic [ref=f1e577]:
      - button "Vào phòng học Online (Google Meet)" [ref=f1e578] [cursor=pointer]
      - generic [ref=f1e582]: Phòng học kích hoạt tự động 15 phút trước giờ học và bảo mật chuẩn Google Meet HD.
    - generic [ref=f1e583]:
      - heading "Tài liệu & Bài tập về nhà" [level=3] [ref=f1e584]
      - generic [ref=f1e588]:
        - generic [ref=f1e589]:
          - generic [ref=f1e590]:
            - strong [ref=f1e591]: Slide_LyThuyet_ChuyenDe.pdf
            - generic [ref=f1e592]: PDF · 2.4 MB · Cập nhật bởi gia sư
          - button "Tải về" [ref=f1e593] [cursor=pointer]
        - generic [ref=f1e597]:
          - generic [ref=f1e598]:
            - strong [ref=f1e599]: BaiTap_TuLuyen_15Cau.docx
            - generic [ref=f1e600]: Tài liệu bài tập ôn tập tại nhà
          - button "Nộp bài" [ref=f1e601] [cursor=pointer]
        - generic [ref=f1e605]: "Ghi chú buổi học: Học sinh ôn kỹ lý thuyết chuyên đề và chuẩn bị câu hỏi trước khi vào lớp."
    - generic [ref=f1e606]:
      - heading "Chính sách & Hủy buổi học" [level=3] [ref=f1e607]
      - generic [ref=f1e610]:
        - text: "Thời gian trước giờ học (Mô phỏng):"
        - generic [ref=f1e611]:
          - 'button "> 24h (Ví dụ: 26 giờ)" [ref=f1e612] [cursor=pointer]'
          - 'button "2h – 24h (Ví dụ: 5 giờ)" [ref=f1e613] [cursor=pointer]'
          - 'button "< 2h (Ví dụ: 1 giờ)" [ref=f1e614] [cursor=pointer]'
      - generic [ref=f1e615]:
        - generic [ref=f1e616]:
          - generic [ref=f1e617]: "Quy chế áp dụng:"
          - generic [ref=f1e618]: "Hủy trước >= 24h: Hoàn tiền 100%"
        - generic [ref=f1e619]:
          - generic [ref=f1e620]: "Số tiền bạn được hoàn:"
          - generic [ref=f1e621]: +220.000 đ (100%)
        - generic [ref=f1e622]:
          - generic [ref=f1e623]: "Bồi thường cho gia sư:"
          - generic [ref=f1e624]: 0 đ (0%)
        - paragraph [ref=f1e625]: Bạn được hoàn lại 100% học phí vào ví khả dụng. Lịch rảnh của gia sư được tự động mở lại.
      - button "Hủy buổi học này" [ref=f1e626] [cursor=pointer]
    - generic [ref=f1e627]:
      - generic [ref=f1e628]:
        - generic [ref=f1e629]: Gặp sự cố hoặc gia sư vắng mặt?
        - text: Bảo hiểm Escrow hoàn lại 100% học phí ngay lập tức.
      - button "Yêu cầu Hoàn tiền 100% vì Sự cố" [ref=f1e630] [cursor=pointer]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { createDemoState, DOMAIN_STORAGE_KEY } from '../../src/features/domain/demoDomain.js';
  3   | import { resetDemo, login, logout, fixedTime } from './demoHelpers.js';
  4   | 
  5   | const seed = () => createDemoState(fixedTime);
  6   | async function stateOf(page) {
  7   |   return page.evaluate(key => JSON.parse(localStorage.getItem(key)), DOMAIN_STORAGE_KEY);
  8   | }
  9   | async function setup(page, state = seed(), user = null) {
  10  |   await resetDemo(page, { state, ...(user ? {user} : {}) });
  11  |   if (user) await page.goto('/learner/dashboard');
  12  |   else await login(page, 'minhanh', '/learner/dashboard');
  13  | }
  14  | 
  15  | test('UI-COMP-L01 floating chat opens Messages without hook-order crash', async ({page}) => {
  16  |   await setup(page);
  17  |   const errors=[]; page.on('pageerror', error => errors.push(error.message));
  18  |   await page.getByRole('button', {name:'Mở cửa sổ trò chuyện'}).click();
  19  |   await page.getByRole('button', {name:'Mở toàn màn hình'}).click();
  20  |   await expect(page).toHaveURL(/\/messages$/);
  21  |   await expect(page.getByRole('textbox', {name:'Nội dung tin nhắn'})).toBeVisible();
  22  |   expect(errors).toEqual([]);
  23  | });
  24  | 
  25  | test('UI-COMP-L02 secondary learner cannot see another account class posts', async ({page}) => {
  26  |   const state=seed(); const user=state.users.find(u=>u.id==='user-learner-active-2');
  27  |   await setup(page,state,user);
  28  |   await page.goto('/learner/my-classes');
  29  |   await expect(page.getByText('MÃ LỚP: #post-101', {exact:true})).toHaveCount(0);
  30  | });
  31  | 
  32  | test('UI-COMP-L02 secondary learner cannot see another account conversation', async ({page}) => {
  33  |   const state=seed(); const user=state.users.find(u=>u.id==='user-learner-active-2');
  34  |   await setup(page,state,user);await page.goto('/messages');
  35  |   await expect(page.locator('.chat-thread-item')).toHaveCount(0);
  36  | });
  37  | 
  38  | test('UI-COMP-L02 learner schedule only shows owned lesson IDs, not unowned history', async ({page}) => {
  39  |   await setup(page);
  40  |   await page.goto('/learner/schedule');
  41  |   const ownedCount=seed().lessons.filter(l=>l.learnerId==='demo-learner').length;
  42  |   await expect(page.locator('.lesson-card')).toHaveCount(ownedCount);
  43  | });
  44  | 
  45  | test('UI-COMP-L03 completed lesson cannot be cancelled by learner', async ({page}) => {
  46  |   await setup(page); await page.goto('/learner/schedule');
  47  |   await page.getByRole('button', {name:/Đã hoàn thành/}).click();
  48  |   await page.getByRole('button', {name:'Chi tiết & Hủy lịch'}).first().click();
  49  |   await expect(page.getByRole('dialog')).toBeVisible();
  50  |   await expect(page.getByRole('button', {name:'Hủy buổi học này'})).toHaveCount(0);
  51  | });
  52  | 
  53  | test('UI-COMP-L04 refund without linked escrow never consumes unrelated class escrow', async ({page}) => {
  54  |   await setup(page); await page.goto('/learner/schedule');
  55  |   await page.getByRole('button', {name:'Chi tiết & Hủy lịch'}).first().click();
  56  |   const before=await stateOf(page);
  57  |   await page.getByRole('button', {name:'Yêu cầu Hoàn tiền 100% vì Sự cố'}).click();
  58  |   const after=await stateOf(page);
  59  |   expect(after.escrowTransactions).toEqual(before.escrowTransactions);
  60  |   expect(after.wallets).toEqual(before.wallets);
  61  | });
  62  | 
  63  | test('UI-COMP-L05 insufficient balance cannot mark offer deposit successful', async ({page}) => {
  64  |   const state=seed();state.wallets['demo-learner'].availableBalance=0;
  65  |   await setup(page,state);await page.goto('/messages');
  66  |   await page.getByRole('button',{name:'Đồng ý & Đặt cọc ngay'}).click();
  67  |   await expect(page.getByText('Đã đồng ý & Đặt cọc thành công',{exact:true})).toHaveCount(0);
  68  |   expect((await stateOf(page)).messages.find(m=>m.type==='custom_offer').offerData.status).toBe('pending');
  69  | });
  70  | 
  71  | test('UI-COMP-L06 paid offer produces linked shared lessons visible to Tutor', async ({page}) => {
  72  |   await setup(page); await page.goto('/messages');
  73  |   const before=await stateOf(page);const offer=before.messages.find(m=>m.type==='custom_offer');
  74  |   await page.getByRole('button',{name:'Đồng ý & Đặt cọc ngay'}).click();
  75  |   const after=await stateOf(page);
  76  |   const newEscrow=after.escrowTransactions.find(e=>!before.escrowTransactions.some(old=>old.id===e.id));
  77  |   expect(newEscrow,'Successful payment must create canonical escrow').toBeTruthy();
  78  |   await page.goto('/learner/dashboard');await logout(page);
  79  |   await login(page,'giabao','/tutor/timetable');
  80  |   const tutorState=await stateOf(page);
  81  |   expect(tutorState.lessons.filter(l=>l.escrowId===newEscrow.id||l.offerId===offer.id||l.messageId===offer.id)).toHaveLength(offer.offerData.sessionsCount);
  82  | });
  83  | 
  84  | test('UI-COMP-L07 lesson modal supports keyboard Escape and focus return', async ({page}) => {
> 85  |   await setup(page);await page.goto('/learner/schedule');
      |                                                                                                     ^ Error: expect(received).toBe(expected) // Object.is equality
  86  |   const trigger=page.getByRole('button',{name:'Chi tiết & Hủy lịch'}).first();
  87  |   await trigger.click();await expect(page.getByRole('dialog')).toBeVisible();
  88  |   await expect.poll(()=>page.getByRole('dialog').evaluate(el=>el.contains(document.activeElement))).toBe(true);
  89  |   await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).toHaveCount(0);
  90  |   await expect(trigger).toBeFocused();
  91  | });
  92  | 
  93  | test('UI-COMP-L08 proposal profile agrees with canonical public tutor university', async ({page}) => {
  94  |   await setup(page);await page.goto('/learner/my-classes');
  95  |   const profile=seed().profiles.find(p=>p.id==='quoc-bao');
  96  |   const candidate=page.locator('.myclass-proposal-card').filter({hasText:'Trần Gia Bảo'});
  97  |   await expect(candidate).toContainText(profile.university);
  98  | });
  99  | 
  100 | test('UI-COMP-L09 newly submitted class awaits Admin moderation', async ({page}) => {
  101 |   await setup(page);await page.goto('/learner/post-class');
  102 |   await page.getByRole('button',{name:'Tiếp tục: Địa điểm & Lịch học'}).click();
  103 |   await page.getByRole('button',{name:'Tiếp tục: Ngân sách & Mục tiêu'}).click();
  104 |   const before=await stateOf(page);
  105 |   await page.getByRole('button',{name:/Đăng tin|Gửi tin/}).last().click();
  106 |   await expect(page).toHaveURL(/\/learner\/my-classes$/);
  107 |   const created=(await stateOf(page)).classPosts.find(p=>!before.classPosts.some(old=>old.id===p.id));
  108 |   expect(created).toBeTruthy();expect(created.moderationStatus).toBe('pending');
  109 | });
  110 | 
  111 | test('UI-COMP-L10 selected candidate provides a deposit next step before claiming matched class', async ({page}) => {
  112 |   await setup(page);await page.goto('/learner/my-classes');
  113 |   const candidate=page.locator('.myclass-proposal-card').filter({hasText:'Trần Gia Bảo'});
  114 |   await candidate.getByRole('button',{name:'Chọn gia sư này'}).click();
  115 |   await expect(page.getByRole('button',{name:/Đặt cọc/}).or(page.getByRole('link',{name:/Đặt cọc/}))).toBeVisible();
  116 | });
  117 | 
  118 | test('UI-COMP-L11 mobile thread selection opens a readable conversation and composer', async ({page}) => {
  119 |   await page.setViewportSize({width:390,height:844});
  120 |   await setup(page);await page.goto('/messages');
  121 |   await page.locator('.chat-thread-item').first().click();
  122 |   await expect(page.getByRole('textbox',{name:'Nội dung tin nhắn'})).toBeVisible();
  123 | });
  124 | 
  125 | test('UI-COMP-L12 mobile post-class Next control stays entirely inside form', async ({page}) => {
  126 |   await page.setViewportSize({width:390,height:844});
  127 |   await setup(page);await page.goto('/learner/post-class');
  128 |   await page.evaluate(()=>document.fonts.ready);
  129 |   const next=page.getByRole('button',{name:'Tiếp tục: Địa điểm & Lịch học'});
  130 |   const box=await next.boundingBox();
  131 |   expect(box.x+box.width,'Full label and arrow must not clip outside the viewport').toBeLessThanOrEqual(390);
  132 | });
  133 | 
  134 | test('UI-COMP-L13 background chat cannot overlap and intercept a lesson dialog', async ({page}) => {
  135 |   await page.setViewportSize({width:390,height:844});
  136 |   await setup(page);await page.goto('/learner/schedule');
  137 |   await page.getByRole('button',{name:'Chi tiết & Hủy lịch'}).first().click();
  138 |   await expect(page.getByRole('dialog')).toBeVisible();
  139 |   const intercepts=await page.getByRole('button',{name:'Mở cửa sổ trò chuyện'}).evaluate(button=>{
  140 |     const r=button.getBoundingClientRect();const hit=document.elementFromPoint(r.x+r.width/2,r.y+r.height/2);
  141 |     return Boolean(hit&&button.contains(hit));
  142 |   });
  143 |   expect(intercepts,'Background widget must stay below modal overlay').toBe(false);
  144 | });
  145 | 
```