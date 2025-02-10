import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('seminars.json');
const middlewares = jsonServer.defaults();

const port = 3001;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server запущен на порту ${port}`);
});
