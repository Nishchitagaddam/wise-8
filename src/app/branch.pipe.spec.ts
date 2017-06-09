import { branchsort } from './branch.pipe';

describe('BranchPipe', () => {
  it('create an instance', () => {
    const pipe = new branchsort();
    expect(pipe).toBeTruthy();
  });
});
