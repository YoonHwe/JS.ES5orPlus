// 'use strict';

//Array

//1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position 
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);//마지막 요소

//3. Looping over an array
//print all fruits
//a. for
for(i = 0; i <fruits.length; i++){
    console.log(fruits[i]);
}
//b. for of
for(let fruit of fruits){
    console.log(fruit);
}
//c. forEach
fruits.forEach((fruit) => console.log(fruit));

//4. Addition, deletion, copy
//push: add an item to the end
fruits.push('strawberry', 'orange');
console.log(fruits);
//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the beginning
fruits.unshift('strawberry', 'orange');
//shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

//note!! shift, unshift는 pop, push보다 훨씬 느림
//splice: remove an item by index position
fruits.push('strawberry', 'orange', 'peach');
console.log(fruits);
fruits.splice(1, 1); //1번 index부터 1개
console.log(fruits);
fruits.splice(1, 1, 'melon', 'watermelon'); //1번 index부터 1개 지우고 그 자리에 ~~넣어줘
console.log(fruits);

//combine two arrays
const fruits2 = ['pear', 'coconut'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
//find the index
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.includes('apple'));
console.log(fruits.includes('coconut'));
console.log(fruits.indexOf('coconut'));

//lastIndexOf
console.log(fruits);
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple')); //제일 첫 번째로 해당하는 값의 index 리턴
console.log(fruits.lastIndexOf('apple')); //제일 끝에 해당하는 값의 index 리턴