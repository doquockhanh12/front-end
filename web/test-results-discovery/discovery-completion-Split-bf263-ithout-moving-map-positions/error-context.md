# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: discovery-completion.spec.js >> Split discovery pages cards and selects off-page pins without moving map positions
- Location: tests\e2e\discovery-completion.spec.js:4:1

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.learner-split-list .tutor-card')
Expected: 3
Received: 6
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" locator('.learner-split-list .tutor-card') with timeout 5000ms
  - waiting for locator('.learner-split-list .tutor-card')
    13 × locator resolved to 6 elements
       - unexpected value "6"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - banner [ref=e4]:
      - generic [ref=e5]:
        - link "TutorNearMe — trang chủ" [ref=e6] [cursor=pointer]:
          - /url: /
          - generic [ref=e7]: TN
          - generic [ref=e8]:
            - strong [ref=e9]: TutorNearMe
            - generic [ref=e10]: Gia sư gần bạn
        - navigation "Điều hướng chính" [ref=e11]:
          - link "Tìm gia sư" [ref=e12] [cursor=pointer]:
            - /url: /learner/search
          - link "Đăng tin lớp" [ref=e13] [cursor=pointer]:
            - /url: /learner/post-class
          - link "Lớp của tôi" [ref=e14] [cursor=pointer]:
            - /url: /learner/my-classes
          - link "Lịch học" [ref=e15] [cursor=pointer]:
            - /url: /learner/schedule
          - link "Ví của tôi" [ref=e16] [cursor=pointer]:
            - /url: /learner/wallet
          - link "Trợ giúp" [ref=e17] [cursor=pointer]:
            - /url: /help
        - generic [ref=e18]:
          - button "Thông báo" [ref=e20] [cursor=pointer]:
            - generic [ref=e24]: "1"
          - link "Ảnh đại diện của Nguyễn Minh Anh minhanh" [ref=e25] [cursor=pointer]:
            - /url: /learner/dashboard
            - img "Ảnh đại diện của Nguyễn Minh Anh" [ref=e26]:
              - generic [aria-hidden] [ref=e27]: MA
            - generic [ref=e28]: minhanh
          - button "Đăng xuất" [ref=e29] [cursor=pointer]
    - main [ref=e33]:
      - generic [ref=e35]:
        - generic [ref=e36]:
          - generic [ref=e37]: TUTORNEARME · HỌC GẦN HƠN, HIỂU NHAU HƠN
          - heading [level=1] [ref=e38]:
            - text: Bạn đau đầu đểtìm gia sư tốt,
            - emphasis [ref=e39]: TutorNearMesẽ giúp bạn.
          - paragraph [ref=e40]: Tìm sinh viên gia sư theo đúng môn, khu vực, thời gian rảnh và mức phí gia đình mong muốn — tất cả trong một trải nghiệm rõ ràng, dễ so sánh.
          - generic [ref=e41]:
            - link "Tìm gia sư phù hợp" [ref=e42] [cursor=pointer]:
              - /url: "#search-controls"
            - link "Xem cách hoạt động ↘" [ref=e45] [cursor=pointer]:
              - /url: /learner#how
        - generic [ref=e46]:
          - img "Học sinh học tập cùng bạn bè" [ref=e47]
          - img "Gia sư đang hướng dẫn bài học" [ref=e48]
          - generic [ref=e49]:
            - generic [ref=e50]: Gần bạn
            - generic [ref=e51]: ưu tiên khu vực phù hợp
          - generic [ref=e52]:
            - generic [ref=e53]: 4.9/5
            - generic [ref=e54]: đánh giá demo
      - region "Tìm kiếm nhanh" [ref=e55]:
        - generic [ref=e56]:
          - generic [ref=e57]:
            - text: Tên hoặc từ khóa
            - searchbox "Tên hoặc từ khóa" [ref=e62]
          - generic [ref=e63]:
            - text: Môn học
            - combobox "Môn học" [ref=e64] [cursor=pointer]:
              - option "Tất cả môn" [selected]
              - option "Toán"
              - option "Ngữ văn"
              - option "Tiếng Anh"
              - option "Vật lý"
              - option "Hóa học"
              - option "Sinh học"
              - option "Lịch sử"
              - option "Địa lý"
              - option "Tin học"
              - option "IELTS"
              - option "TOEIC"
              - option "Lập trình Python"
              - option "Giáo dục Kinh tế & Pháp luật"
              - option "Tiếng Trung"
              - option "Tiếng Nhật"
              - option "SAT"
              - option "Cấu trúc dữ liệu và giải thuật"
              - option "Khác"
          - generic [ref=e65]:
            - text: Khu vực
            - combobox "Khu vực" [ref=e66] [cursor=pointer]:
              - option "Tất cả khu vực" [selected]
              - option "Quận 1"
              - option "Quận 3"
              - option "Quận 5"
              - option "Quận 7"
              - option "Quận 10"
              - option "Bình Thạnh"
              - option "Phú Nhuận"
              - option "Thủ Đức"
              - option "Cầu Giấy"
              - option "Đống Đa"
          - generic [ref=e67]:
            - text: Thời gian rảnh
            - combobox "Thời gian rảnh" [ref=e68] [cursor=pointer]:
              - option "Mọi khung giờ" [selected]
              - option "Buổi sáng"
              - option "Buổi chiều"
              - option "Buổi tối"
              - option "Cuối tuần"
          - generic [ref=e69]:
            - text: Mức phí
            - combobox "Mức phí" [ref=e70] [cursor=pointer]:
              - option "Mọi mức phí" [selected]
              - option "Đến 160.000đ"
              - option "Đến 180.000đ"
              - option "Đến 200.000đ"
          - button "Tìm gia sư" [ref=e71] [cursor=pointer]
      - generic [ref=e75]:
        - generic [ref=e76]:
          - generic [ref=e77]:
            - text: KHÁM PHÁ GIA SƯ
            - heading "Một lựa chọn tốt bắt đầu từ sự phù hợp" [level=2] [ref=e78]
          - paragraph [ref=e79]: Lọc theo điều quan trọng với bạn, rồi so sánh trong một góc nhìn rõ ràng.
        - generic [ref=e80]:
          - complementary "Bộ lọc gia sư" [ref=e81]:
            - generic [ref=e82]:
              - heading "Bộ lọc" [level=3] [ref=e85]
              - button "Đóng bộ lọc" [ref=e86] [cursor=pointer]
            - group "Môn học" [ref=e90]:
              - generic [ref=e92] [cursor=pointer]:
                - checkbox "Toán" [ref=e93]
                - generic [ref=e94]: Toán
              - generic [ref=e95] [cursor=pointer]:
                - checkbox "Ngữ văn" [ref=e96]
                - generic [ref=e97]: Ngữ văn
              - generic [ref=e98] [cursor=pointer]:
                - checkbox "Tiếng Anh" [ref=e99]
                - generic [ref=e100]: Tiếng Anh
              - generic [ref=e101] [cursor=pointer]:
                - checkbox "Vật lý" [ref=e102]
                - generic [ref=e103]: Vật lý
              - generic [ref=e104] [cursor=pointer]:
                - checkbox "Hóa học" [ref=e105]
                - generic [ref=e106]: Hóa học
              - generic [ref=e107] [cursor=pointer]:
                - checkbox "Sinh học" [ref=e108]
                - generic [ref=e109]: Sinh học
              - generic [ref=e110] [cursor=pointer]:
                - checkbox "Lịch sử" [ref=e111]
                - generic [ref=e112]: Lịch sử
              - generic [ref=e113] [cursor=pointer]:
                - checkbox "Địa lý" [ref=e114]
                - generic [ref=e115]: Địa lý
              - generic [ref=e116] [cursor=pointer]:
                - checkbox "Tin học" [ref=e117]
                - generic [ref=e118]: Tin học
              - generic [ref=e119] [cursor=pointer]:
                - checkbox "IELTS" [ref=e120]
                - generic [ref=e121]: IELTS
              - generic [ref=e122] [cursor=pointer]:
                - checkbox "TOEIC" [ref=e123]
                - generic [ref=e124]: TOEIC
              - generic [ref=e125] [cursor=pointer]:
                - checkbox "Lập trình Python" [ref=e126]
                - generic [ref=e127]: Lập trình Python
              - generic [ref=e128] [cursor=pointer]:
                - checkbox "Giáo dục Kinh tế & Pháp luật" [ref=e129]
                - generic [ref=e130]: Giáo dục Kinh tế & Pháp luật
              - generic [ref=e131] [cursor=pointer]:
                - checkbox "Tiếng Trung" [ref=e132]
                - generic [ref=e133]: Tiếng Trung
              - generic [ref=e134] [cursor=pointer]:
                - checkbox "Tiếng Nhật" [ref=e135]
                - generic [ref=e136]: Tiếng Nhật
              - generic [ref=e137] [cursor=pointer]:
                - checkbox "SAT" [ref=e138]
                - generic [ref=e139]: SAT
              - generic [ref=e140] [cursor=pointer]:
                - checkbox "Cấu trúc dữ liệu và giải thuật" [ref=e141]
                - generic [ref=e142]: Cấu trúc dữ liệu và giải thuật
              - generic [ref=e143] [cursor=pointer]:
                - checkbox "Khác" [ref=e144]
                - generic [ref=e145]: Khác
            - group "Cấp độ học" [ref=e146]:
              - generic [ref=e148] [cursor=pointer]:
                - checkbox "THCS" [ref=e149]
                - generic [ref=e150]: THCS
              - generic [ref=e151] [cursor=pointer]:
                - checkbox "THPT" [ref=e152]
                - generic [ref=e153]: THPT
              - generic [ref=e154] [cursor=pointer]:
                - checkbox "Tiểu Học" [ref=e155]
                - generic [ref=e156]: Tiểu Học
            - group "Khu vực" [ref=e157]:
              - generic [ref=e159] [cursor=pointer]:
                - checkbox "Quận 1" [ref=e160]
                - generic [ref=e161]: Quận 1
              - generic [ref=e162] [cursor=pointer]:
                - checkbox "Quận 3" [ref=e163]
                - generic [ref=e164]: Quận 3
              - generic [ref=e165] [cursor=pointer]:
                - checkbox "Quận 5" [ref=e166]
                - generic [ref=e167]: Quận 5
              - generic [ref=e168] [cursor=pointer]:
                - checkbox "Quận 7" [ref=e169]
                - generic [ref=e170]: Quận 7
              - generic [ref=e171] [cursor=pointer]:
                - checkbox "Quận 10" [ref=e172]
                - generic [ref=e173]: Quận 10
              - generic [ref=e174] [cursor=pointer]:
                - checkbox "Bình Thạnh" [ref=e175]
                - generic [ref=e176]: Bình Thạnh
              - generic [ref=e177] [cursor=pointer]:
                - checkbox "Phú Nhuận" [ref=e178]
                - generic [ref=e179]: Phú Nhuận
              - generic [ref=e180] [cursor=pointer]:
                - checkbox "Thủ Đức" [ref=e181]
                - generic [ref=e182]: Thủ Đức
              - generic [ref=e183] [cursor=pointer]:
                - checkbox "Cầu Giấy" [ref=e184]
                - generic [ref=e185]: Cầu Giấy
              - generic [ref=e186] [cursor=pointer]:
                - checkbox "Đống Đa" [ref=e187]
                - generic [ref=e188]: Đống Đa
            - group "Thời gian rảnh" [ref=e189]:
              - generic [ref=e191] [cursor=pointer]:
                - checkbox "Buổi sáng" [ref=e192]
                - generic [ref=e193]: Buổi sáng
              - generic [ref=e194] [cursor=pointer]:
                - checkbox "Buổi chiều" [ref=e195]
                - generic [ref=e196]: Buổi chiều
              - generic [ref=e197] [cursor=pointer]:
                - checkbox "Buổi tối" [ref=e198]
                - generic [ref=e199]: Buổi tối
              - generic [ref=e200] [cursor=pointer]:
                - checkbox "Cuối tuần" [ref=e201]
                - generic [ref=e202]: Cuối tuần
            - generic [ref=e203]:
              - generic [ref=e204]: Bán kính tìm kiếm
              - combobox "Bán kính tìm kiếm" [ref=e205] [cursor=pointer]:
                - option "Tất cả khoảng cách" [selected]
                - option "Trong bán kính 3 km"
                - option "Trong bán kính 5 km"
                - option "Trong bán kính 10 km"
            - generic [ref=e206]:
              - generic [ref=e207]: Học phí tối đa
              - combobox "Học phí tối đa" [ref=e208] [cursor=pointer]:
                - option "Không giới hạn" [selected]
                - option "Tối đa 160.000đ / buổi"
                - option "Tối đa 180.000đ / buổi"
                - option "Tối đa 200.000đ / buổi"
            - button "Xóa bộ lọc" [ref=e209] [cursor=pointer]
            - button "Xem 6 gia sư" [ref=e210] [cursor=pointer]
          - region "Kết quả tìm gia sư" [ref=e211]:
            - generic [ref=e212]:
              - generic [ref=e213]:
                - strong [ref=e214]: 6 gia sư phù hợp
                - text: tại TP. Hồ Chí Minh
              - generic [ref=e215]:
                - group "Chế độ hiển thị" [ref=e216]:
                  - button "Danh sách" [ref=e217] [cursor=pointer]
                  - button "Bản đồ chia đôi" [active] [pressed] [ref=e221] [cursor=pointer]
                - button "Bộ lọc" [ref=e224] [cursor=pointer]
                - generic [ref=e226]: Sắp xếp
                - combobox "Sắp xếp" [ref=e227] [cursor=pointer]:
                  - option "Đề xuất" [selected]
                  - option "Đánh giá cao"
                  - option "Học phí thấp"
            - generic [ref=e228]:
              - generic [ref=e229]:
                - article [ref=e230]:
                  - generic [ref=e231]:
                    - img "Ảnh đại diện của Nguyễn Mai Anh" [ref=e232]:
                      - generic [aria-hidden] [ref=e233]: MA
                    - generic [ref=e234]:
                      - generic [ref=e235]: Gia sư nổi bật
                      - heading "Nguyễn Mai Anh" [level=3] [ref=e236]
                      - paragraph [ref=e237]: ĐH Khoa học Tự nhiên
                    - button "Lưu Nguyễn Mai Anh" [ref=e238] [cursor=pointer]
                  - generic [ref=e241]:
                    - generic [ref=e242]:
                      - strong [ref=e245]: "4.9"
                      - generic [ref=e246]: (48 đánh giá)
                    - generic [ref=e247]: Đã xác minh
                  - paragraph [ref=e251]: Giúp học sinh xây nền tảng vững chắc qua cách giải thích gần gũi và lộ trình học rõ ràng.
                  - generic "Môn dạy" [ref=e252]:
                    - generic [ref=e253]: Toán
                    - generic [ref=e254]: Vật lý
                  - generic [ref=e255]:
                    - generic [ref=e256]: Bình Thạnh
                    - generic [ref=e260]: 17:00–21:00 · 09:00–12:00
                  - generic [ref=e264]:
                    - generic [ref=e265]:
                      - strong [ref=e266]: 180.000đ
                      - generic [ref=e267]: / buổi
                    - link "Xem hồ sơ" [ref=e268] [cursor=pointer]:
                      - /url: /tutors/mai-anh
                - article [ref=e272]:
                  - generic [ref=e273]:
                    - img "Ảnh đại diện của Trần Gia Bảo" [ref=e274]:
                      - generic [aria-hidden] [ref=e275]: GB
                    - generic [ref=e276]:
                      - heading "Trần Gia Bảo" [level=3] [ref=e277]
                      - paragraph [ref=e278]: ĐH Ngoại thương
                    - button "Lưu Trần Gia Bảo" [ref=e279] [cursor=pointer]
                  - generic [ref=e282]:
                    - generic [ref=e283]:
                      - strong [ref=e286]: "4.9"
                      - generic [ref=e287]: (36 đánh giá)
                    - generic [ref=e288]: Đã xác minh
                  - generic "Môn dạy" [ref=e292]:
                    - generic [ref=e293]: Tiếng Anh
                    - generic [ref=e294]: IELTS
                  - generic [ref=e295]:
                    - generic [ref=e296]: Thủ Đức
                    - generic [ref=e300]: 18:00–21:00 · 09:00–12:00
                  - generic [ref=e304]:
                    - generic [ref=e305]:
                      - strong [ref=e306]: 220.000đ
                      - generic [ref=e307]: / buổi
                    - link "Xem hồ sơ" [ref=e308] [cursor=pointer]:
                      - /url: /tutors/quoc-bao
                - article [ref=e312]:
                  - generic [ref=e313]:
                    - img "Ảnh đại diện của Phạm Hà Linh" [ref=e314]:
                      - generic [aria-hidden] [ref=e315]: HL
                    - generic [ref=e316]:
                      - heading "Phạm Hà Linh" [level=3] [ref=e317]
                      - paragraph [ref=e318]: ĐH Sư phạm TP.HCM
                    - button "Lưu Phạm Hà Linh" [ref=e319] [cursor=pointer]
                  - generic [ref=e322]:
                    - generic [ref=e323]:
                      - strong [ref=e326]: "4.8"
                      - generic [ref=e327]: (29 đánh giá)
                    - generic [ref=e328]: Đã xác minh
                  - generic "Môn dạy" [ref=e332]:
                    - generic [ref=e333]: Ngữ văn
                    - generic [ref=e334]: Tiếng Anh
                  - generic [ref=e335]:
                    - generic [ref=e336]: Quận 3
                    - generic [ref=e340]: 13:00–17:00 · 09:00–12:00
                  - generic [ref=e344]:
                    - generic [ref=e345]:
                      - strong [ref=e346]: 160.000đ
                      - generic [ref=e347]: / buổi
                    - link "Xem hồ sơ" [ref=e348] [cursor=pointer]:
                      - /url: /tutors/ha-linh
                - article [ref=e352]:
                  - generic [ref=e353]:
                    - img "Ảnh đại diện của Lê Đức Minh" [ref=e354]:
                      - generic [aria-hidden] [ref=e355]: ĐM
                    - generic [ref=e356]:
                      - heading "Lê Đức Minh" [level=3] [ref=e357]
                      - paragraph [ref=e358]: ĐH Bách khoa TP.HCM
                    - button "Lưu Lê Đức Minh" [ref=e359] [cursor=pointer]
                  - generic [ref=e362]:
                    - generic [ref=e363]:
                      - strong [ref=e366]: "4.8"
                      - generic [ref=e367]: (31 đánh giá)
                    - generic [ref=e368]: Đã xác minh
                  - generic "Môn dạy" [ref=e372]:
                    - generic [ref=e373]: Toán
                    - generic [ref=e374]: Hóa học
                  - generic [ref=e375]:
                    - generic [ref=e376]: Phú Nhuận
                    - generic [ref=e380]: 17:00–21:00 · 13:00–17:00
                  - generic [ref=e384]:
                    - generic [ref=e385]:
                      - strong [ref=e386]: 170.000đ
                      - generic [ref=e387]: / buổi
                    - link "Xem hồ sơ" [ref=e388] [cursor=pointer]:
                      - /url: /tutors/duc-minh
                - article [ref=e392]:
                  - generic [ref=e393]:
                    - img "Ảnh đại diện của Võ Thu Trang" [ref=e394]:
                      - generic [aria-hidden] [ref=e395]: TT
                    - generic [ref=e396]:
                      - heading "Võ Thu Trang" [level=3] [ref=e397]
                      - paragraph [ref=e398]: ĐH Sư phạm TP.HCM
                    - button "Lưu Võ Thu Trang" [ref=e399] [cursor=pointer]
                  - generic [ref=e402]:
                    - generic [ref=e403]:
                      - strong [ref=e406]: "4.7"
                      - generic [ref=e407]: (22 đánh giá)
                    - generic [ref=e408]: Đã xác minh
                  - generic "Môn dạy" [ref=e412]:
                    - generic [ref=e413]: Tiếng Anh
                    - generic [ref=e414]: Ngữ văn
                  - generic [ref=e415]:
                    - generic [ref=e416]: Bình Thạnh
                    - generic [ref=e420]: 08:00–12:00
                  - generic [ref=e424]:
                    - generic [ref=e425]:
                      - strong [ref=e426]: 190.000đ
                      - generic [ref=e427]: / buổi
                    - link "Xem hồ sơ" [ref=e428] [cursor=pointer]:
                      - /url: /tutors/thu-trang
                - article [ref=e432]:
                  - generic [ref=e433]:
                    - img "Ảnh đại diện của Đặng Gia Huy" [ref=e434]:
                      - generic [aria-hidden] [ref=e435]: GH
                    - generic [ref=e436]:
                      - heading "Đặng Gia Huy" [level=3] [ref=e437]
                      - paragraph [ref=e438]: ĐH Khoa học Tự nhiên
                    - button "Lưu Đặng Gia Huy" [ref=e439] [cursor=pointer]
                  - generic [ref=e443]:
                    - strong [ref=e446]: "4.7"
                    - generic [ref=e447]: (18 đánh giá)
                  - generic "Môn dạy" [ref=e448]:
                    - generic [ref=e449]: Vật lý
                    - generic [ref=e450]: Toán
                  - generic [ref=e451]:
                    - generic [ref=e452]: Thủ Đức
                    - generic [ref=e456]: 19:00–21:00
                  - generic [ref=e460]:
                    - generic [ref=e461]:
                      - strong [ref=e462]: 150.000đ
                      - generic [ref=e463]: / buổi
                    - link "Xem hồ sơ" [ref=e464] [cursor=pointer]:
                      - /url: /tutors/gia-huy
              - generic [ref=e468]:
                - generic [ref=e469]:
                  - generic [ref=e470]: 📍 Bản đồ trực quan (6 gia sư)
                  - generic [ref=e471]: Bấm ghim giá để chọn gia sư
                - img "Bản đồ minh họa khu vực gia sư" [ref=e472]:
                  - generic [ref=e476]:
                    - generic [ref=e477]: PHÚ NHUẬN
                    - generic [ref=e478]: BÌNH THẠNH
                    - generic [ref=e479]: THỦ ĐỨC
                    - generic [ref=e480]: QUẬN 3
                  - button "Chọn Nguyễn Mai Anh, Bình Thạnh" [ref=e481] [cursor=pointer]:
                    - generic: MA
                    - generic [ref=e483]: 180k
                  - button "Chọn Trần Gia Bảo, Thủ Đức" [ref=e485] [cursor=pointer]:
                    - generic: GB
                    - generic [ref=e487]: 220k
                  - button "Chọn Phạm Hà Linh, Quận 3" [ref=e489] [cursor=pointer]:
                    - generic: HL
                    - generic [ref=e491]: 160k
                  - button "Chọn Lê Đức Minh, Phú Nhuận" [ref=e493] [cursor=pointer]:
                    - generic: ĐM
                    - generic [ref=e495]: 170k
                  - button "Chọn Võ Thu Trang, Bình Thạnh" [ref=e497] [cursor=pointer]:
                    - generic: TT
                    - generic [ref=e499]: 190k
                  - button "Chọn Đặng Gia Huy, Thủ Đức" [ref=e501] [cursor=pointer]:
                    - generic: GH
                    - generic [ref=e503]: 150k
          - complementary "Thông tin hỗ trợ" [ref=e505]:
            - link [ref=e506] [cursor=pointer]:
              - /url: /learner/map
              - text: KHÁM PHÁ KHU VỰC
              - heading "Bản đồ gia sư gần bạn" [level=3] [ref=e507]
              - img "Bản đồ minh họa khu vực gia sư" [ref=e508]:
                - generic [ref=e512]:
                  - generic [ref=e513]: PHÚ NHUẬN
                  - generic [ref=e514]: BÌNH THẠNH
                  - generic [ref=e515]: THỦ ĐỨC
                  - generic [ref=e516]: QUẬN 3
                - generic [ref=e517]: MA
                - generic [ref=e519]: GB
                - generic [ref=e521]: HL
                - generic [ref=e523]: ĐM
                - generic [ref=e525]: TT
                - generic [ref=e527]: GH
                - generic [ref=e529]: TV
                - generic [ref=e531]: HP
                - generic [ref=e533]: MC
                - generic [ref=e535]: TA
                - generic [ref=e537]: QH
              - paragraph [ref=e539]: Xem khu vực và khoảng cách giữa các gia sư.
              - generic [ref=e540]: Mở bản đồ
            - generic [ref=e543]:
              - text: BẮT ĐẦU ĐƠN GIẢN
              - heading "Ba bước để bắt đầu" [level=3] [ref=e544]
              - list [ref=e545]:
                - listitem [ref=e546]:
                  - generic [ref=e547]: "01"
                  - text: Chọn môn và khu vực
                - listitem [ref=e548]:
                  - generic [ref=e549]: "02"
                  - text: So sánh hồ sơ gia sư
                - listitem [ref=e550]:
                  - generic [ref=e551]: "03"
                  - text: Gửi yêu cầu học phù hợp
            - paragraph [ref=e556]:
              - strong [ref=e557]: Thông tin minh bạch
              - text: Bạn luôn thấy mức phí và lịch rảnh trước khi quyết định.
    - contentinfo [ref=e558]:
      - generic [ref=e559]:
        - link "TutorNearMe — trang chủ" [ref=e560] [cursor=pointer]:
          - /url: /
          - generic [aria-hidden] [ref=e561]: TN
          - generic [ref=e562]: TutorNearMe
        - paragraph [ref=e563]: Kết nối đúng người. Học theo cách của bạn.
        - generic [ref=e564]: Giao diện mẫu · TutorNearMe
  - complementary "Widget nhắn tin nhanh" [ref=e565]:
    - button "Mở cửa sổ trò chuyện" [ref=e566] [cursor=pointer]:
      - generic [ref=e569]: "1"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { resetDemo, login } from './demoHelpers.js';
  3  | 
  4  | test('Split discovery pages cards and selects off-page pins without moving map positions', async ({ page }) => {
  5  |   await resetDemo(page); await login(page, 'minhanh', '/learner/search');
  6  |   await expect(page.locator('.tutor-results-grid .tutor-card')).toHaveCount(6);
  7  |   await page.getByRole('button', { name: 'Bản đồ chia đôi', exact: true }).click();
  8  |   const cards = page.locator('.learner-split-list .tutor-card');
  9  |   const pagination = page.getByRole('navigation', { name: 'Phân trang gia sư' });
> 10 |   await expect(cards).toHaveCount(3);
     |                       ^ Error: expect(locator).toHaveCount(expected) failed
  11 |   await expect(pagination).toContainText('1–3 / 6 gia sư');
  12 |   await expect(pagination.getByRole('button', { name: 'Trang trước' })).toBeDisabled();
  13 |   const visibleIds = await cards.evaluateAll(items => items.map(item => item.id.replace('tutor-card-', '')));
  14 |   const pins = page.locator('.learner-split-map .tutor-map__pin');
  15 |   const offPagePin = await pins.evaluateAll((items, ids) => {
  16 |     const pin = items.find(item => !ids.some(id => document.getElementById(`tutor-card-${id}`)?.textContent.includes(item.getAttribute('aria-label').split(',')[0].replace('Chọn ', ''))));
  17 |     return { label: pin.getAttribute('aria-label'), position: pin.getAttribute('transform') };
  18 |   }, visibleIds);
  19 |   await page.getByRole('button', { name: offPagePin.label, exact: true }).click();
  20 |   await expect(pagination).toContainText('4–6 / 6 gia sư');
  21 |   await expect(page.locator('.learner-split-list .tutor-card.is-highlighted')).toHaveCount(1);
  22 |   await expect(pagination.getByRole('button', { name: 'Trang sau' })).toBeDisabled();
  23 |   await cards.first().hover();
  24 |   await expect(page.locator('.learner-split-map .tutor-map__pin[aria-pressed="true"]')).toHaveCount(1);
  25 |   await page.getByLabel('Sắp xếp', { exact: true }).selectOption('price');
  26 |   await expect(pagination).toContainText('1–3 / 6 gia sư');
  27 |   await expect(page.getByRole('button', { name: offPagePin.label, exact: true })).toHaveAttribute('transform', offPagePin.position);
  28 |   await pagination.getByRole('button', { name: 'Trang sau' }).click();
  29 |   await page.locator('#tutor-search').fill('Trần Gia Bảo');
  30 |   await expect(cards).toHaveCount(1);
  31 |   await expect(pagination).toContainText('1–1 / 1 gia sư');
  32 |   await expect(page.locator('.learner-results__toolbar')).toContainText('1 gia sư phù hợp');
  33 |   await page.locator('#tutor-search').fill('no-tutor-matches');
  34 |   await expect(page.getByText('Chưa tìm thấy gia sư phù hợp', { exact: true })).toBeVisible();
  35 |   await expect(pagination).toHaveCount(0);
  36 | });
  37 | 
  38 | test('Tutor class radius is explicitly unavailable without approved distance data', async ({ page }) => {
  39 |   await resetDemo(page); await login(page, 'giabao', '/tutor/find-students');
  40 |   await expect(page.getByText('Chưa có dữ liệu khoảng cách cho tin lớp trong bản demo.', { exact: true })).toBeVisible();
  41 | });
  42 | 
  43 | for (const width of [1440, 1024, 390]) {
  44 |   test(`Split discovery pagination fits ${width}px and preserves profile targets`, async ({ page }) => {
  45 |     await page.setViewportSize({ width, height: 900 });
  46 |     await resetDemo(page); await login(page, 'minhanh', '/learner/search');
  47 |     await page.getByRole('button', { name: 'Bản đồ chia đôi', exact: true }).click();
  48 |     const pagination = page.getByRole('navigation', { name: 'Phân trang gia sư' });
  49 |     await pagination.scrollIntoViewIfNeeded();
  50 |     const bounds = await pagination.boundingBox();
  51 |     expect(bounds.x).toBeGreaterThanOrEqual(0); expect(bounds.x + bounds.width).toBeLessThanOrEqual(width);
  52 |     for (const link of await page.locator('.learner-split-list .tutor-card__bottom a').all()) {
  53 |       const linkBox = await link.boundingBox(); const cardBox = await link.locator('xpath=ancestor::article').boundingBox();
  54 |       expect(linkBox.x + linkBox.width).toBeLessThanOrEqual(cardBox.x + cardBox.width + 1);
  55 |     }
  56 |     await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  57 |     await page.screenshot({ path: `../../artifacts/discovery-completion/split-${width}.png`, fullPage: true });
  58 |   });
  59 | }
  60 | 
```