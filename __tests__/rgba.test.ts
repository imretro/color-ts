import { RGBA } from '../src/index';

describe('RGBA', () => {
  describe.each([
    [0, 0, 0, 0],
    [0xFF, 0, 0x55, 0xAA],
  ])('new RGBA(%d, %d, %d, %d)', (r, g, b, a) => {
    const color = new RGBA(r, g, b, a);

    test.each(Object.entries({ r, g, b, a }))('color channel %s = %d', (channel, value) => {
      expect(color[channel as keyof RGBA]).toBe(value);
    });
  });
});
