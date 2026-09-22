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
