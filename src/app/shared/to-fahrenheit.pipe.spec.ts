import { ToFahrenheitPipe } from './to-fahrenheit.pipe';

describe('ToFahrenheitPipe', () => {
  const pipe = new ToFahrenheitPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('transforms "272" to Fahrenheit', () => {
    expect(pipe.transform(272)).toBe('30');
  });
});
