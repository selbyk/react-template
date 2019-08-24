import express, { ErrorRequestHandler } from 'express';
import morgan from 'morgan';
import next from 'next';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(morgan('short'));
  server.use(<ErrorRequestHandler>((err, _req, _res, next) => {
    console.error(err);
    next(err);
  }));

  server.get('/a', (req, res) => app.render(req, res, '/a', req.query));
  server.get('/b', (req, res) => app.render(req, res, '/b', req.query));

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
