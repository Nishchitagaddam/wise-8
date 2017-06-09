import { addresspipe } from './address.pipe';

describe('addresspipe', () => {
  it('create an instance', () => {
    const pipe = new addresspipe();
    expect(pipe).toBeTruthy();
  });
});
