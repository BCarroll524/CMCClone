import { TruncateNumPipe } from './truncate-num.pipe';

describe('TruncateNumPipe', () => {
  it('create an instance', () => {
    const pipe = new TruncateNumPipe();
    expect(pipe).toBeTruthy();
  });
});
