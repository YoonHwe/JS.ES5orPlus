'use strict';
//Object-oriented programming
//class: template
//object: instance of a class
//Javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

//1. Class declaration
class Person{
    //constructor(생성자)
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const yoonHwe = new Person('yoonhwe', 26);
console.log(yoonHwe.name);
console.log(yoonHwe.age);
yoonHwe.speak();

//2. Getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }
    set age(value){
        // if(value < 0){
        //     throw Error('age cannot be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

//3. Fields(public, private)
//Too soon!
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields
class Experiment{
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. Static properties and methods
//Too soon!
class Article{
    static publisher = 'Dream coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher); 
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); //undefined
//Why? -> static은 object마다 할당되는 것이 아니라, class 자체에 붙어 있기 때문
console.log(Article.publisher);
Article.printPublisher();

//Static을 이용하면 메모리의 사용을 조금 더 줄여줄 수 있음

//5. Inheritance
//a way for one class to extend another class
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color!`);
    }
    getArea(){
        return this.width * this.height;
    }
}
class Rectangle extends Shape {}
class Triangle extends Shape {
    draw(){
        console.log("I'm triangle!");
        //함수 오버라이딩
    }
    getArea(){
        return this.width * this.height / 2;
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
//Rectangle 클래스를 이용하였으므로, Shape 클래스는 자동으로 포함됨
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

//6. Class checking: instanceOf - 앞에 것이 뒤에 것으로 만들어진 것인지
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); //true
console.log(triangle instanceof Object); //true, javascript에서 만든 모든 class는 자바스크립트의 Object를 상속한 것임

//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference