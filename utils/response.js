const typeUtils = require( './type' );

module.exports = {
  markSuccessful,
  markFailed,
};

/**
 * Indicate the response was valid (succeeded).
 *
 * @param res - The HTTP response.
 * @param {Object} output
 * @return {Object}
 */

function markSuccessful( res, output ) {
  let modifiedOutput;

  if ( typeUtils.isNonEmptyObject( output ) ) {
    const outputPrefix = {
      success: true,
    };

    modifiedOutput = {
      ...outputPrefix,
      ...output,
    };
  }

  return {
    res,
    output: modifiedOutput || output,
  };
}

/**
 * Indicate the response was invalid (didn't succeed).
 *
 * @param res - The HTTP response.
 * @param {number} status - The HTTP status code.
 * @param {string} error - The error message.
 * @return {Object}
 */

function markFailed( res, status, error ) {
  const output = {
    success: false,
  };

  if ( typeUtils.isNonEmptyString( error ) ) {
    output.error = error;
  }

  return {
    res: res.status( status ),
    output,
  };
}
