import type { Shipper } from "./Shipper";

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
