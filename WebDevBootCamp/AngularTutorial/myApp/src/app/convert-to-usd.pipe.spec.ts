import { ConvertToUsdPipe } from './convert-to-usd.pipe';

describe('ConvertToUsdPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertToUsdPipe();
    expect(pipe).toBeTruthy();
  });
});
