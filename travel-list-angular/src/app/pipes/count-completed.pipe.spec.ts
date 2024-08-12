import { CountCompletedPipe } from './count-completed.pipe';

describe('CountCompletedPipe', () => {
  it('create an instance', () => {
    const pipe = new CountCompletedPipe();
    expect(pipe).toBeTruthy();
  });
});
