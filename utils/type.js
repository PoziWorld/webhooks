const PROTOTYPE_STRING_LENGTH_TO_REMOVE = 8;
const PROTOTYPE_STRING_END_INDEX = -1;

module.exports = {
  isNonEmptyString,
  isNonEmptyObject,
  is,
};

/**
 * Check whether the provided value is of 'string' type and non-empty.
 *
 * @param {*} value
 * @return {boolean}
 */

function isNonEmptyString( value ) {
  return is( value, 'string' ) && value !== '';
}

/**
 * Check whether the provided value is of 'object' type and non-empty.
 *
 * @param {*} value
 * @return {boolean}
 */

function isNonEmptyObject( value ) {
  return is( value, 'object' ) && Boolean( Object.keys( value ).length );
}

/**
 * Check whether the provided value is of the required type.
 *
 * @param {*} value
 * @param {string} type - 'string', 'number', 'boolean', 'object'.
 * @return {boolean}
 */

function is( value, type ) {
  return Object.prototype.toString
    .call( value )
    .slice( PROTOTYPE_STRING_LENGTH_TO_REMOVE, PROTOTYPE_STRING_END_INDEX )
    .toLowerCase() === type;
}
