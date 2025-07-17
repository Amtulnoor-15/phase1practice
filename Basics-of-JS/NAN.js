console.log(Infinity); // Infinity
console.log( 1 / 0 ); // Infinity
console.log( "not a number" / 2 ); //NaN, such division is erroneous
console.log( NaN + 1 ); // NaN
console.log( 3 * NaN ); // NaN
console.log( "not a number" / 2 - 1 ); // NaN);

// if there’s a NaN somewhere in a mathematical expression,
// it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).