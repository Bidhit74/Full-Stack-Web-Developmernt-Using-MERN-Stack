# Handling Deletion

## Using Mongoose Middleware

Mongoose middleware allows you to run custom code **before or after a database operation**.

You can mainly use two middleware:

### 1. Pre Middleware

Runs **before** the database operation is executed.

```js
schema.pre("findOneAndDelete", async function () {
    // Runs before deletion
});
```

### 2. Post Middleware

Runs **after** the database operation is executed.

```js
schema.post("findOneAndDelete", async function (doc) {
    // Runs after deletion
});
```

### Example

```js
listingSchema.pre("findOneAndDelete", async function () {
    console.log("Before deleting listing");
});

listingSchema.post("findOneAndDelete", async function (doc) {
    console.log("After deleting listing:", doc);
});
```

### Flow

```text
findOneAndDelete()
       ↓
   Pre Middleware
       ↓
   Delete Document
       ↓
   Post Middleware
```

**Remember:**

```text
Pre  → Before operation
Post → After operation
```

> Middleware is useful for related cleanup work, logging, validation, or other actions when a document is deleted.
