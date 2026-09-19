# Sessions and State

## What is State?

**State** means information that a system keeps track of between multiple requests or interactions.

### 1. Stateful Protocol

A **stateful protocol** maintains information about the current session or previous interactions.

**Example:** FTP (File Transfer Protocol)

```text
Client
  ↓ Login / Session
Server maintains session state
  ↓
Further requests use the same session
```

### 2. Stateless Protocol

A **stateless protocol** does not require the server to remember previous requests. Each request is treated independently.

**Example:** HTTP

```text
Request 1 → Independent
Request 2 → Independent
Request 3 → Independent
```

Because HTTP is stateless, **sessions, cookies, or tokens** are often used when an application needs to maintain user state.

> **Note:** Stateless does not mean that a server cannot store data; it means the protocol does not inherently require previous request state to be maintained between requests.

## What is a Session?

A **session** is a server-side mechanism used to store a user's state across multiple requests.

Usually, the browser stores a **session ID in a cookie**, while the actual session data is stored on the server (or a session store).

### Example for Session

```text
Browser
   ↓
Session ID Cookie
   ↓
Server
   ↓
Session Data
{
    userId: "123",
    loggedIn: true
}
```

---

## Why Use Sessions?

Sessions are commonly used for:

- **Login / Authentication** → remember logged-in users
- **Shopping Cart** → remember cart items
- **User Preferences** → maintain temporary user state
- **Flash Messages** → store short-lived messages

---

## Express Example

```js
import session from "express-session";

app.use(
    session({
        secret: "mySecret",
        resave: false,
        saveUninitialized: false,
    }),
);
```

Store data:

```js
req.session.userId = "123";
```

Read data:

```js
req.session.userId;
```

### Simple Flow

```text
Login
  ↓
Server creates session
  ↓
Session ID → Browser Cookie
  ↓
Next Request
  ↓
Session ID → Server finds session data
  ↓
User recognized
```

> **Key Point:** A **session maintains user state across requests**, while a **session cookie usually stores only the session ID**, not the complete session data.
