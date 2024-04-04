/**
 * The `Shipper` interface represents a Visitor.
 * Declares different methods to calculate the cost of shipping for different types of items based on their weight.
 *
 * @interface
 */
export interface Shipper {
  getLetterCost(weight: number): number;
  getPackageCost(weight: number): number;
  getOverSizedCost(weight: number): number;
}
