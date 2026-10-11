import test from 'node:test';
import assert from 'node:assert/strict';
import { createDemoState, approveTutor } from '../src/features/domain/demoDomain.js';
const state = () => createDemoState(new Date('2026-10-05T06:00:00+07:00'));
const card = side => ({ side, name: `${side}.png`, type: 'image/png', dataUrl: 'data:image/png;base64,aGVsbG8=' });
test('approval gives uploaded two-sided student card the verified badge', () => {
  const s = state(); s.profiles[0] = { ...s.profiles[0], verified: false, verificationDocuments: [card('front'), card('back')] };
  assert.equal(approveTutor(s, s.profiles[0].id).profiles[0].verified, true);
});
test('approval without uploaded cards cannot invent a verified badge', () => {
  const s = state(); s.profiles[0] = { ...s.profiles[0], verified: false, verificationDocuments: [] };
  assert.equal(approveTutor(s, s.profiles[0].id).profiles[0].verified, false);
});
import { demoReferenceData } from '../src/data/demoReferenceData.js';
import { activeRegistrationSubjects, saveConfiguredAvailability, reconcileSubjectCatalog } from '../src/features/domain/configuration.js';
import { defaultSubjects } from '../src/features/domain/demoDomain.js';
test('approved 17 choices survive catalog merge and Admin deactivation/rename wins', () => {
  const s = state();
  for (const name of demoReferenceData.subjects) assert.ok(activeRegistrationSubjects(s).includes(name));
  const disabled = s.subjects.map(row => row.name === 'Tiếng Anh' ? { ...row, isActive: false } : row);
  assert.ok(!activeRegistrationSubjects({ subjects: reconcileSubjectCatalog(disabled, defaultSubjects) }).includes('Tiếng Anh'));
  const renamed = disabled.map(row => row.id === 'sub-anh' ? { ...row, name: 'English', isActive: true } : row);
  assert.ok(!activeRegistrationSubjects({ subjects: reconcileSubjectCatalog(renamed, defaultSubjects) }).includes('Tiếng Anh'));
});
test('Admin time limit blocks new late ranges and preserves unchanged legacy range/duration', () => {
  const s = state(); s.systemSettings = { ...s.systemSettings, maxStartHour: '20:00', sessionDurations: [90], defaultSessionDuration: 90 };
  const tutorId = s.profiles[0].id;
  s.availability = [{ id: 'legacy', tutorId, date: '2026-10-19', start: 1260, end: 1305 }];
  s.settings[tutorId] = { sessionMinutes: 45 }; s.lessons = [];
  assert.ok(saveConfiguredAvailability(s, tutorId, s.availability, 45).state);
  assert.ok(saveConfiguredAvailability(s, tutorId, [{ ...s.availability[0], start: 1270, end: 1315 }], 45).error);
  const valid = [{ id: 'new', tutorId, date: '2026-10-19', start: 1200, end: 1290 }];
  assert.ok(saveConfiguredAvailability(s, tutorId, valid, 90).state);
  assert.ok(saveConfiguredAvailability({ ...s, settings: {} }, tutorId, valid, 45).error);
});
test('partial, unsupported, or empty uploaded cards do not issue a new badge', () => {
  for (const documents of [[card('front')], [card('front'), { ...card('back'), type: 'text/plain' }], [card('front'), { ...card('back'), dataUrl: 'data:image/png;base64,' }]]) {
    const s = state(); s.profiles[0] = { ...s.profiles[0], verified: false, verificationDocuments: documents };
    assert.equal(approveTutor(s, s.profiles[0].id).profiles[0].verified, false);
  }
});
