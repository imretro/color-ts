import RGB from './rgb';

/**
 * A color that is defined with a red, green, blue, and alpha channel.
 */
export default class RGBA extends RGB {
  constructor(
    red: number,
    green: number,
    blue: number,
    private readonly alpha: number,
  ) {
    super(red, green, blue);
  }

  get a(): number {
    return this.alpha;
  }
}
