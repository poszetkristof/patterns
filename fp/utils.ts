export const constant = <A>(a: A) => () => a;

export type Predicate<A> = (a: A) => boolean
/**
 * High-order function for pattern matching
 * Each parameter is a tuple [predicate, fn]
 * Returns a function, by passing some value to which, this value would be passed to predicates left-to-right
 * and if the predicate returns "true" - the value would be passed to the "fn"
 *
 * See examples in the tests
 */
export const matcher = <A, R>(...predicates: Array<[Predicate<A>, (a: A) => R]>) => (a: A) => {
  const i = predicates.findIndex(([predicate]) => predicate(a));
  return i > -1 ? predicates[i][1](a) : undefined;
};
