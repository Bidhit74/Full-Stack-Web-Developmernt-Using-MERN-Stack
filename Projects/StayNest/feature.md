# Features

## Reviews Feature

### Creating reviews model

- Relationships - One to Many --> Listing to many Review

- comment
- rating - (1 to 5)
- createdAt
- updatedAt

## Flash Message Feature

1. Use first 'Express-session' (use - cookies, sessionOptions)
2. Than use connect-flash
3. than create message
4. store the flash message inside the 'res.locals' storage
5. than show message in ejs

## Authentication and Authorization

- **Authentication** → **Who are you?** Verifies the user's identity;
- **Authorization** → **What can you do?** Checks permissions.

### Authentication

1. **Passwords are never stored in plain text**; store a securely **hashed password** using algorithms such as **bcrypt** or **Argon2**.
2. **Sign Up:** Password → Hashing + Salt → Hash stored in database.
3. **Login:** Entered password → Password-hashing library verifies it against the stored hash → Authentication successful.
4. **Hashing** is one-way and protects passwords if the database is leaked.
5. A cryptographic hash produces a **fixed-length output** for inputs of the same algorithm.
6. **Salting** adds a unique random value to each password before hashing, so identical passwords produce different hashes.
7. **Passport.js** is an authentication middleware for Node.js/Express that supports login strategies, sessions, and OAuth.
8. **Passport Strategy** defines how authentication is performed; **Local Strategy** uses username/password.
9. `passport.initialize()` initializes Passport; `passport.session()` enables authentication through sessions.
10. `passport.use(new LocalStrategy(User.authenticate()))` configures Local authentication.
11. `serializeUser()` stores the user's identifier in the session; `deserializeUser()` retrieves the user as `req.user`.
12. **passport-local-mongoose** simplifies username/password authentication, hashing, salting, registration, and Passport integration.
13. `User.register({ username }, password)` checks username uniqueness, hashes the password, and saves the user.
14. **Flow:** Login → LocalStrategy → `authenticate()` → `serializeUser()` → Session → `deserializeUser()` → `req.user`.
