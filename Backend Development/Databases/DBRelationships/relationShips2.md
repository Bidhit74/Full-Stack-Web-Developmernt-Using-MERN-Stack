# MongoDB Relationships

## One-to-Many — Approach 3 (One-to-Squillions)

### Store a Reference to the Parent Document Inside the Child

- In this approach, **each child document stores the `_id` of its parent**.

- This is useful when one parent can have a **very large number of child documents**.

### Example

A customer can have thousands of orders:

```text
Customer
   │
   ├── Order 1  → customer: Customer_ID
   ├── Order 2  → customer: Customer_ID
   ├── Order 3  → customer: Customer_ID
   └── ... thousands of orders
```

### Customer

```json
{
    "_id": "C101",
    "name": "Rahul"
}
```

### Order

```json
{
    "_id": "O501",
    "item": "Laptop",
    "price": 50000,
    "customer": "C101"
}
```

Each **Order stores a reference to its Customer**.

### Mongoose Example

```js
const orderSchema = new Schema({
    item: String,
    price: Number,

    customer: {
        type: Schema.Types.ObjectId,
        ref: "Customer",
    },
});
```

### Best For

- **One-to-Squillions** relationships
- Very large number of child documents
- Child documents are frequently queried independently
- Avoids making the parent document too large

### Examples

```text
Customer  → Orders
User      → Log entries
Server    → Millions of Log records
Post      → Huge number of Events
```

> **Key Point:** When the number of children can become extremely large, store the **parent reference inside each child document**.
