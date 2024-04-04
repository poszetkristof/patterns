import type { Shipper } from "./Shipper";

export class PacificParcelShipper implements Shipper {
  public getLetterCost(weight: number): number {
    return 0.51 * weight;
  }

  public getPackageCost(weight: number): number {
    return 0.19 * weight;
  }

  public getOverSizedCost(weight: number): number {
    return 0.21 * weight;
  }
}
