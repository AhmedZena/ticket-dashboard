import { StringifyArrayPipe } from './stringify-array.pipe';

describe('StringifyArrayPipe', () => {
  // it('create an instance', () => {
  //   const pipe = new StringifyArrayPipe();
  //   expect(pipe).toBeTruthy();
  // });

  it('should return a string with the array elements separated by a comma and space', () => {
    const pipe = new StringifyArrayPipe();
    const value = ['one', 'two', 'three'];
    const result = pipe.transform(value);
    expect(result).toBe('one , two , three...');
  });
});
