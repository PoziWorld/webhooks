const request = require( 'supertest' );
const assert = require( 'assert' );

const statusCode = require( '../model/status-code' );

const app = require( '../index' );

const TRANSIFEX_TEST_PROJECT = 'pozitone';
const TRANSIFEX_PATH = '/transifex';
const UNKNOWN_PATH = '/unknown';

init();

/**
 * Initialize the tests.
 */

function init() {
  describe( `POST ${ TRANSIFEX_PATH }`, testTransifexPost );
  describe( `GET ${ TRANSIFEX_PATH }`, testTransifexGet );
  describe( `POST ${ UNKNOWN_PATH }`, testUnknownPost );
}

/**
 * Test POST requests to /transifex.
 */

function testTransifexPost() {
  it( 'responds with JSON', testTransifexPostJson );
  it( 'responds with 400 on no data', testTransifexPost400 );
  it( 'responds with 200 on proper data', testTransifexPost200 );
  it( 'responds with 200 & data on proper data', testTransifexPost200Data );
}

/**
 * Test GET requests to /transifex.
 */

function testTransifexGet() {
  it( 'responds with 404', testTransifexGet404 );
}

/**
 * Test POST requests to /unknown.
 */

function testUnknownPost() {
  it( 'responds with 404', testUnknownPost404 );
}

/**
 * The POST request to /transifex is to succeed with a JSON response.
 *
 * @return {Test}
 */

function testTransifexPostJson() {
  return request( app )
    .post( TRANSIFEX_PATH )
    .set( 'Accept', 'application/json' );
}

/**
 * The POST request to /transifex is to fail with status 400 when no data is sent.
 *
 * @return {Test}
 */

function testTransifexPost400() {
  return testTransifexPostJson()
    .expect( statusCode.BAD_REQUEST );
}

/**
 * The POST request to /transifex is to succeed with status 200 when proper data is sent.
 *
 * @return {Test}
 */

function testTransifexPost200() {
  return testTransifexPostJson()
    .send( {
      project: TRANSIFEX_TEST_PROJECT,
    } )
    .expect( statusCode.OK );
}

/**
 * The POST request to /transifex is to succeed with status 200 and data when proper data is sent.
 *
 * @return {Test}
 */

function testTransifexPost200Data() {
  return testTransifexPost200()
    .then( validateTransifexPost200Data );
}


/**
 * The POST request to /transifex is to respond with the same data item value as in the request.
 *
 * @param res - The HTTP response.
 */

function validateTransifexPost200Data( res ) {
  assert.strictEqual( res.body.project, TRANSIFEX_TEST_PROJECT );
}

/**
 * The GET request to /transifex is to fail with status 404.
 *
 * @return {Test}
 */

function testTransifexGet404() {
  return test404( TRANSIFEX_PATH );
}

/**
 * The POST request to /unknown is to fail with status 404.
 *
 * @return {Test}
 */

function testUnknownPost404() {
  return test404( UNKNOWN_PATH );
}

/**
 * The request is to fail with status 404.
 *
 * @param {string} path
 * @return {Test}
 */

function test404( path ) {
  return request( app )
    .get( path )
    .expect( statusCode.NOT_FOUND );
}
