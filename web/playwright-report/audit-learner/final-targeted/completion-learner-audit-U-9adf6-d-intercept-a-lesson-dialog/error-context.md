# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: completion-learner-audit.spec.js >> UI-COMP-L13 background chat cannot overlap and intercept a lesson dialog
- Location: tests\e2e\completion-learner-audit.spec.js:134:1

# Error details

```
Error: Background widget must stay below modal overlay

expect(received).toBe(expected) // Object.is equality

Expected: false
Received: true
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
          - button "Mở menu" [ref=f1e11] [cursor=pointer]
      - main [ref=f1e13]:
        - generic [ref=f1e14]:
          - generic [ref=f1e15]:
            - generic [ref=f1e16]: LỊCH HỌC & LỚP TRỰC TUYẾN
            - heading "Lịch học gia sư của bạn" [level=1] [ref=f1e17]
            - paragraph [ref=f1e18]: Xem lịch học, tham gia phòng học Google Meet và quản lý bảo lưu buổi dạy.
          - generic [ref=f1e19]:
            - button "Danh sách" [ref=f1e20] [cursor=pointer]
            - button "Lịch tuần" [ref=f1e22] [cursor=pointer]
        - generic [ref=f1e25]:
          - generic [ref=f1e26]:
            - button "Tất cả (20)" [ref=f1e27] [cursor=pointer]
            - button "Sắp diễn ra" [ref=f1e28] [cursor=pointer]
            - button "Đã hoàn thành" [ref=f1e29] [cursor=pointer]
            - button "Đã hủy" [ref=f1e30] [cursor=pointer]
          - generic [ref=f1e31]:
            - article [ref=f1e32]:
              - generic [ref=f1e33]:
                - generic [ref=f1e34]:
                  - strong [ref=f1e35]: Thứ 3, 06/10
                  - text: "2026"
                - generic [ref=f1e36]:
                  - heading "Toán" [level=3] [ref=f1e37]
                  - generic [ref=f1e38]:
                    - generic [ref=f1e39]: 07:00 – 07:45
                    - generic [ref=f1e43]: •
                    - generic [ref=f1e44]:
                      - text: "Gia sư:"
                      - strong [ref=f1e45]: Trần Gia Bảo
                    - generic [ref=f1e46]: •
                    - generic [ref=f1e47]: Địa điểm minh họa
              - generic [ref=f1e51]:
                - button "Vào phòng học Online" [ref=f1e52] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [active] [ref=f1e56] [cursor=pointer]
            - article [ref=f1e57]:
              - generic [ref=f1e58]:
                - generic [ref=f1e59]:
                  - strong [ref=f1e60]: Thứ 5, 08/10
                  - text: "2026"
                - generic [ref=f1e61]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e62]
                  - generic [ref=f1e63]:
                    - generic [ref=f1e64]: 08:30 – 09:15
                    - generic [ref=f1e68]: •
                    - generic [ref=f1e69]:
                      - text: "Gia sư:"
                      - strong [ref=f1e70]: Trần Gia Bảo
                    - generic [ref=f1e71]: •
                    - generic [ref=f1e72]: Địa điểm minh họa
              - generic [ref=f1e76]:
                - button "Vào phòng học Online" [ref=f1e77] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e81] [cursor=pointer]
            - article [ref=f1e82]:
              - generic [ref=f1e83]:
                - generic [ref=f1e84]:
                  - strong [ref=f1e85]: Thứ 6, 09/10
                  - text: "2026"
                - generic [ref=f1e86]:
                  - heading "Vật lý" [level=3] [ref=f1e87]
                  - generic [ref=f1e88]:
                    - generic [ref=f1e89]: 13:00 – 13:45
                    - generic [ref=f1e93]: •
                    - generic [ref=f1e94]:
                      - text: "Gia sư:"
                      - strong [ref=f1e95]: Trần Gia Bảo
                    - generic [ref=f1e96]: •
                    - generic [ref=f1e97]: Địa điểm minh họa
              - generic [ref=f1e101]:
                - button "Vào phòng học Online" [ref=f1e102] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e106] [cursor=pointer]
            - article [ref=f1e107]:
              - generic [ref=f1e108]:
                - generic [ref=f1e109]:
                  - strong [ref=f1e110]: Thứ 4, 07/10
                  - text: "2026"
                - generic [ref=f1e111]:
                  - heading "Toán" [level=3] [ref=f1e112]
                  - generic [ref=f1e113]:
                    - generic [ref=f1e114]: 14:30 – 15:15
                    - generic [ref=f1e118]: •
                    - generic [ref=f1e119]:
                      - text: "Gia sư:"
                      - strong [ref=f1e120]: Trần Gia Bảo
                    - generic [ref=f1e121]: •
                    - generic [ref=f1e122]: Địa điểm minh họa
              - generic [ref=f1e126]:
                - button "Vào phòng học Online" [ref=f1e127] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e131] [cursor=pointer]
            - article [ref=f1e132]:
              - generic [ref=f1e133]:
                - generic [ref=f1e134]:
                  - strong [ref=f1e135]: Thứ 7, 10/10
                  - text: "2026"
                - generic [ref=f1e136]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e137]
                  - generic [ref=f1e138]:
                    - generic [ref=f1e139]: 16:45 – 17:30
                    - generic [ref=f1e143]: •
                    - generic [ref=f1e144]:
                      - text: "Gia sư:"
                      - strong [ref=f1e145]: Trần Gia Bảo
                    - generic [ref=f1e146]: •
                    - generic [ref=f1e147]: Địa điểm minh họa
              - generic [ref=f1e151]:
                - button "Vào phòng học Online" [ref=f1e152] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e156] [cursor=pointer]
            - article [ref=f1e157]:
              - generic [ref=f1e158]:
                - generic [ref=f1e159]:
                  - strong [ref=f1e160]: Thứ 7, 09/05
                  - text: "2026"
                - generic [ref=f1e161]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e162]
                  - generic [ref=f1e163]:
                    - generic [ref=f1e164]: 09:00 – 09:45
                    - generic [ref=f1e168]: •
                    - generic [ref=f1e169]:
                      - text: "Gia sư:"
                      - strong [ref=f1e170]: Trần Gia Bảo
                    - generic [ref=f1e171]: •
                    - generic [ref=f1e172]: Online
              - generic [ref=f1e176]:
                - button "Vào phòng học Online" [ref=f1e177] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e181] [cursor=pointer]
            - article [ref=f1e182]:
              - generic [ref=f1e183]:
                - generic [ref=f1e184]:
                  - strong [ref=f1e185]: Thứ 7, 06/06
                  - text: "2026"
                - generic [ref=f1e186]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e187]
                  - generic [ref=f1e188]:
                    - generic [ref=f1e189]: 18:00 – 18:45
                    - generic [ref=f1e193]: •
                    - generic [ref=f1e194]:
                      - text: "Gia sư:"
                      - strong [ref=f1e195]: Trần Gia Bảo
                    - generic [ref=f1e196]: •
                    - generic [ref=f1e197]: Online
              - generic [ref=f1e201]:
                - button "Vào phòng học Online" [ref=f1e202] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e206] [cursor=pointer]
            - article [ref=f1e207]:
              - generic [ref=f1e208]:
                - generic [ref=f1e209]:
                  - strong [ref=f1e210]: Thứ 7, 20/06
                  - text: "2026"
                - generic [ref=f1e211]:
                  - heading "IELTS" [level=3] [ref=f1e212]
                  - generic [ref=f1e213]:
                    - generic [ref=f1e214]: 19:00 – 19:45
                    - generic [ref=f1e218]: •
                    - generic [ref=f1e219]:
                      - text: "Gia sư:"
                      - strong [ref=f1e220]: Trần Gia Bảo
                    - generic [ref=f1e221]: •
                    - generic [ref=f1e222]: Online
              - generic [ref=f1e226]:
                - button "Vào phòng học Online" [ref=f1e227] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e231] [cursor=pointer]
            - article [ref=f1e232]:
              - generic [ref=f1e233]:
                - generic [ref=f1e234]:
                  - strong [ref=f1e235]: Thứ 6, 03/07
                  - text: "2026"
                - generic [ref=f1e236]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e237]
                  - generic [ref=f1e238]:
                    - generic [ref=f1e239]: 18:00 – 18:45
                    - generic [ref=f1e243]: •
                    - generic [ref=f1e244]:
                      - text: "Gia sư:"
                      - strong [ref=f1e245]: Trần Gia Bảo
                    - generic [ref=f1e246]: •
                    - generic [ref=f1e247]: Online
              - generic [ref=f1e251]:
                - button "Vào phòng học Online" [ref=f1e252] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e256] [cursor=pointer]
            - article [ref=f1e257]:
              - generic [ref=f1e258]:
                - generic [ref=f1e259]:
                  - strong [ref=f1e260]: Thứ 6, 17/07
                  - text: "2026"
                - generic [ref=f1e261]:
                  - heading "IELTS" [level=3] [ref=f1e262]
                  - generic [ref=f1e263]:
                    - generic [ref=f1e264]: 19:00 – 19:45
                    - generic [ref=f1e268]: •
                    - generic [ref=f1e269]:
                      - text: "Gia sư:"
                      - strong [ref=f1e270]: Trần Gia Bảo
                    - generic [ref=f1e271]: •
                    - generic [ref=f1e272]: Thủ Đức
              - generic [ref=f1e276]:
                - button "Vào phòng học Online" [ref=f1e277] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e281] [cursor=pointer]
            - article [ref=f1e282]:
              - generic [ref=f1e283]:
                - generic [ref=f1e284]:
                  - strong [ref=f1e285]: Thứ 6, 07/08
                  - text: "2026"
                - generic [ref=f1e286]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e287]
                  - generic [ref=f1e288]:
                    - generic [ref=f1e289]: 18:00 – 18:45
                    - generic [ref=f1e293]: •
                    - generic [ref=f1e294]:
                      - text: "Gia sư:"
                      - strong [ref=f1e295]: Trần Gia Bảo
                    - generic [ref=f1e296]: •
                    - generic [ref=f1e297]: Online
              - generic [ref=f1e301]:
                - button "Vào phòng học Online" [ref=f1e302] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e306] [cursor=pointer]
            - article [ref=f1e307]:
              - generic [ref=f1e308]:
                - generic [ref=f1e309]:
                  - strong [ref=f1e310]: Thứ 7, 15/08
                  - text: "2026"
                - generic [ref=f1e311]:
                  - heading "IELTS" [level=3] [ref=f1e312]
                  - generic [ref=f1e313]:
                    - generic [ref=f1e314]: 19:00 – 19:45
                    - generic [ref=f1e318]: •
                    - generic [ref=f1e319]:
                      - text: "Gia sư:"
                      - strong [ref=f1e320]: Trần Gia Bảo
                    - generic [ref=f1e321]: •
                    - generic [ref=f1e322]: Online
              - generic [ref=f1e326]:
                - button "Vào phòng học Online" [ref=f1e327] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e331] [cursor=pointer]
            - article [ref=f1e332]:
              - generic [ref=f1e333]:
                - generic [ref=f1e334]:
                  - strong [ref=f1e335]: Thứ 6, 28/08
                  - text: "2026"
                - generic [ref=f1e336]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e337]
                  - generic [ref=f1e338]:
                    - generic [ref=f1e339]: 09:00 – 09:45
                    - generic [ref=f1e343]: •
                    - generic [ref=f1e344]:
                      - text: "Gia sư:"
                      - strong [ref=f1e345]: Trần Gia Bảo
                    - generic [ref=f1e346]: •
                    - generic [ref=f1e347]: Thủ Đức
              - generic [ref=f1e351]:
                - button "Vào phòng học Online" [ref=f1e352] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e356] [cursor=pointer]
            - article [ref=f1e357]:
              - generic [ref=f1e358]:
                - generic [ref=f1e359]:
                  - strong [ref=f1e360]: Thứ 7, 05/09
                  - text: "2026"
                - generic [ref=f1e361]:
                  - heading "IELTS" [level=3] [ref=f1e362]
                  - generic [ref=f1e363]:
                    - generic [ref=f1e364]: 19:00 – 19:45
                    - generic [ref=f1e368]: •
                    - generic [ref=f1e369]:
                      - text: "Gia sư:"
                      - strong [ref=f1e370]: Trần Gia Bảo
                    - generic [ref=f1e371]: •
                    - generic [ref=f1e372]: Online
              - generic [ref=f1e376]:
                - button "Vào phòng học Online" [ref=f1e377] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e381] [cursor=pointer]
            - article [ref=f1e382]:
              - generic [ref=f1e383]:
                - generic [ref=f1e384]:
                  - strong [ref=f1e385]: Thứ 7, 12/09
                  - text: "2026"
                - generic [ref=f1e386]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e387]
                  - generic [ref=f1e388]:
                    - generic [ref=f1e389]: 18:00 – 18:45
                    - generic [ref=f1e393]: •
                    - generic [ref=f1e394]:
                      - text: "Gia sư:"
                      - strong [ref=f1e395]: Trần Gia Bảo
                    - generic [ref=f1e396]: •
                    - generic [ref=f1e397]: Online
              - generic [ref=f1e401]:
                - button "Vào phòng học Online" [ref=f1e402] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e406] [cursor=pointer]
            - article [ref=f1e407]:
              - generic [ref=f1e408]:
                - generic [ref=f1e409]:
                  - strong [ref=f1e410]: CN, 20/09
                  - text: "2026"
                - generic [ref=f1e411]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e412]
                  - generic [ref=f1e413]:
                    - generic [ref=f1e414]: 18:00 – 18:45
                    - generic [ref=f1e418]: •
                    - generic [ref=f1e419]:
                      - text: "Gia sư:"
                      - strong [ref=f1e420]: Trần Gia Bảo
                    - generic [ref=f1e421]: •
                    - generic [ref=f1e422]: Online
              - generic [ref=f1e426]:
                - button "Vào phòng học Online" [ref=f1e427] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e431] [cursor=pointer]
            - article [ref=f1e432]:
              - generic [ref=f1e433]:
                - generic [ref=f1e434]:
                  - strong [ref=f1e435]: CN, 27/09
                  - text: "2026"
                - generic [ref=f1e436]:
                  - heading "IELTS" [level=3] [ref=f1e437]
                  - generic [ref=f1e438]:
                    - generic [ref=f1e439]: 19:00 – 19:45
                    - generic [ref=f1e443]: •
                    - generic [ref=f1e444]:
                      - text: "Gia sư:"
                      - strong [ref=f1e445]: Trần Gia Bảo
                    - generic [ref=f1e446]: •
                    - generic [ref=f1e447]: Online
              - generic [ref=f1e451]:
                - button "Vào phòng học Online" [ref=f1e452] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e456] [cursor=pointer]
            - article [ref=f1e457]:
              - generic [ref=f1e458]:
                - generic [ref=f1e459]:
                  - strong [ref=f1e460]: Thứ 5, 01/10
                  - text: "2026"
                - generic [ref=f1e461]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e462]
                  - generic [ref=f1e463]:
                    - generic [ref=f1e464]: 18:00 – 18:45
                    - generic [ref=f1e468]: •
                    - generic [ref=f1e469]:
                      - text: "Gia sư:"
                      - strong [ref=f1e470]: Trần Gia Bảo
                    - generic [ref=f1e471]: •
                    - generic [ref=f1e472]: Online
              - generic [ref=f1e476]:
                - button "Vào phòng học Online" [ref=f1e477] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e481] [cursor=pointer]
            - article [ref=f1e482]:
              - generic [ref=f1e483]:
                - generic [ref=f1e484]:
                  - strong [ref=f1e485]: Thứ 6, 02/10
                  - text: "2026"
                - generic [ref=f1e486]:
                  - heading "IELTS" [level=3] [ref=f1e487]
                  - generic [ref=f1e488]:
                    - generic [ref=f1e489]: 19:00 – 19:45
                    - generic [ref=f1e493]: •
                    - generic [ref=f1e494]:
                      - text: "Gia sư:"
                      - strong [ref=f1e495]: Trần Gia Bảo
                    - generic [ref=f1e496]: •
                    - generic [ref=f1e497]: Online
              - generic [ref=f1e501]:
                - button "Vào phòng học Online" [ref=f1e502] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e506] [cursor=pointer]
            - article [ref=f1e507]:
              - generic [ref=f1e508]:
                - generic [ref=f1e509]:
                  - strong [ref=f1e510]: Thứ 7, 03/10
                  - text: "2026"
                - generic [ref=f1e511]:
                  - heading "Tiếng Anh" [level=3] [ref=f1e512]
                  - generic [ref=f1e513]:
                    - generic [ref=f1e514]: 09:00 – 09:45
                    - generic [ref=f1e518]: •
                    - generic [ref=f1e519]:
                      - text: "Gia sư:"
                      - strong [ref=f1e520]: Trần Gia Bảo
                    - generic [ref=f1e521]: •
                    - generic [ref=f1e522]: Online
              - generic [ref=f1e526]:
                - button "Vào phòng học Online" [ref=f1e527] [cursor=pointer]
                - button "Chi tiết & Hủy lịch" [ref=f1e531] [cursor=pointer]
    - complementary "Widget nhắn tin nhanh" [ref=f1e532]:
      - button "Mở cửa sổ trò chuyện" [ref=f1e533] [cursor=pointer]:
        - generic [ref=f1e536]: "1"
  - dialog [ref=f1e538]:
    - button "Đóng cửa sổ" [ref=f1e539] [cursor=pointer]
    - banner [ref=f1e543]:
      - generic [ref=f1e544]: CHI TIẾT BUỔI HỌC
      - heading "Toán" [level=2] [ref=f1e545]
      - generic [ref=f1e546]:
        - generic [ref=f1e547]: Thứ 3, 06/10 · 07:00 – 07:45
        - generic [ref=f1e551]: •
        - generic [ref=f1e552]:
          - text: "Gia sư:"
          - strong [ref=f1e553]: Trần Gia Bảo
        - generic [ref=f1e554]: •
        - generic [ref=f1e555]:
          - text: "Học phí:"
          - strong [ref=f1e556]: 220.000 đ
    - generic [ref=f1e557]:
      - button "Vào phòng học Online (Google Meet)" [ref=f1e558] [cursor=pointer]
      - generic [ref=f1e562]: Phòng học kích hoạt tự động 15 phút trước giờ học và bảo mật chuẩn Google Meet HD.
    - generic [ref=f1e563]:
      - heading "Tài liệu & Bài tập về nhà" [level=3] [ref=f1e564]
      - generic [ref=f1e568]:
        - generic [ref=f1e569]:
          - generic [ref=f1e570]:
            - strong [ref=f1e571]: Slide_LyThuyet_ChuyenDe.pdf
            - generic [ref=f1e572]: PDF · 2.4 MB · Cập nhật bởi gia sư
          - button "Tải về" [ref=f1e573] [cursor=pointer]
        - generic [ref=f1e577]:
          - generic [ref=f1e578]:
            - strong [ref=f1e579]: BaiTap_TuLuyen_15Cau.docx
            - generic [ref=f1e580]: Tài liệu bài tập ôn tập tại nhà
          - button "Nộp bài" [ref=f1e581] [cursor=pointer]
        - generic [ref=f1e585]: "Ghi chú buổi học: Học sinh ôn kỹ lý thuyết chuyên đề và chuẩn bị câu hỏi trước khi vào lớp."
    - generic [ref=f1e586]:
      - heading "Chính sách & Hủy buổi học" [level=3] [ref=f1e587]
      - generic [ref=f1e590]:
        - text: "Thời gian trước giờ học (Mô phỏng):"
        - generic [ref=f1e591]:
          - 'button "> 24h (Ví dụ: 26 giờ)" [ref=f1e592] [cursor=pointer]'
          - 'button "2h – 24h (Ví dụ: 5 giờ)" [ref=f1e593] [cursor=pointer]'
          - 'button "< 2h (Ví dụ: 1 giờ)" [ref=f1e594] [cursor=pointer]'
      - generic [ref=f1e595]:
        - generic [ref=f1e596]:
          - generic [ref=f1e597]: "Quy chế áp dụng:"
          - generic [ref=f1e598]: "Hủy trước >= 24h: Hoàn tiền 100%"
        - generic [ref=f1e599]:
          - generic [ref=f1e600]: "Số tiền bạn được hoàn:"
          - generic [ref=f1e601]: +220.000 đ (100%)
        - generic [ref=f1e602]:
          - generic [ref=f1e603]: "Bồi thường cho gia sư:"
          - generic [ref=f1e604]: 0 đ (0%)
        - paragraph [ref=f1e605]: Bạn được hoàn lại 100% học phí vào ví khả dụng. Lịch rảnh của gia sư được tự động mở lại.
      - button "Hủy buổi học này" [ref=f1e606] [cursor=pointer]
    - generic [ref=f1e607]:
      - generic [ref=f1e608]:
        - generic [ref=f1e609]: Gặp sự cố hoặc gia sư vắng mặt?
        - text: Bảo hiểm Escrow hoàn lại 100% học phí ngay lập tức.
      - button "Yêu cầu Hoàn tiền 100% vì Sự cố" [ref=f1e610] [cursor=pointer]
```

# Test source

```ts
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
  67  |   await expect(page.locator('[data-testid="custom-offer-card"] [data-status="accepted"]')).toHaveCount(0);
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
  85  |   await setup(page);await page.goto('/learner/schedule');
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
> 143 |   expect(intercepts,'Background widget must stay below modal overlay').toBe(false);
      |                                                                        ^ Error: Background widget must stay below modal overlay
  144 | });
  145 | 
```