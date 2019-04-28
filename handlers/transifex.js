const responseUtils = require( '../utils/response' );
const typeUtils = require( '../utils/type' );

const statusCode = require( '../model/status-code' );

module.exports = handleTransifex;

/**
 * Process HTTP POST requests from Transifex.
 *
 * https://docs.transifex.com/integrations/webhooks
 *
 * @todo Verify secret.
 * @todo Verify signature.
 * @todo Verify IP.
 *
 * @param req
 * @param res
 */

function handleTransifex( req, res ) {
  const { body } = req;
  const { project } = body;
  const {
    res: response,
    output,
  } = typeUtils.isNonEmptyString( project ) ?
    responseUtils.markSuccessful( res, body ) :

    // @todo i18n
    responseUtils.markFailed( res, statusCode.BAD_REQUEST, 'Missing required parameter "project".' );

  response.json( output );
}
