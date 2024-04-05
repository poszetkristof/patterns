import type { Shipper } from "./Shipper";

/**
 * Instead of integrating cost calculation logic into `Shipment` classes,
 * place the new behavior into `Shipper` classes.
 * 
 * The original `Shipment` instances now just need to pass all necessary data (`weight`) to one of the Visitor's method.
 * 
 * The Visitor may define not only 1 method. In our example we just pass weight, but it might happen that some methods
 * receive different arguments. 
 * @class
 */
export class AirEastShipper implements Shipper {
  public getLetterCost(weight: number): number {
    return weight * 0.39;
  }

  public getPackageCost(weight: number): number {
    return weight * 0.25;
  }

  public getOverSizedCost(weight: number): number {
    return 10 + this.getPackageCost(weight);
  }
}
