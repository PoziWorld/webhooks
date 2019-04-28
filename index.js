const express = require( 'express' );

const handleTransifex = require( './handlers/transifex' );

const app = express();

module.exports = app;

init();

/**
 * Initialize the module.
 */

function init() {
  initServer();
}

/**
 * Configure the server.
 */

function initServer() {
  app.use( express.json() );
  app.post( '/transifex', handleTransifex );
}
