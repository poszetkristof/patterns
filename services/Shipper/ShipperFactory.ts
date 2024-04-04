import { AirEastShipper } from "./AirEastShipper";
import { ChicagoSprintShipper } from "./ChicagoSprintShipper";
import { PacificParcelShipper } from "./PacificParcelShipper";
import { matcher, constant } from "../../fp/utils";
import { ZIP_CODE_PREFIXES } from "../../constants";
import type { Shipper } from "./Shipper";

export class ShipperFactory {
  private constructor() {}

  public static getInstance(zipCodePrefix: string): Shipper {
    return matcher<string, Shipper>(
      [
        (zipCodePrefix: string) => ZIP_CODE_PREFIXES.CHICAGO_SPRINT.includes(zipCodePrefix),
        () => new ChicagoSprintShipper()
      ],
      [
        (zipCodePrefix: string) => ZIP_CODE_PREFIXES.PACIFIC_PARCEL.includes(zipCodePrefix),
        () => new PacificParcelShipper()
      ],
      [constant(true), () => new AirEastShipper()]
    )(zipCodePrefix);
  }
}
