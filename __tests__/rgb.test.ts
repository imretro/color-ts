import { RGB } from '../src/index';

describe('RGB', () => {
  describe.each([
    [0, 0, 0],
    [0xFF, 0, 0x55],
  ])('new RGB(%d, %d, %d)', (r, g, b) => {
    const color = new RGB(r, g, b);

    test.each(Object.entries({ r, g, b }))('color channel %s = %d', (channel, value) => {
      expect(color[channel as keyof RGB]).toBe(value);
    });

    test('always opaque', () => {
      expect(color.a).toBe(0xFF);
    });
  });
});
