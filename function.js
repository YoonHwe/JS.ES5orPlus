//Function
//- fundamental building block in the program
//- subprogram can be used multiple times
//- performs a task or calculates a value

//1. Function declaration
//function name(param1, param2) { body... return; }
//one function === one thing
//naming: doSomething, command, verb
//e.g. createCardAndPoint -> createCard, createPoint
//function is object in JS

function printHello(message){
    console.log(message);
}
printHello("QWERTY");

//2. Parameters
//primitive parameters: passed by value
//object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const yoon = {name: 'yoon'};
changeName(yoon);
console.log(yoon);

//3. Default parameters(ES6)
function showMessage(message, from){
    console.log(`${message} by ${from}`);
}
showMessage("Hi") //from에 대한 값 없어서 undefined(default)로 나옴

//4. Rest parameters(ES6)
function printAll(...args){
    for(i = 0; i < args.length; i++){
        console.log(args[i]);
    }
    for(const arg of args){
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}//위 세 개는 동일한 출력
printAll('dream', 'coding', 'yoon');
//...이 나오면 REST이고, 배열 형태로 인자를 저장


//5. Local scope
let globalMessage = 'global';
function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
}
//함수 내부에서 전역 변수 접근 가능 but 지역 변수를 외부에서 접근은 불가
printMessage();

//6. Return a value
//따로 선언 안하면 return undefined 생략된 것임
function sum(a, b){
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${result}`);

//7. Early return, early exit
//조건에 맞지 않은 경우에는 빨리 리턴한 후 그 외에는 로직을 구성하는게 좋음
function upgradeUser(user){
    if(user.point > 10){
        console.log("good");
    }
};

//1. Function Expression
//a function declaration can be called earlier than it is defined(hoisted)
//a function expression is created when the execution reaches it
const print = function(){
    console.log('print');
} //anonymous function: 함수의 이름이 없는 것 (반대 말은 named function)
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//2. Callback function using function expression
//함수를 인자로 전달해서 상황에 따라 함수를 호출할 수 있도록 한다
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }
    else{
        printNo();
    }
}
const printYes = function(){
    console.log('yes');
}//anonymous function
const printNo = function print(){
    console.log('no');
}//named function
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//3. Arrow function
//always anonymous
// const simplePrint = function () {
//     console.log('simplePrint!');
// }
const simplePrint = () => console.log('simplePrint!');
// const add = function(a, b){
//     a+b;
// }
const add = () => a + b; //{}도 사용 가능

// IIFE: Immediately Invoked Function Expression(선언과 동시에 호출하는 함수)
(function hello(){
    console.log("IIFE");
})();
//함수를 함수처럼 실행하도록 하면 가능