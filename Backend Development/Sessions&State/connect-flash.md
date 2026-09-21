# Connect Flash

## What is `connect-flash`?

`connect-flash` is middleware used to store a **temporary message in the session**.

The message is usually available for **one request**, then removed.

### Why Use It?

Useful for messages like:

- ✅ Listing created successfully
- ✅ Listing deleted successfully
- ❌ Invalid data
- ❌ Login failed

### Install

```bash
npm install connect-flash
```

### Setup

```js
import session from "express-session";
import flash from "connect-flash";

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    }),
);

app.use(flash());
```

### Store Message

```js
req.flash("success", "Listing created successfully!");
```

### Read Message

```js
req.flash("success");
```

### Example

```js
app.post("/listings", (req, res) => {
    // Save temporary message
    req.flash("success", "Listing created successfully!");

    res.redirect("/listings");
});
```

Then in EJS:

```ejs
<%= success %>
```

### Flow

```text
Request
  ↓
req.flash("success", "Message")
  ↓
Session
  ↓
Redirect
  ↓
Read message
  ↓
Message is removed
```

> **Key Point:** `connect-flash` is mainly used for **one-time success/error notifications**, especially after redirects.

## res.locals

`res.locals` is used to store **data accessible in EJS views for the current request**.

```js
app.use((req, res, next) => {
    res.locals.username = "Bidhit";
    next();
});
```

In EJS:

```ejs
<%= username %>
```

### Common Uses

```text
Flash messages
User info
Login status
Common template data
```

**Key Point:** `res.locals` → data available to views during the current request.
