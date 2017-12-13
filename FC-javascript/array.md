배열
===


###slice

```js
const arr = [1, 2, 3, 4, 5];

arr.slice(1, 3) // [2, 3]; 
```
slice는 원본을 변경하지 않는다.

###splice

```js
let arr = [1, 2, 3, 4, 5];

arr.splice(0, 2, 'one', 'two') // [1, 2]를 'one', 'two'로 변경
```