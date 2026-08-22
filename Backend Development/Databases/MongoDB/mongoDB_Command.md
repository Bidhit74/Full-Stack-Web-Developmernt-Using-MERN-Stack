# MongoDB Command and Notes

## Most Commonly Used MongoDB terms

### Common DB Terms ---- MongoDB Terms

- Database ------------------ Database
- Tables ------------------- Collections
- Rows --------------------- Document
- Columns ------------------ Fields

- NOTE: In MongoDB, data are store in BSON not in JSON format.

## MongoDB Database Commands in terminal

1. For invoking MongoDB shell :- mongosh
2. Show all databases :- show dbs
3. Use Database :- Switch to (or create) a database: use mydb
4. Show current database :- db
5. Drop Database :- Delete entire database: db.dropDatabase()

## Collection Commands in terminal

1. List all collections in current DB:- show collections
2. Create collection:- db.createCollection("collection_name")
3. Drop/Delete collection:- db.users.drop()

### Insert Document

1. insertOne() → Insert one document: - - - db.collection_name.insertOne({ key:value })

2. insertMany() → Multiple documents: - - - db.collection_name.insertMany([{ key:value },{ key:value }])

- - Important Note : You don't actually need createCollection() — MongoDB will create the collection automatically when you first insert document.

### Find Documents

1. find() → Multiple documents ko fetch karta hai:- db.collection_name.find()

2. Condition: db.collection_name.find({ age: 22 })

3. findOne() → Sirf ek document return karta hai:- db.users.findOne({ name: "Bidhit" })

4. Pretty format:- db.collection_name.find().pretty()

### MongoDB Query Operators ⭐

**Query Operators** का उपयोग documents को **filter/search** करने के लिए किया जाता है।

#### 1. Comparison Operators

| Operator | Meaning               | Example                 |
| -------- | --------------------- | ----------------------- |
| `$eq`    | Equal                 | `{ age: { $eq: 18 } }`  |
| `$ne`    | Not Equal             | `{ age: { $ne: 18 } }`  |
| `$gt`    | Greater Than          | `{ age: { $gt: 18 } }`  |
| `$gte`   | Greater Than or Equal | `{ age: { $gte: 18 } }` |
| `$lt`    | Less Than             | `{ age: { $lt: 18 } }`  |
| `$lte`   | Less Than or Equal    | `{ age: { $lte: 18 } }` |
| `$in`    | Value list me exist   | `{ age: { $in: 18 } }`  |
| `$nin`   | Value not exist       | `{ age: { $nin: 18 } }` |

```js
db.students.find({ age: { $gte: 18 } });
```

#### 2. Logical Operators ⭐

| Operator | Meaning                  |
| -------- | ------------------------ |
| `$and`   | All conditions `true`    |
| `$or`    | someone condition `true` |
| `$not`   | Condition Opposite       |
| `$nor`   | No condition is`true`    |

##### `$and`

```js
db.students.find({
  $and: [{ age: { $gte: 18 } }, { class: 12 }],
});
```

##### `$or`

```js
db.students.find({
  $or: [{ age: 18 }, { class: 12 }],
});
```

#### 3. Element Operators

| Operator  | Meaning                         |
| --------- | ------------------------------- |
| `$exists` | Whether the field exists or not |
| `$type`   | Checks the field's data type    |

```js
db.students.find({
  email: { $exists: true },
});
```

### Update and Replace Methods

- updateOne() → एक document update करता है।

```js
db.users.updateOne({ name: "Bidhit" }, { $set: { age: 23 } });
```

- updateMany() → Multiple documents update karta hai

```js db.users.updateMany(
   { age: 21 },
   { $set: { status: "active" } })
```

- replaceOne() --> पूरे document को replace करता है।

```js
db.students.replaceOne(
  { name: "Rahul" },
  {
    name: "Rahul",
    age: 19,
    class: 12,
  },
);
```

### Delete Methods

- deleteOne() --> एक document delete करता है।

```js
db.students.deleteOne({
  name: "Rahul",
});
```

- deleteMany() --> Multiple documents delete करता है।

```js
db.students.deleteMany({
  age: { $lt: 18 },
});
```

--- Delete All Documents ⚠️ --> {} = कोई filter नहीं → सभी documents delete

```js
db.students.deleteMany({});
```
