import { ShipperFactory } from "../Shipper/ShipperFactory";
import { Shipment } from "./Shipment";

export class Package extends Shipment {
  protected getCost(): number {
    return ShipperFactory
      .getInstance(this.extractZipCodePrefix(this.shipmentProperties.fromZipCode))
      .getPackageCost(this.shipmentProperties.weight);
  }
}
