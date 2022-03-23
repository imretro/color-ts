import Color from './index';

/**
 * A color that is defined with a red, green, blue, and is always opaque.
 */
export default class RGB extends Color {
  private static readonly alpha = 0xFF;

  constructor(
    private readonly red: number,
    private readonly green: number,
    private readonly blue: number,
  ) {
    super();
  }

  get r(): number {
    return this.red;
  }

  get g(): number {
    return this.green;
  }

  get b(): number {
    return this.blue;
  }

  // eslint-disable-next-line class-methods-use-this
  get a(): number {
    return RGB.alpha;
  }
}
