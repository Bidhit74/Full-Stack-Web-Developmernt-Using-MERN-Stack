# Database Relationships

- A relationship defines how two entities/tables are connected.

## SQL Relationships

- Using Foreign Keys

### 1. One-to-One (1:1)

- One record ↔ One record

```text
Person  ────────  Passport
   1                 1
```

- One person has **one passport**, and one passport belongs to **one person**.

```text
User
 └── Passport
```

**Example:** User ↔ Profile, Person ↔ Passport

### 2. One-to-Many (1:N) -- Cardinality

- One record ↔ Many records

```text
User  ────────<  Listings
  1                 Many
```

- One user can create **many listings**, but each listing belongs to **one user**.

```text
User
 ├── Listing 1
 ├── Listing 2
 └── Listing 3
```

**Example:** Author → Books, Department → Employees

### 3. Many-to-Many (M:N)

- Many records ↔ Many records

```text
Students  >──────<  Courses
```

- One student can enroll in **many courses**, and one course can have **many students**.

```text
Student A → Math, Physics
Student B → Physics, Chemistry
```

- Usually, a **junction/intermediate table** is used:

```text
Students
   ↓
Enrollments
   ↓
Courses
```

## MongoDB Relationships

### One-to-Many / One-to-Few — Approach 1

- Store the Child Document Inside the Parent: In this approach, the **child documents are embedded inside the parent document**.

#### Example

- A user has a few addresses:

```json
{
    "_id": 1,
    "name": "Rahul",
    "addresses": [
        {
            "city": "Patna",
            "country": "India"
        },
        {
            "city": "Delhi",
            "country": "India"
        }
    ]
}
```

Here:

```text
User (Parent)
   ↓
addresses (Children)
   ├── Address 1
   └── Address 2
```

```text
User → Few Addresses
Post → Few Comments
Product → Few Specifications
```

### One-to-Many — Approach 2

- Store References to Child Documents Inside Parent

- In this approach, the parent document stores the **IDs (references)** of its child documents instead of embedding the complete child documents.

#### Example of One-to-Many

User

```json
{
    "_id": "U1",
    "name": "Rahul",
    "posts": ["P1", "P2", "P3"]
}
```

Posts

```json
{
    "_id": "P1",
    "title": "My First Post"
}
```

```json
{
    "_id": "P2",
    "title": "My Second Post"
}
```

```json
{
    "_id": "P3",
    "title": "My Third Post"
}
```

#### Relationship

```text
User
 ├── P1 → Post 1
 ├── P2 → Post 2
 └── P3 → Post 3
```

Schema

```js
const userSchema = new Schema({
    name: String,

    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
});
```

- **One-to-Many** relationships
- Large number of child documents
- Child documents need to be accessed independently
- Parent document should remain small

```text
User → Many Posts
Author → Many Books
Customer → Many Orders
```
