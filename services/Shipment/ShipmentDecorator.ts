import { ShipmentProperties } from "../../types/ShipmentProperties";
import type { Shippable } from "./Shippable";

/**
 * A Decorator that adds additional responsibilities to a `Shippable` object.
 *
 * @class
 * @implements {Shippable}
 */
export class ShipmentDecorator implements Shippable {
  constructor(private shipment: Shippable, private shipmentProperties: ShipmentProperties) {}

  /**
   * @public
   * @returns {string} The shipment details with additional instructions.
   */
  ship(): string {
    return `${this.shipment.ship()}`
      + `${this.shipmentProperties.isFragile ? '\n**MARK FRAGILE**' : ''}`
      + `${this.shipmentProperties.isLeaveProhibitedIfNotAtHome ? `\n**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**` : ''}`
      + `${this.shipmentProperties.isReturnReceiptRequested ? '\n**MARK RETURN RECEIPT REQUESTED**' : ''}`;
  }
}
