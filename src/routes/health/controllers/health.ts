import os from 'os';
import { Context } from 'koa';

// TODO - this should be secured
export const healthCtrl = (ctx: Context, next: Function) => {
  ctx.status = 200;

  ctx.body = {
    status: 'UP',
    uptime: process.uptime(),
    cpu: {
      loadavg: os.loadavg(),
    },
    mem: {
      total: os.totalmem(),
      free: os.freemem(),
    },
  };
};
