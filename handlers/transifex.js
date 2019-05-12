const superagent = require( 'superagent' );

const responseUtils = require( '../utils/response' );
const typeUtils = require( '../utils/type' );

const statusCode = require( '../model/status-code' );

const TEXT_PLACEHOLDER = '$TEXT';
const telegramUrl = `https://api.telegram.org/bot${ process.env.BOT_TOKEN }/sendMessage?chat_id=${ process.env.CHAT_ID }&text=${ TEXT_PLACEHOLDER }`;

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

async function handleTransifex( req, res ) {
  const { body } = req;
  const { project } = body;
  const {
    res: response,
    output,
  } = typeUtils.isNonEmptyString( project ) ?
    responseUtils.markSuccessful( res, body ) :

    // @todo i18n
    responseUtils.markFailed( res, statusCode.BAD_REQUEST, 'Missing required parameter "project".' );
  let result = null;

  try {
    result = await forwardTimelineEvent( output );
  }
  catch ( e ) {
    // @todo
  }

  response.json( {
    ...output,
    ...result,
  } );
}

/**
 * Send the webhook info to the specified Telegram chat.
 *
 * @param {Object} data - New Transifex project's timeline event.
 * @return {Object}
 */

async function forwardTimelineEvent( data ) {
  const stringifiedData = JSON.stringify( data );
  const url = telegramUrl.replace( TEXT_PLACEHOLDER, stringifiedData );
  let response = {};

  try {
    const {
      body: {
        ok,
        result: {
          // eslint-disable-next-line camelcase
          message_id: messageId,
        },
      },
    } = await superagent.get( url );

    response = {
      ok,
      messageId,
    };
  }
  catch ( e ) {
    response = {
      ok: false,
      message: e,
    };
  }

  return response;
}
