const crypto = require("crypto");

// Check Workers or thread pool using crypto - cpu intensive work

const start = Date.now();

crypto.pbkdf2("password", "salt1", 10000, 1024, "sha512", (err, data) => {
  console.log(`[${Date.now() - start}ms]: Password 1 hashed.`);
});
crypto.pbkdf2("password", "salt1", 10000, 1024, "sha512", (err, data) => {
  console.log(`[${Date.now() - start}ms]: Password 2 hashed.`);
});
crypto.pbkdf2("password", "salt1", 10000, 1024, "sha512", (err, data) => {
  console.log(`[${Date.now() - start}ms]: Password 3 hashed.`);
});
crypto.pbkdf2("password", "salt1", 10000, 1024, "sha512", (err, data) => {
  console.log(`[${Date.now() - start}ms]: Password 4 hashed.`);
});

// Default worker 4 hota hai agar us se jyada work hai to worker 4 task ek sath kar sakta hai but us se jyada hoga to worker apna pahle kaam complete ke baad hi us task karega

// aap chahe to increase bhi kar sakte hai worker ko
crypto.pbkdf2("password", "salt1", 10000, 1024, "sha512", (err, data) => {
  console.log(`[${Date.now() - start}ms]: Password 5 hashed.`);
});

// Increase Worker - Use - process.env.UV_THREADPOOL_SIZE

// process.env.UV_THREADPOOL_SIZE = 10;

crypto.pbkdf2("password", "salt1", 10000, 1024, "sha512", (err, data) => {
  console.log(`[${Date.now() - start}ms]: Password 6 hashed.`);
});
