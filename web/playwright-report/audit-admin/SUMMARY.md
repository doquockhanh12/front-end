# Admin completion audit — 2026-10-06

Read-only application audit. Only `tests/e2e/completion-admin-audit.spec.js` created; no application or fixture edits.

## Coverage

12 routes: dashboard, users, tutors, reviews, issues, appeals, classes, finance, subjects, locations, settings, logs. Chromium at 1440/1024/390 × 900. Screenshots before/after table horizontal scroll; document fonts settled. New Classes/Subjects/Locations/Finance drawers checked at all three widths, including body end, focus containment and ESC. Main computed font is Nunito Sans. No page overflow or uncaught page errors observed in these route states. Page overflow passing does not establish inner table usability: A11 is a concrete counterexample.

## Confirmed issues and regression tests

All IDs below have genuine pre-fix RED evidence. No fixes were made.

| ID | Severity | Symptom / observed failure | Responsible source |
|---|---|---|---|
| UI-COMP-A01 | P2 | Finance search has no effect in all three tabs; unmatched query retains 1 payout, 1 Escrow and 4 wallet rows | AdminFinancePage.jsx:22,189; rendered arrays are not filtered |
| UI-COMP-A02 | P1 | Fee revenue 1,250,000 despite zero disbursed Escrow; numeric expectation 0, actual 1250000 | AdminFinancePage.jsx:136 adds fixed1250000 |
| UI-COMP-A03 | P2 | Visible catalog/settings labels are not connected to inputs; getByLabel finds no control. Finance rejection textarea has same source defect | AdminSubjectsPage / AdminLocationsPage / AdminSettingsPage labels lacking association |
| UI-COMP-A04 | P3 | Settings displays raw `\ge` and `\star` markup instead of readable rating | AdminSettingsPage.jsx:101 |
| UI-COMP-A05 | P2 | Operational hour input accepts and persists `not-a-time`, then success feedback | AdminSettingsPage.jsx:20–28; updateDomainSystemSettings accepts patch |
| UI-COMP-A06 | P1 | Admin rejects approved existing post101, same class remains available to Tutor | TutorClassSearch.jsx:152 checks open only; submitTutorProposal also ignores moderationStatus |
| UI-COMP-A07 | P2 | Subject suspension is saved but no Audit row references changed Toán | demoDomain.js:964 status update lacks audit; catalog UI does not log |
| UI-COMP-A08 | P1 | Subject marked inactive by Admin still selectable in Learner search | LearnerSearch.jsx:23 uses public Tutor subjects instead of active catalog |
| UI-COMP-A09 | P1 | Save warning threshold1, warn canonical Tutor (existing1 →2), account remains active | demoDomain.js:856 hard-codes >3 |
| UI-COMP-A10 | P3 | Admin Add/Save actions request Lucide icon via props, render zero SVG | Button.jsx spreads unsupported icon prop onto button DOM |
| UI-COMP-A11 | P1 | Finance payout approval label cut by preceding cell; at1440 left1207.05 vs own cell1250.06. At default width click repeatedly intercepted by `<td>` | AdminFinancePage action row nowrap and fixed-layout table |

Exact tests in `completion-admin-audit.spec.js` are named with each ID. A01 has three tab tests; A03 has three form tests. No skips, force clicks or weakened assertions.

## Test integrity / execution

- First attempt aborted because Vite5180 crashed: `ERR_CONNECTION_REFUSED`. Those failures are environment failures, not RED.
- Stable-server snapshot run: 17 tests, 11 failed /6 passed,9.1m. Included3 viewport loops and valid edit/reload flow passing. A06/A08 initially falsely passed because absence was checked before destination mount; A06 also originally targeted a300k class excluded by default fee filter. Tests were strengthened with visible preconditions and destination-specific waits, using220k existingpost101.
- Round2 targeted five:4 failed /1 passed,1.7m. Confirmed A08/A09/A10/A11. A08 trace had zip finalization error; product assertion and error context are intact.
- Final exact-heading A06 rerun:1 failed,13.3s: class remained1, expected0.
- A02 numeric full-amount rerun:1 failed,9.9s:1250000 vs0. Substring0 check was replaced with numeric equality; future legitimate revenue is not prohibited.
- Final suite contains19 tests (11 IDs plus repeated A01/A03 cases, valid edit/reload flow,3 viewport loops). It was not run as one final19-test invocation; the current changed tests were executed in targeted rounds.

## Plan coverage, not implemented regressions

5.1 Dashboard has Escrow/open-class/SOS projections, but no shared fee revenue or open-appeal metric.
5.2 Approve/reject and account toggle exist; student documents remain reference placeholders; account lock/unlock does not request justification specified in Master.
5.3 Class moderation UI exists; publication gate is broken (A06).
5.4 Finance page/payout/escrow/ledger UI exists; search, truthful totals and action usability are broken (A01/A02/A11).
5.5 Appeals is still single-account explanation/evidence with in-review/accepted/rejected, not two-party comparison with escrow/unsuspend/review-hide verdicts. Current PRODUCT_SPEC explicitly says acceptance does not reverse account penalties; Master proposes reversal/financial verdicts. This needs requirements alignment, not guessed implementation.
5.6 Catalog CRUD exists; status propagation and Audit incomplete (A07/A08).
5.7 Settings save/reload and explicit save Audit work; invalid values and effective warning threshold fail (A05/A09). Audit does not cover all Admin actions.

## Subjective UX notes

- Mobile tables offer horizontal scrolling but no clear scroll cue. Newly added Finance/Classes/Subjects/Locations tables ellipsize field values; many lack title/full-detail access. Existing older operational tables/drawers are clearer.
- Long Finance heading is harder to scan on390px; 12 sidebar destinations are ungrouped.
- Danger payout rejection is rendered neutral gray because no shared danger button treatment; looks disabled although active. Treat as design inconsistency, not arbitrary exact-color assertion.
- Floating chat widget stays above Admin drawers and can visually compete with forms; overlap with a specific hit target was not confirmed here.
- No font-family mismatch observed. Small new catalog metadata/body treatments remain around12.8–14px, deserving readability review rather than claiming missing content.

## Artifact references

`playwright-report/audit-admin/` holds72 main/table-end screenshots,24 drawer screenshots,contact.png,metrics.json,drawer-metrics.json. Main full-page screenshots correctly show complete content. Full-page screenshots of fixed drawers include underlying document outside the viewport; do not mistake that capture behavior for an overlay geometry defect. Drawer viewport geometry is0,0,width,900 and focus remained contained in tested states.

Failure contexts: `test-results/audit-admin-run/`, `audit-admin-round2/`, `audit-admin-total/`, `audit-admin-moderation/`. No source changes, resets, fixture edits, installs or commits.
