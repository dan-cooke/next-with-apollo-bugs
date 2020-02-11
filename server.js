/**
 * @file server.js
 * @description Our NextJS custom express server implementation, this file when executed in a node environment will
 * prepare the NextJS app for serving.
 * ** IT DOES NOT START A SERVER - you must call server.listen in the file that imports this **
 */
const express = require('express');


const next = require('next');


const app = next({ dev: true });
const handler = app.getRequestHandler();

const server = express();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const ASSET_PREFIX = process.env.ASSET_PREFIX;

const router = express.Router();

// serve static files

router.get('/_next/*', handler);
router.get('*', handler);
// server.use(ASSET_PREFIX, router);

/**
 * @exports Promise - this promise resolves to an instance of the server, with prepared NextJS app
 */
module.exports = app
  .prepare()
  .then(() => Promise.resolve(server))
  .catch(console.error);
