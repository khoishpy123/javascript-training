// We can initialize an empty array in these 2 different ways:
const a = [];
console.log(a);
const b = Array();
console.log(b);
// You can pre-fill the array using this syntax:
const c = [1, 2, 3];
console.log(c);
const d = Array.of(1, 2, 3);
console.log(d);
const e = [1, 2, 3];
console.log(`e: ${e}`, e);

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(matrix[0][0]) //1
console.log(matrix[2][0]) //7

console.log(matrix[2]) //[7, 8, 9]


console.log(Array(12).fill(0)) //[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const g = [1, 2, 3]
console.log(g) //[ 1, 2, 3 ]
g.length = 2
console.log(g) //[ 1, 2 ]

g.push(4) //add an item in array
console.log(g) //[ 1, 2, 4 ]
g.unshift(0);
console.log(g)// add an item in array
g.unshift(-2, -1);
console.log(g)


/* join two or more arrays
// const l = [1, 2]
// const m = [3, 4]
// const k = l.concat(m) //[1,2,3,4]

const l = [1, 2]
const m = [3, 4]
const k = [...a, ...b] //spread operator(...)
k //[1,2,3,4]
*/

/* find a specific item in the array 
a.find((element, index, array) => {
    //return true or false
    })
*/