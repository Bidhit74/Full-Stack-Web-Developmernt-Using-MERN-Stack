# Authentication and Authorization

## Authentication vs Authorization

1. Authentication - **Who are you?**
   Verifies the **identity** of a user.

2. Authorization - **What can you do?**
   Checks what an **authenticated user is allowed to access or perform**.

## Storing Passwords

- We **never store passwords in plain text**.

- We store a **securely hashed password** using a password-hashing algorithm such as **bcrypt** or **Argon2**.

### Sign Up

```text
User enters password
        ↓
Password is hashed
        ↓
Hash is stored in database
```

### Login

```text
User enters password
        ↓
Password-hashing library verifies it
        ↓
Entered password ↔ Stored password hash
        ↓
Match ✅ → Authentication successful
```

### Why Hashing Use?

- Passwords are not stored in plain text.
- A hash is designed to be one-way; you don't normally reverse it to get the original password.
- for a different input, there is a different output but output length is same.
- Password hashing is used to protect passwords in the database.
- If the database is leaked, the attacker doesn't directly get the original passwords.

### Salting

- Password salting is a technique to protect passwords stored in DB by adding a string of 32 or more characters and then hashing them.
- **Salt** is a **unique random value added to a password before hashing**.

#### Why?

It makes identical passwords produce **different hashes** and helps protect against precomputed/rainbow-table attacks.

```text
Password + Random Salt
        ↓
      Hashing
        ↓
     Hash + Salt
        ↓
     Database
```

**Salt = Random value + Password → Stronger password protection.**

## Passport

- It is an authentication middleware/framework for handling login strategies
- Passport.js is an authentication middleware for Node.js/Express.

### Why use it?

It helps handle:

- User login/authentication
- Different login strategies
- Sessions
- OAuth/social login like Google, GitHub, etc.

### Use

1. npm install passport
2. than use strategie - like i am use - passport-local - npm install passport-local
3. use MONGODB - than use - passport-local-mongoose - npm install passport-local-mongoose

- Passport-Local-Mongoose is a Mongoose plugin that simplifies building username and password login with Passport.
- You're free to define your User how you like. Passport-Local Mongoose will add a username, hash and salt field to store the username, the hashed password and the salt value.
- Additionally, Passport-Local Mongoose adds some methods to your Schema.

#### Example - Passport-Local-Mongoose

```js
import { Schema, model } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new Schema({});

userSchema.plugin(passportLocalMongoose);

const User = model("User", userSchema);

export default User;
```

### Configuring Strategy - Passport

- **Passport Strategy** → Defines **how Passport authenticates a user**.

- **`passport.initialize()`** → Initializes Passport and adds authentication-related functionality to the request. **app.use(passport.initialize());**

- **`passport.session()`** → Enables Passport to use **sessions** to remember the authenticated user across requests. **app.use(passport.session());**

- **`passport.use(new LocalStrategy(User.authenticate()))`** → Configures the **Local Strategy** using the user's username/password authentication method.

- **`passport.serializeUser(User.serializeUser())`** → Stores the user's identifying information in the session.

- **`passport.deserializeUser(User.deserializeUser())`** → Retrieves the user from the session and makes the user available as `req.user`.

### Flow

```text
Login
  ↓
LocalStrategy
  ↓
User.authenticate()
  ↓
serializeUser()
  ↓
Session
  ↓
Next Request
  ↓
deserializeUser()
  ↓
req.user
```

**Key Point:**
**Passport authenticates → Session remembers → `req.user` identifies the logged-in user.**
