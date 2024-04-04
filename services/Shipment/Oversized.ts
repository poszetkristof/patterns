import { ShipperFactory } from "../Shipper/ShipperFactory";
import { Shipment } from "./Shipment";

export class Oversized extends Shipment {
  protected getCost(): number {
    return ShipperFactory
      .getInstance(this.extractZipCodePrefix(this.shipmentProperties.fromZipCode))
      .getOverSizedCost(this.shipmentProperties.weight);
  }
}
