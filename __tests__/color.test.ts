import { Color } from '../src/index';

describe('Color', () => {
  describe('hex', () => {
    test.each([
      [0, 0, 0, '#000000'],
      [0, 0x55, 0xAA, '#0055aa'],
      [0xFF, 0xFF, 0xFF, '#ffffff'],
    ])('rgb(%d, %d, %d) = %s', (r, g, b, hex) => {
      const dummy = new Dummy(r, g, b, 0x88);

      expect(dummy.hex).toBe(hex);
    });
  });

  describe('opacity', () => {
    test.each([
      [0, 0],
      [0x40, 0.25],
      [0x80, 0.50],
      [0xC0, 0.75],
      [0xFF, 1],
    ])('alpha %d opacity is ~%d', (alpha, want) => {
      const dummy = new Dummy(0, 0x55, 0xAA, alpha);

      expect(dummy.opacity).toBeCloseTo(want, 2);
    });
  });
});

class Dummy extends Color {
  constructor(
    private readonly red: number,
    private readonly green: number,
    private readonly blue: number,
    private readonly alpha: number,
  ) {
    super();
  }

  public get r(): number {
    return this.red;
  }

  public get g(): number {
    return this.green;
  }

  public get b(): number {
    return this.blue;
  }

  public get a(): number {
    return this.alpha;
  }
}
