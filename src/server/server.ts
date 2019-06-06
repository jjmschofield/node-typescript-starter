import http from 'http';
import https from 'https';

import { createApp } from './app';

export const server = async () => {
  const app = createApp();

  const ports = {
    http: process.env.HTTP_PORT,
    https: process.env.HTTPS_PORT,
  };

  http.createServer(app.callback()).listen(ports.http);
  https.createServer(app.callback()).listen(ports.https);
};
