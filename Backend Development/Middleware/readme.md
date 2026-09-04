# Middleware

- Middleware ek function hota hai jo request (req) aur response (res) ke बीच में execute hota hai.

## Simple flow

Client
↓
Request
↓
Middleware
↓
Route / Controller
↓
Response
↓
Client

## Middleware request

- check kar sakta hai
- modify kar sakta hai
- validate kar sakta hai
- authentication check kar sakta hai
- logging kar sakta hai
- error handle kar sakta hai

## Built-in Express Middleware

- Express mein kuch middleware already milte hain

```js
app.use(express.json()); // JSON request body ko parse karta hai.
```

```js
app.use(express.urlencoded({ extended: true })); // HTML form data ko parse karta hai.
```

```js
app.use(express.static("public")); // CSS, JS, images etc. serve karne ke liye.
```

## Error Middleware

- Express mein error handling ke liye special middleware hota hai:

```js
const errorHandler = (err, req, res, next) => {
	console.error(err);
	res.status(500).send("Something went wrong");
};
app.use(errorHandler);
```

## Middleware One line

- Middleware is a function that has access to the request object, response object, and the next() function, and executes during the request-response cycle.

- req → middleware → next() → route/controller → res.
