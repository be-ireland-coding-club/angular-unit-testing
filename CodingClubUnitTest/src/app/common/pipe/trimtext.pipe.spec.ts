import { TrimtextPipe } from './trimtext.pipe';

describe('TrimtextPipe', () => {
  let trimPipe= new TrimtextPipe();

  it('create an instance', () => {
    const pipe = new TrimtextPipe();
    expect(pipe).toBeTruthy();
  });

  it('Text without trim',()=>{
   expect(trimPipe.transform('Test',5)).toBe('Test');
  });

  it('Text with trim',()=>{
    expect(trimPipe.transform('Test',1)).toBe('T...');
   });
});
