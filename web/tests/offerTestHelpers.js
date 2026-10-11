import assert from 'node:assert/strict';
import { getBookableRanges, isFutureSession } from '../src/data/tutorSchedule.js';
export function validOfferProposals(state, count, now) {
  const result = [];
  for (const range of getBookableRanges(state.availability, state.lessons, 'quoc-bao')) {
    for (let start = range.start; start + 45 <= range.end; start += 45) {
      const proposal = { date: range.date, start, end: start + 45 };
      if (isFutureSession(proposal, now)) result.push(proposal);
      if (result.length === count) return result;
    }
  }
  assert.fail(`Known seed does not contain ${count} future sessions for this fixed clock`);
}
