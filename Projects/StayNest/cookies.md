# Cookies

## What is a Cookie?

A **cookie** is a small piece of data stored in the user's browser by a website.

It is sent back to the server with future requests to help the server **remember information** about the user.

### Why are Cookies Used?

HTTP is **stateless**, so the server does not automatically remember previous requests.

Cookies help maintain information between requests.

### Common Uses

- **Authentication** → Store session/login information
- **Sessions** → Identify a user's session
- **Preferences** → Remember language or theme
- **Tracking** → Remember user-related activity

### Simple Flow

```text
Browser
   ↓
Server sets Cookie
   ↓
Browser stores Cookie
   ↓
Next Request
   ↓
Cookie sent to Server
```

### Express Example

```js
res.cookie("username", "Bidhit");
```

Read the cookie:

- req.cookies.username से cookie पढ़ने के लिए Express में cookie-parser middleware use करना होगा।
- npm install cookie-parser

```js
import cookieParser from "cookie-parser";
app.use(cookieParser());

req.cookies.username;
```

> **Key Point:** Cookies are mainly used to **store small client-side data and maintain state between HTTP requests**.

## Signed Cookies

### What are Signed Cookies?

A **signed cookie** is a cookie with a **signature** that helps verify whether the cookie value has been modified by the client.

> The signature provides **integrity**, not encryption.

### Why Use Signed Cookies?

- Detect cookie tampering
- Verify that the cookie was created by your server
- Useful for session-related or trusted values

### Setup with `cookie-parser`

```js
import cookieParser from "cookie-parser";

app.use(cookieParser("mySecretKey"));
```

### Set Signed Cookie

```js
res.cookie("username", "Bidhit", {
    signed: true,
});
```

### Read Signed Cookie

```js
req.signedCookies.username;
```

### Normal vs Signed

```text
Normal Cookie
→ req.cookies.username

Signed Cookie
→ req.signedCookies.username
```

### Simple Flow Signed Cookies

```text
Server
  ↓
Value + Signature
  ↓
Browser stores cookie
  ↓
Browser sends cookie
  ↓
cookie-parser verifies signature
  ↓
Valid → req.signedCookies
Invalid → value rejected
```

> **Key Point:** Signed cookies help detect **tampering**, but they do **not hide or encrypt** the cookie value.
