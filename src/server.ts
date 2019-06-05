import http from 'http';
import https from 'https';
import 'source-map-support/register';

import config from './lib/config';
import log from './lib/logger';
import { createApp } from './app';

const main = async () => {
  await config.load();

  process.title = process.env.PROC_TITLE || 'node';

  const app = createApp();

  const ports = {
    http: process.env.HTTP_PORT,
    https: process.env.HTTPS_PORT,
  };

  http.createServer(app.callback()).listen(ports.http);
  https.createServer(app.callback()).listen(ports.https);
};

(async () => {
  try {
    await main();
  }
  catch (error) {
    log.error('UNHANDLED_ERROR', 'An unhandled exception has caused the app to terminate', { error });
    process.exit(1);
  }
})();
