# Express Session — Store and Use

## Store Data

Store data in `req.session`:

```js
req.session.userId = "123";
req.session.username = "Bidhit";
```

### Use Data

Read stored data from `req.session`:

```js
console.log(req.session.userId);
console.log(req.session.username);
```

### Example

```js
app.get("/login", (req, res) => {
    req.session.userId = "123";

    res.send("Login successful");
});

app.get("/profile", (req, res) => {
    const userId = req.session.userId;

    res.send(`User ID: ${userId}`);
});
```

> **Key Point:** `req.session` is used to **store and retrieve user-specific state across requests**.
