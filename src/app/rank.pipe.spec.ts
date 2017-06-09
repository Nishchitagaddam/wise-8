import { ranksort } from './rank.pipe';

describe('RankPipe', () => {
  it('create an instance', () => {
    const pipe = new ranksort();
    expect(pipe).toBeTruthy();
  });
});
