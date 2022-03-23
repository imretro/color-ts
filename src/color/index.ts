/**
 * A representation of a color.
 *
 * RGBA values should be in `[0, 256)`.
 */
export default abstract class Color {
  /**
   * The red channel.
   *
   * @category Color Channel
   */
  public abstract get r(): number;

  /**
   * The green channel.
   *
   * @category Color Channel
   */
  public abstract get g(): number;

  /**
   * The blue channel.
   *
   * @category Color Channel
   */
  public abstract get b(): number;

  /**
   * The alpha channel.
   *
   * @category Color Channel
   */
  public abstract get a(): number;

  /**
   * A six-digit hex code in the format `#xxxxxx`.
   */
  public get hex(): string {
    const radix = 16;
    const [r, g, b] = [this.r, this.g, this.b]
      .map((channel) => channel.toString(radix).padStart(2, '0'));
    return `#${r}${g}${b}`;
  }

  /**
   * A number between `0` and `1`, inclusive.
   */
  get opacity(): number {
    return this.a / 0xFF;
  }
}
