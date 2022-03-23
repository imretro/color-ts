import { Alpha } from '../src/index';

describe('Alpha', () => {
  describe.each([[0], [0x55], [0xAA], [0xFF]])('new Alpha(%d)', (alpha) => {
    const color = new Alpha(alpha);

    test.each([['r'], ['g'], ['b'], ['a']])(`color channel %s = ${alpha}`, (channel) => {
      expect(color[channel as keyof Alpha]).toBe(alpha);
    });
  });
});
