# Async Error Handling — Different Way

## Without `try...catch`

Async function में `try...catch` बार-बार लिखने के बजाय **Promise wrapper** का उपयोग कर सकते हैं।

### `asyncHandler.js`

```js
const asyncHandler = (fn) => {
	return (req, res, next) => {
		Promise.resolve(fn(req, res, next)).catch(next);
	};
};

export default asyncHandler;
```

### Example

```js
const testController = asyncHandler(async (req, res) => {
	// Async operation
	await Promise.reject(new Error("Something went wrong"));

	res.send("Success");
});
```

### Express Error Middleware

```js
const errorHandler = (err, req, res, next) => {
	console.error(err);

	res.status(500).json({
		success: false,
		message: "Internal Server Error",
	});
};

export default errorHandler;
```

### Flow

```text
Async Controller
      ↓
Promise rejected
      ↓
.catch(next)
      ↓
Express Error Middleware
      ↓
Error Response
```

### Why use it?

- `try...catch` को हर controller में लिखने की जरूरत नहीं।
- Code cleaner और reusable होता है।
- सभी async errors एक **central error middleware** तक पहुँच सकते हैं.

> **Remember:** `asyncHandler` का main काम async function की rejected Promise को `next(error)` तक पहुँचाना है।
