import type { IDGenerator } from "./IDGenerator";

/**
 * The `InMemoryIDGenerator` class is a Singleton that generates unique IDs.
 * It implements the `IDGenerator` interface and the Strategy pattern, allowing the ID generation strategy to be switched at runtime.
 *
 * @class
 * @implements {IDGenerator}
*/
export class InMemoryIDGenerator implements IDGenerator {
  private static id = 0;
  private static idGenerator: IDGenerator;

  /**
   * Private constructor to prevent direct construction calls with the `new` operator.
   *
   * @private
  */
  private constructor() {}

  public static getInstance(): IDGenerator {
    return !this.idGenerator ? new InMemoryIDGenerator() : this.idGenerator;
  }

  public getID(): number {
    return ++InMemoryIDGenerator.id;
  }
}
