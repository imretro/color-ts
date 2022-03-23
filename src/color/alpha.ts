import Color from './index';

/**
 * A color with variable opacity. The lightness itself also depends on the alpha
 * value: 50% opaque is 50% light.
 */
export default class Alpha extends Color {
  constructor(private readonly alpha: number) {
    super();
  }

  get r(): number {
    return this.alpha;
  }

  get g(): number {
    return this.alpha;
  }

  get b(): number {
    return this.alpha;
  }

  get a(): number {
    return this.alpha;
  }
}
