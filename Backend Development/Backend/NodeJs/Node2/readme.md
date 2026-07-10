# Node Internal Flow

```js
setTimeout(() => console.log("Set Timeout"), 0);
setImmediate(() => console.log("Set Immediate"));
console.log("Hello");
```

## Node.js Internal Flow

A. **Call Stack runs first**

```txt
console.log("Hello")

```

Output:

```txt
Hello
```

B. **setTimeout(0)**

```text
Node sends this to Timer API (libuv)
It says: "Run this callback after minimum 0 ms"
Callback goes into Timer Queue
```

```bash
Timer Queue
[
  () => console.log("Set Timeout")
]
```

- Goes to **Timer Queue**
- Executes in **Timers Phase**

C. **setImmediate()**

- Goes to **Check Queue**
- Executes in **Check Phase**

Event Loop:

```txt
Call Stack
    ↓
Timers Phase      → setTimeout()
    ↓
Check Phase       → setImmediate()
```

Output usually:

```txt
Hello
Set Timeout
Set Immediate
```

Remember:

```txt
Synchronous code → setTimeout → setImmediate
```

Exception: inside I/O operation:

```txt
Synchronous code → setImmediate → setTimeout
```

## Node Event Loop phases

```text
┌──────────────────┐
│ Timers Phase     │ ← setTimeout()
├──────────────────┤
│ Pending Callback │
├──────────────────┤
│ Poll Phase       │
├──────────────────┤
│ Check Phase      │ ← setImmediate()
├──────────────────┤
│ Close Callback   │
└──────────────────┘
```

## Main Thread vs Thread Pool in Node.js

### 1. Main Thread

- The **main thread** executes your JavaScript code.
- It runs the **Call Stack** and **Event Loop**.
- It handles fast non-blocking tasks.

Example:

```js
console.log("Hello");
```

Flow:

```txt
JavaScript Code
      ↓
 Main Thread
      ↓
 Call Stack
      ↓
 Execute
```

Node.js has **one main thread** for JavaScript execution.

---

### 2. Thread Pool

- Thread pool is a group of extra worker threads provided by **libuv**.
- Used for heavy/blocking work.
- Default size = **4 threads / workers**.

```txt
libuv Thread Pool = 4 workers
```

Increase using:

```js
process.env.UV_THREADPOOL_SIZE = 8;
```

Flow:

```txt
Main Thread
     ↓
   libuv
     ↓
Thread Pool
(4 → 8 workers)
```

Flow:

```txt
Main Thread
     ↓
Event Loop
     ↓
libuv
     ↓
Thread Pool
     ↓
Worker Thread executes fs task
     ↓
Callback Queue
     ↓
Main Thread runs callback
```

---

Remember:

```txt
Main Thread
= Runs JavaScript + Event Loop

Thread Pool
= Runs heavy background tasks
```

Simple view:

```txt
          Node.js

        Main Thread
             |
   --------------------
   |                  |
JS Execution       Event Loop
                      |
                    libuv
                      |
                Thread Pool
             (4 worker threads)
```

Node.js is **single-threaded for JavaScript**, but internally uses **multiple threads through libuv**.
