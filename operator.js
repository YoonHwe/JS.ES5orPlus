//1. String concatenation
console.log('my' + ' dog');
console.log('1' + 2);
console.log(`string literals: 
''''결과는'''''
1 + 2 = ${1 + 2}`); //줄바꿈, 따옴표 적용 가능

//2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

//3. Increment and decrement operators
let counter = 2;
const postIncrement = counter++;
const preIncrement = ++counter;
console.log(postIncrement, preIncrement);
const preDecrement = --counter;
const postDecrement = counter--;
console.log(preDecrement, postDecrement);

//4. Assingment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

//5. Comparioson operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

//6. Logical operators: ||(or), &&(and), !(not)
//or 연산자는 if문 순회 중 true 만나면 바로 중단됨
//따라서 or 연산자로 묶을 때, 단순한 놈을 앞에 두어야 한다. 
//Why? 앞에 무거운 연산을 하는 놈을 두면 순회하는데 오래 걸림(마지 못해 긴걸 하는 느낌으로 뒤에 놓아야 한다)

//7. Equality
const stringFive = '5';
const numberFive = 5
//loose equailty - '==' with type conversion(타입이 달라도 내용만 같으면 true)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
//strict equiality - '===' no type conversion(타입이 다르면 false)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

const yoon1 = {name: 'hwe'};
const yoon2 = {name: 'hwe'};
const yoon3 = yoon1;
console.log(yoon1 == yoon2); //false(각각 다른 레퍼런스가 저장되어 있음)
console.log(yoon1 === yoon2); //false(같은 타입도 아니지만 우선 다른 레퍼런스이므로)
console.log(yoon1 === yoon3); //true(같은 레퍼런스이면서 같은 타입)

//8. Conditional operaotrs: if
//if, else if, else
const name = 'coder';
if(name === 'coder'){
    console.log('1');
}
else if(name === 'yoon'){
    console.lof('2');
}
else{
    console.log('3');
}

//9. Ternary operaotr: ?
//condition ? value1 : value2;
console.log(name === 'yoon' ? 'yes' : 'no');

//10. Switch statement
const browser = 'IE'
switch(browser){
    case 'IE':
        console.log('1');
        break;
    case 'Chrome':
        console.log('2');
        break;
    case 'Firefox':
        console.log('3');
        break;
    default:
        console.log('4');
        break;
}

//11. While
let i = 3;
while(i > 0){
    console.log(`While: ${i}`);
    i--;
}

//do while
do{
    console.log(`do While ${i}`)
    i--;
}while(i > 0)

//12. nested loop
for(i = 0; i < 10; i++){
    for(j = 0; j < 10; j++){
        console.log(" ");
    }
}
//BIg-O가 n^2가 되어 CPU에 악영향...사용 자제
//break는 loop 종료, continue는 다음 순서로만 이동