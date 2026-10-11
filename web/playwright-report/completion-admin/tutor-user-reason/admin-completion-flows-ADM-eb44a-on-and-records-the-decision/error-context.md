# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin-completion-flows.spec.js >> ADMIN-MASTER account locking requires a reason and records the decision
- Location: tests\e2e\admin-completion-flows.spec.js:67:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('tbody')
Expected substring: "Đã đối chiếu báo cáo demo"
Received string:    "09:30:00 1/10/2026Quản trị viênAPPROVE_TUTORtutor_profile: mai-anhPhê duyệt hồ sơ gia sư và cấp tích xanh chứng nhận thẻ sinh viên14:15:00 2/10/2026Quản trị viênRESOLVE_DISPUTEissue: ISSUE-101Hòa giải tranh chấp dời lịch học do gia sư bị sốt cấp tính10:00:00 3/10/2026Quản trị viênUPDATE_SETTINGSsystem_settings: fee_configurationCập nhật phí sàn 10% và ưu đãi Top-Rated Tutor 7%"
Timeout: 5000ms

Call log:
  - Expect "toContainText" locator('tbody') with timeout 5000ms
  - waiting for locator('tbody')
    13 × locator resolved to <tbody>…</tbody>
       - unexpected value "09:30:00 1/10/2026Quản trị viênAPPROVE_TUTORtutor_profile: mai-anhPhê duyệt hồ sơ gia sư và cấp tích xanh chứng nhận thẻ sinh viên14:15:00 2/10/2026Quản trị viênRESOLVE_DISPUTEissue: ISSUE-101Hòa giải tranh chấp dời lịch học do gia sư bị sốt cấp tính10:00:00 3/10/2026Quản trị viênUPDATE_SETTINGSsystem_settings: fee_configurationCập nhật phí sàn 10% và ưu đãi Top-Rated Tutor 7%"

```

```yaml
- rowgroup:
  - 'row "09:30:00 1/10/2026 Quản trị viên APPROVE_TUTOR tutor_profile: mai-anh Phê duyệt hồ sơ gia sư và cấp tích xanh chứng nhận thẻ sinh viên"':
    - cell "09:30:00 1/10/2026"
    - cell "Quản trị viên"
    - cell "APPROVE_TUTOR"
    - 'cell "tutor_profile: mai-anh"'
    - cell "Phê duyệt hồ sơ gia sư và cấp tích xanh chứng nhận thẻ sinh viên"
  - 'row "14:15:00 2/10/2026 Quản trị viên RESOLVE_DISPUTE issue: ISSUE-101 Hòa giải tranh chấp dời lịch học do gia sư bị sốt cấp tính"':
    - cell "14:15:00 2/10/2026"
    - cell "Quản trị viên"
    - cell "RESOLVE_DISPUTE"
    - 'cell "issue: ISSUE-101"'
    - cell "Hòa giải tranh chấp dời lịch học do gia sư bị sốt cấp tính"
  - 'row "10:00:00 3/10/2026 Quản trị viên UPDATE_SETTINGS system_settings: fee_configuration Cập nhật phí sàn 10% và ưu đãi Top-Rated Tutor 7%"':
    - cell "10:00:00 3/10/2026"
    - cell "Quản trị viên"
    - cell "UPDATE_SETTINGS"
    - 'cell "system_settings: fee_configuration"'
    - cell "Cập nhật phí sàn 10% và ưu đãi Top-Rated Tutor 7%"
```

```
Error: browserContext._wrapApiCall: file data stream has unexpected number of bytes
```