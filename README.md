# patterns

The `Shipper` and `Shipment` classes are part of a delivery system. They handle different types of items (like letters, packages, or oversized items) that need to be delivered to various places.

The job of the `Shipper` is to figure out the cost to deliver an item based on its type and weight.

The `Shipment` classes represent the different items to be delivered. Each item has a `ship` method that determines how it's delivered and a `getCost` method that figures out the delivery cost.

The `ShipmentFactory` class makes it easy to create new items based on the item's weight. The items that are created can be decorated with extra features using the `ShipmentDecorator`, like marking if an item is fragile or if a delivery confirmation is needed.
