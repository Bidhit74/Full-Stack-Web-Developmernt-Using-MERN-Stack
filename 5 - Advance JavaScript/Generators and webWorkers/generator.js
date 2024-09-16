// function* -- function sath star lagane se function generator function ban jata hai
//Generator function --- Aap execution ko puase kar sakte and jab bhi aap next bolenge tabhi agla step kaam karega

// function* printNums() {
//     console.log("Started");
//     yield 1;
//     console.log("Second Step");
//     yield 2;
//     console.log("Third Step");
//     yield 3;
// }

// const ans = printNums();
// console.log(ans.next());
// console.log(ans.next().value);

function* allNums() {
    for (let i = 0; i < 10; i++) {
        yield i;
    }
}

const generator = allNums();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
