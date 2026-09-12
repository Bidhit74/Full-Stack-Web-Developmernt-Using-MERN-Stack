# MongoDB Denormalization — Rules of Thumb

## Easy Rules to Remember

### 1. Prefer Embedding

By default, **embed related data** inside the parent.

```text
User
 └── Address
```

Use references when there is a good reason not to embed.

---

### 2. Need Independent Access? → Use Reference

If the child document needs to be **accessed or managed separately**, don't embed it.

```text
User ──→ Order
```

Example: Orders are independently searched/updated.

---

### 3. Avoid Very Large Arrays

Arrays should not grow endlessly.

```text
Few children      → Embed ✅
Hundreds+          → Think carefully
Thousands+        → Use references ✅
```

Example:

```text
User
 └── addresses: [ ... ]   ✅ few addresses

User
 └── orders: [ ...thousands ] ❌
```

---

### 4. Application-Level Joins Are Fine

You don't always need a database join.

Use **references + separate queries** when appropriate.

```text
Find User
   ↓
Find Orders using userId
```

With proper indexes, this can work efficiently.

---

### 5. Check Read vs Write Frequency

**Mostly read + rarely updated → Good for denormalization.**

**Frequently updated → Be careful.**

Example:

```text
Product
 ├── price → changes often ❌ duplicate
 └── brandName → rarely changes ✅ possible to duplicate
```

If duplicated data changes often, you must update it in many places.

---

### 6. Design According to Your Application

There is **no single best schema**.

Ask:

```text
How will I read the data?
How will I update the data?
How many related documents can exist?
```

Then design your MongoDB schema accordingly.

---

## Quick Revision

| Rule  | Simple Idea                            |
| ----- | -------------------------------------- |
| **1** | Embed by default                       |
| **2** | Independent access → Reference         |
| **3** | Don't create huge arrays               |
| **4** | Application-level joins are okay       |
| **5** | Mostly read → denormalization can help |
| **6** | Model according to query patterns      |

> **Golden Rule:** In MongoDB, **design your data based on how your application reads and updates it.**

```text
Small + used together       → Embed ✅
Independent child           → Reference ✅
Huge number of children     → Parent ID in child ✅
Frequently updated data     → Be careful with denormalization ⚠️
Schema design               → Follow access patterns ⭐
```
