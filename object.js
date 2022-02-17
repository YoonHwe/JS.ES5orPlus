//Objects
//one of the JavaScript's data types
//a collection of related data and/or functionality
//Nearly all objects in JavaScript are instances of Object
//object = { key: value };
const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}
const yoon = {name: 'yoon', age: 26};
print(yoon);

//with JavaScript magic(dynamically typed language)
//can add properties later
yoon.hasJob = true;
print(yoon.hasJob);
//can delete properties later
delete yoon.hasJob;
console.log(yoon.hasJob);

//2. Computed properties
console.log(yoon.name);
console.log(yoon['name']); //key는 string type으로 지정해야 함
yoon['hasJob'] = true;
console.log(yoon.hasJob);

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(yoon, 'name');
printValue(yoon, 'age');

//3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 4};
const person3 = {name: 'dave', age: 8};
const person4 = new Person('Yoon', 26);
console.log(person4);

//4. Constructor function
function Person(name, age){
    this.name = name;
    this.age = age;
}

//5. in operator: property existence check(key in obj)
console.log('name' in person4);
console.log('age' in person4);
console.log('job' in person4);

//6. for..in vs for..of
//for (key in obj)
console.clear();
for( key in person4){
    console.log(key);
}
//for(value of iterable)
const array = [1,2,4,5];
for(value of array){
    console.log(value);
}

//7. Fun cloning
//Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'Yoon', age: '26'};
const user2 = user; //레퍼런스 가져와 쓰는 것(깊은 복사)
console.log(user2);
user2.age = '24'; //user도 바뀐다
console.log(user);

//old way
const user3 = {};
for(key in user){
    user3[key] = user[key];
}

//new way
const user4 = {};
Object.assign(user4, user); //얕은 복사
