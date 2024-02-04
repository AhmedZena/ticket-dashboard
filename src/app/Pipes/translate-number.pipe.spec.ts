import { TranslateNumberPipe } from './translate-number.pipe';

describe('TranslateNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new TranslateNumberPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return "مرة واحدة" when the value is 1', () => {
    const pipe = new TranslateNumberPipe();
    const value = 1;
    const result = pipe.transform(value);
    expect(result).toBe('مرة واحدة');
  });

  it('should return "مرتان" when the value is 2', () => {
    const pipe = new TranslateNumberPipe();
    const value = 2;
    const result = pipe.transform(value);
    expect(result).toBe('مرتان');
  });

  it('should return "3 مرات" when the value is 3', () => {
    const pipe = new TranslateNumberPipe();
    const value = 3;
    const result = pipe.transform(value);
    expect(result).toBe('3 مرات');
  });
});
