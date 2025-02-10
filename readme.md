# Тестовое задание для React Developer

## Задание

Необходимо развернуть локально `json-server` и загрузить в него данные **seminars**. Используйте любые удобные технологии, но обязательно с использованием React для реализации следующих функций:

1. **Запрос данных**

   - Запросите данные с семинарами из `json-server`.

2. **Отрисовка списка семинаров**

   - Отобразите список семинаров на странице.

3. **Удаление семинара**

   - Реализуйте кнопку удаления семинара, которая при клике открывает окно подтверждения.
   - При подтверждении удаления отправьте `DELETE` запрос на сервер.

4. **Редактирование семинара**

   - Реализуйте кнопку редактирования семинара.
   - Редактирование должно происходить в модальном окне.

5. **Размещение на GitHub**
   - Залейте проект на GitHub и пришлите ссылку.
   - **Важно:** `json-server` должен находиться в том же репозитории, что и приложение.

## Дополнительные рекомендации

- Используйте современные подходы (например, React Hooks, функциональные компоненты).
- Обратите внимание на обработку ошибок и состояния загрузки.
- Добавьте комментарии в код для пояснения ключевых моментов реализации.

# Управление семинарами

Веб-приложение для управления списком семинаров с возможностью просмотра, редактирования и удаления записей.

## Технологии

- React (хуки, функциональные компоненты)
- Vite (сборка проекта)
- JSON Server (имитация REST API)
- Axios (HTTP-запросы)
- React Modal (модальные окна)

## Функциональность

- Отображение списка семинаров в виде карточек
- Редактирование информации о семинаре через модальное окно
- Удаление семинара с подтверждением
- Адаптивный дизайн (grid-layout)
- Обработка ошибок и состояний загрузки

## Установка и запуск

1. Клонируйте репозиторий:
```bash
git clone https://github.com/alexeykadochnik0v/itstart.git
cd itstart
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите приложение и JSON Server:
```bash
npm run dev:all
```

Приложение будет доступно по адресу: http://localhost:5173
JSON Server будет работать на порту 3001

## Структура проекта

- `src/components/` - React компоненты
  - `SeminarList.jsx` - основной компонент со списком семинаров
  - `SeminarEdit.jsx` - компонент формы редактирования
- `server.js` - конфигурация JSON Server
- `seminars.json` - данные для JSON Server
- `vite.config.js` - конфигурация Vite

## GitHub Pages

Демо-версия приложения доступна по адресу: https://alexeykadochnik0v.github.io/itstart/

Примечание: В демо-версии на GitHub Pages функции редактирования и удаления недоступны, так как это статический хостинг, который не поддерживает работу с JSON Server.
