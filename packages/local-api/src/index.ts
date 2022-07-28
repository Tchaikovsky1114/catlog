import express from 'express';
import path from 'path';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { createCellsRouter } from './routers/cells';
export const serve = (
  port: number,
  filename: string,
  dir: string,
  useProxy: boolean
) => {
  const app = express();
  app.use(createCellsRouter(filename,dir))
  if (useProxy) {
    app.use(
      createProxyMiddleware({
        target: 'http://localhost:3000',
        ws: true,
        // proxy에서 보내는 모든 로그 off
        logLevel: 'silent',
      })
    );
  } else {
    const packagePath = require.resolve('@cat-editor/local-client/build/index.html');
    app.use(express.static(path.dirname(packagePath)));
  }
 
  return new Promise<void>((resolve, reject) => {
    app.listen(port, resolve).on('error', reject);
  });
};
