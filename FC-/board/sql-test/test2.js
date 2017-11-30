"use strict";

// 동기
console.log("Hello");
console.log("World");

// 비동기
setTimeout(() => console.log("World"), 1000);
console.log("Hello");