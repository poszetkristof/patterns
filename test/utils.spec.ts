import { constant, matcher } from "../fp/utils";

describe('utils', () => {
  it('constant returns lifted value to function', () => {
    const num10 = constant(10);

    expect(num10()).toBe(10);
  });

  it('matcher performs pattern matching', () => {
    type Shipment = { name: string; type: string }
    const shipLetter = (s: Shipment) => `Shipping a letter named ${s.name}.`;
    const shipPackage = (s: Shipment) => `Shipping a package named ${s.name}.`;
    const shipOversized = (s: Shipment) => `Shipping an oversized item named ${s.name}.`;

    const is = (type: string) => (shipment: Shipment) => shipment.type === type;
    const shipItem = matcher(
      [is('letter'), shipLetter],
      [is('package'), shipPackage],
      [is('oversized'), shipOversized],
      [constant(true), (s) => `Cannot ship item ${s.name} of unknown type ${s.type}.`]
    );

    expect(shipItem({ name: 'Item1', type: 'letter' })).toBe('Shipping a letter named Item1.');
    expect(shipItem({ name: 'Item2', type: 'package' })).toBe('Shipping a package named Item2.');
    expect(shipItem({ name: 'Item3', type: 'oversized' })).toBe('Shipping an oversized item named Item3.');
    expect(shipItem({ name: 'Item4', type: 'unknown' })).toBe('Cannot ship item Item4 of unknown type unknown.');
  });
});
