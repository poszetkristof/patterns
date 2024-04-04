import { ShipmentDecorator } from "./ShipmentDecorator";
import { Letter } from "./Letter";
import { Package } from "./Package";
import { Oversized } from "./Oversized";
import { matcher, constant } from "../../../fp/utils";
import type { ShipmentProperties } from "../../types/ShipmentProperties";
import type { Shippable } from "./Shippable";

/**
 * The `ShipmentFactory` class is a Factory that creates `Shippable` objects.
 * It provides a static method `getInstance` to create a `Shippable` object based on the weight of the shipment.
 *
 * @class
 */
export class ShipmentFactory {
  private constructor() {}

  public static getInstance(shipmentProperties: ShipmentProperties): Shippable {
    const shipment = matcher<number, Shippable>(
      [
        (weight: number) => weight <= 15,
        () => new Letter(shipmentProperties)
      ],
      [
        (weight: number) => weight <= 160,
        () => new Package(shipmentProperties)
      ],
      [constant(true), () => new Oversized(shipmentProperties)]
    )(shipmentProperties.weight);

    return new ShipmentDecorator(shipment, shipmentProperties);
  }
}
