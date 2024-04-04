import { ShipperFactory } from "../Shipper/ShipperFactory";
import { Shipment } from "./Shipment";

export class Letter extends Shipment {
  /**
   * Calculates the cost of shipping the letter.
   * This method is part of the Visitor pattern.
   * It delegates the cost calculation to the `Shipper` that corresponds to the zip code prefix of the shipment.
   *
   * @public
   * @returns {number} The cost of shipping the item.
   */

  protected getCost(): number {
    return ShipperFactory
      .getInstance(this.extractZipCodePrefix(this.shipmentProperties.fromZipCode))
      .getLetterCost(this.shipmentProperties.weight);
  }
}
