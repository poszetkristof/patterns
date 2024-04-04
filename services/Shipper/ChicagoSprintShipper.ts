import type { Shipper } from "./Shipper";

export class ChicagoSprintShipper implements Shipper {
  public getLetterCost(weight: number): number {
    return weight * 0.42;
  }

  public getPackageCost(weight: number): number {
    return weight * 0.2;
  }

  public getOverSizedCost(weight: number): number {
    return this.getPackageCost(weight);
  }
}
