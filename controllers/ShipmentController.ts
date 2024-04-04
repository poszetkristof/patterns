import type { Shippable } from "../services/Shipment/Shippable";

class ShipmentController {
  private shipment: Shippable;

  public setShipment(shimpent: Shippable): void {
    this.shipment = shimpent;
  }

  public processShipment(): string {
    return this.shipment.ship();
  }
}

export default new ShipmentController();
