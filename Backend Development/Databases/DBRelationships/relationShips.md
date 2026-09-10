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
