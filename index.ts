import ShipmentController from "controllers/ShipmentController";
import { MOCK_SHIPMENT_AIR_EAST, MOCK_SHIPMENT_CHICAGO, MOCK_SHIPMENT_PACIFIC, MOCK_SHIPMENT_PACIFIC_SPECIAL } from "mocks/ShipmentData";
import { ShipmentFactory } from "services/Shipment/ShipmentFactory";

let shipment = ShipmentFactory.getInstance(MOCK_SHIPMENT_AIR_EAST);
ShipmentController.setShipment(shipment);
console.log(ShipmentController.processShipment());

shipment = ShipmentFactory.getInstance(MOCK_SHIPMENT_CHICAGO);
ShipmentController.setShipment(shipment);
console.log(ShipmentController.processShipment());

shipment = ShipmentFactory.getInstance(MOCK_SHIPMENT_PACIFIC);
ShipmentController.setShipment(shipment);
console.log(ShipmentController.processShipment());

shipment = ShipmentFactory.getInstance(MOCK_SHIPMENT_PACIFIC_SPECIAL);
ShipmentController.setShipment(shipment);
console.log(ShipmentController.processShipment());
