/**
 * The `Shippable` interface represents an Element/Component interface.
 *
 * Each concrete element (e.g. Oversized, Package, Letter) must implement the `ship()` method.
 *
 * @interface
 */
export interface Shippable {
  /**
   * `ship()` is called in a way that it calls the specific method of the Visitor
   * which corresponds to the concrete Element class.
   * e.g. concrete Element class Letter --> calls specific `getLetterCost()` method of Visitor.
   * @public
   * @returns {string} The shipment details.
   */
  ship(): string;
}
