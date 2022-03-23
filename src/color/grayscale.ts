import Color from './index';

/**
 * A color that will always be a shade of gray, using a single color channel.
 */
export default class Grayscale extends Color {
  private static readonly alpha = 0xFF;

  /**
   * @param grayscale The color channel in the range `[0, 256)`.
   */
  constructor(private readonly grayscale: number) {
    super();
  }

  get r(): number {
    return this.grayscale;
  }

  get g(): number {
    return this.grayscale;
  }

  get b(): number {
    return this.grayscale;
  }

  // eslint-disable-next-line class-methods-use-this
  get a(): number {
    return Grayscale.alpha;
  }
}
