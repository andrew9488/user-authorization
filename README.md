# Тестовое задание OZiTAG

[Посмотреть реализацию](https://andrew9488.github.io/user-authorization)

## Технологии: 

Typescript, React.js

## Описание: 

Реализовать приложение из двух экранов:
1. Экран авторизации, содержит форму с полями email и password и кнопку Submit.
2. Экран авторизованного юзера, содержит отображение профиля юзера и кнопку Выйти.

Если пользователь авторизован – показывать экран 2, иначе – экран 1.

## 1. API для аутентификации:

POST /api/auth/user HTTP/1.1
Host: https://tager.dev.ozitag.com
Accept: application/json
Content-Type: application/json

Body:
    {
      "clientId": 1,
      "email": "user@ozitag.com",
      "password": "user"
    }
    
Пример ответа:
{
  "data": {
    "tokenType": "Bearer",
    "expiresAt": "2021-08-27T12:25:36Z",
    "accessToken": "eyJ0eXAiOiJKV19BbrwgbKi9eJH9IeXYTjWdXkwshh...rQgA",
    "refreshToken": "def50200471ef4d2a5bc66ab0a833290bb426d495...280fb"
  }
}

## 2. API для получения профиля авторизованного юзера:

GET /api/tager/user/profile HTTP/1.1
Host: https://tager.dev.ozitag.com
Accept: application/json
Authorization: Bearer {access_token}

Пример ответа: 
{
  "data": {
      "name": "Test User",
      "email": "user@ozitag.com"
    }
}

## Будет плюсом:
1. использование Formik, Fetch API
2. валидация формы
