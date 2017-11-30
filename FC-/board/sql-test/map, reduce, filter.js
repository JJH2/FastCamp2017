let arr = [1, 2, 3, 4, 5];

// old code1

var a3 = [];
for (var i = 0; i < arr.length; i++) {
    a3.push(arr[i] * arr[i]);
}
console.log(a3);

// old code2
var a2 = arr.map(function(a) {
    return a * a;
});
console.log(a2);



// es6 map
let arr2 = arr.map(a => a * 2);
console.log(arr2); //[2, 4, 6, 8, 10]

// es6 reduce
let sum = arr.reduce((a, b) => a + b);
console.log(sum); //15 => 1 + 2 / 3 + 3 / 6 + 4 / 10 + 5

// es6 filter
let filter = arr.filter((a) => a % 2 == 0);
console.log(filter); //[2, 4]