// Импортируем json-server для создания REST API
import jsonServer from 'json-server';

// Создаем экземпляр сервера
const server = jsonServer.create();

// Создаем роутер на основе файла с данными
const router = jsonServer.router('seminars.json');

// Добавляем middleware по умолчанию (logger, static, cors и no-cache)
const middlewares = jsonServer.defaults();

// Указываем порт для сервера
const port = 3001;

// Подключаем middleware
server.use(middlewares);

// Подключаем роутер
server.use(router);

// Запускаем сервер
server.listen(port, () => {
  console.log(`JSON Server запущен на порту ${port}`);
});
