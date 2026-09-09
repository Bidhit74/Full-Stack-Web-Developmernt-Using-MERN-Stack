# Express 5+ — Async Error Handling

## Best Practice

Use **`async/await` + central error middleware**.

`asyncWrap` is generally **not required** in Express 5+.

### Async Controller

```js
const controller = async (req, res) => {
	const data = await getData();
	res.json(data);
};
```

If an async error occurs, Express 5 automatically forwards it to the error middleware.

### Central Error Middleware

```js
app.use((err, req, res, next) => {
	console.error(err.stack);

	res.status(500).json({
		message: "Internal Server Error",
	});
});
```

### When to Use `try...catch`?

Use `try...catch` when you need to **handle the error locally**.

```js
try {
	// code
} catch (err) {
	// custom error handling
}
```

### Remember

```text
Express 5+
    ↓
async/await
    ↓
Error
    ↓
Express automatically calls next(error)
    ↓
Central errorHandler
```

| Method                 | Express 5+             |
| ---------------------- | ---------------------- |
| `asyncWrap`            | ❌ Usually unnecessary |
| `try...catch`          | ✅ Only when needed    |
| Central `errorHandler` | ✅ Recommended         |

## Schema Validation - server side

- Joi का काम: request data validate करना। -- npm install joi
- ExpressError का काम: validation error को proper HTTP error बनाना।
- Error middleware का काम: final response देना।
