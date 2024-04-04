import { InMemoryIDGenerator } from "../../data-access/IDGenerator/InMemoryIDGenerator";
import { EMPTY_STRING } from "../../constants";
import type { ShipmentProperties } from "../../types/ShipmentProperties";
import type { Shippable } from "./Shippable";

/**
 * The `Shipment` class is an Abstract Element in the Visitor pattern.
 * Provides a base for concrete shipment types like `Letter`, `Package`, `Oversized`.
 *
 * @class
 * @implements {Shippable}
 */
export abstract class Shipment implements Shippable {
  protected shipmentProperties: ShipmentProperties;

  constructor(shipmentProperties: ShipmentProperties) {
    this.shipmentProperties = {
      ...shipmentProperties,
      shipmentId: shipmentProperties.shipmentId || this.getShipmentID()
    };
  }

  /**
   * Returns a message with the shipment details.
   * This method is part of the Visitor pattern.
   * It performs an operation on the `Shipper` (Visitor itself) depending on the concrete implementation of `Shipment`.
   * @public
   * @returns {string} The shipment details.
   */
  public ship(): string {
    return `Shipment with the ID ${this.shipmentProperties.shipmentId} `
      + `will be picked up from ${this.shipmentProperties.fromAddress} `
      + `and shipped to ${this.shipmentProperties.toAddress}\n`
      + `Cost = ${this.getCost().toFixed(1)}`;
  }

  public getShipmentID(): number {
    return InMemoryIDGenerator.getInstance().getID();
  }

  /**
   * Extracts the first digit of the zip code.
   *
   * @protected
   * @param {number} zipCode - The zip code.
   * @returns {string} The first digit of the zip code.
   */
  protected extractZipCodePrefix(zipCode: number): string {
    return zipCode?.toString().charAt(0) ?? EMPTY_STRING;
  }

  /**
   * Calculates the cost of shipping the item.
   * This method is part of the Visitor pattern by delegating the cost calculation to the Visitor.
   *
   * @protected
   * @abstract
   * @returns {number} The cost of shipping the item.
   */
  protected abstract getCost(): number;
}
