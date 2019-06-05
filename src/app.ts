import Koa from 'koa';

import { logRequest } from './lib/logger/middleware/koa';
import { createDefaultApp } from './lib/koa';

import rootRouter from './routes/root/router';
import healthRouter from './routes/health/router';
import * as Boom from '@hapi/boom';

export const createApp = (): Koa => {
  const app = createDefaultApp({ requestLogger: logRequest });

  const routers = [
    healthRouter.create(),
    rootRouter.create(),
  ];

  routers.forEach((router) => {
    app.use(router.routes());
    app.use(router.allowedMethods({
      throw: true,
      methodNotAllowed: Boom.methodNotAllowed,
      notImplemented: Boom.notImplemented,
    }));
  });

  return app;
};

