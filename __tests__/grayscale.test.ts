import { Grayscale } from '../src/index';

describe('Grayscale', () => {
  describe.each([[0], [0x55], [0xAA], [0xFF]])('new Grayscale(%d)', (grayscale) => {
    const color = new Grayscale(grayscale);

    test.each([['r'], ['g'], ['b']])(`color channel %s = ${grayscale}`, (channel) => {
      expect(color[channel as keyof Grayscale]).toBe(grayscale);
    });

    test('always opaque', () => {
      expect(color.a).toBe(0xFF);
    });
  });
});
