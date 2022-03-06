<h1>자바스크립트 기초 강의(ES5+)</h1>

<!--  -->
<h2 style="color: orange;"> 2강: async/defer (2022/2/12) </h2>

<ul>
<li>Web API(Application Programming Interface): 브라우저가 제공하는(이해할 수 있는) 함수</li>

<li>자바스크립트 공식 사이트: ecma-international.org (대체 ==> developer.mozilla.org)</li>

<li>js파일 언제 참조하냐...
'head'에 포함시키기 - (단) js파일의 size가 큰 경우 페이지 로드에 시간이 오래 걸림
'body'에 포함시키기 - (단) 웹사이트가 js 의존적이라면(사용자가 js가 늦게 온다면 사이트 보는데 지장이 있는경우)... 문제 발생</li>

<li>async: js 파일의 다운로드 및 실행을 HTML parsing과 병렬으로 가져간다
(장) 다운로드 시간 절약
(단) js가 html이 모두 다운로드 되어있지 않은 상태에서 실행되어 querySelector와 같은 기능처럼 필요한 요소를 다운 받지 못해 js 파일을 실행하는 데에 문제가 발생할 수 있다.</li>

<li>defer: js 파일의 다운로드만을 HTML parsing과 병렬으로 가져간다. 실행은 parsing이 완료된 이후에 진행... async의 장점은 최대한 가져오고 단점은 최대한 줄인 방식

[ 따라서 head 안에 defer을 쓰는 방식이 best! ]</li>
<li>* 'use strict';
자바스크립트는 상당히 유연한 언어... 따라서 때로는 선언되지 않은 변수를 할당하는 등 개발자의 실수를 많이 허용하기도 함
=> 'use strict'를 통해 선언되지 않은 변수를 쓰는 등의 오류를 포착하자</li>
</ul>

<!--  -->
<h2> 3강: Variable (2022/2/12) </h2>
<ul>
<li>let은 ES6에서 추가되었음.

<li>global 변수는 항상 메모리에 탑재되어 있으므로, 가능하면 덜 활용하는 것이 좋음
var은 값을 선언하기도 전에 사용할 수 있었음 - hoisting(move declaration from bottom to top)
또한 var은 {} 블록을 무시하여 내부 작성을 인식 못함.

<li>const(constance): 가리키는 포인터가 잠겨 있어 값을 선언함과 동시에 할당하면 다시 변경할 수 없음
(장) 
security(보안성) - 외부인이 변수를 변경하는 것을 방지
thread safety - 어플리케이션 실행될 때, 한 가지 프로세스가 실행이 되고, 그 프로세스 내에서는 여러 개의 thread가 동시에 돌아가면서 어플리케이션을 조금 더 빠르고 효율적으로 동작하게끔 한다. 이 경우에서, 각 thread는 어떤 변수에 대해 값을 변경할 수 있는데 이는 매우 위험함, 따라서 값이 변경되지 않게끔 함으로써 안전성을 높인다.
</ul>
<ul>변수 타입
<li>//primitive - 더 이상 작은 단위로 나누어질 수 없는 한 단위의 item
=> number, string, boolean, null, undefined, symbol
<li>//object - primitive가 여러 개 묶어 한 단위로 관리할 수 있음
=> box container
<li>//function
first-class function가 지원이 된다? => function도 변수에 할당이 가능하고 이에 함수의 parameter 및 return type으로도 올 수 있음


<li>//number
infinity: 1/0, -1/0 등 0으로 나눠진 경우에 발생
NAN: 문자를 숫자로 나눈 경우에 발생

Javascript에서의 숫자 범위: -2^53 ~ 2^53
Bigint: 위의 범위를 초과하는 숫자로, 숫자 뒤에 n을 붙이면 type이 bigint로 나온다.

<li>//string
`... ${}`를 활용해 변수의 내용을 text로 출력할 수 있음

<li>//boolean
false: 0, null, undefined, NAN, ''
true: 이 외 다른 것

<li>//null
텅 비어있는 empty 값

<li>//undefined
선언은 되었지만, 값은 아직 지정되어 있지 않음

<li>//symbol
주어진 string에 관계없이 고유한 식별자를 만들 때 사용
주어진 string에 따른 고유한 식별자를 만들려면 const 변수 = Symbol.for('내용')으로 선언

Dynamic typing: 프로그램이 동작할 때 할당된 값에 따라 type이 변경될 수 있음 => 빠르게 prototype 가능 but 메모 

<li>//object
const yoon = {
    name: 'yoonhwe'
    age: '27'
}
yoon은 변경할 수 없지만, yoon.name과 yoon.age로 내용은 변경 가능 
=> yoon을 가리키는 pointer가 잠긴 것(constance), 나머지 멤버는 접근 가능</li>

</ul>

<li>Immutable data type(primitive types) VS Mutable data type(object)</li>

<!--  -->
<h2> 4강: 연산 (2022/2/14) </h2>
<ul>
<li>1. String - 줄바꿈, 따옴표 적용 가능</li>
<li>2. Numeric - 덧셈, 뺄셈, 나눗셈, 곱셈, 나머지, 거듭제곱</li>
<li>3. Increment & Decrement - 전위, 후위</li>
<li>4. 변수 assignment</li>
<li>5. Comparison - <, >, == 를 이용해 true, false 리턴</li>
<li>6. Logic - or(||), and(&&), not(!)</li>
<li>7. Equal - == vs ===
==: with type conversion(참조 다르면 false, 참조 같고 내용이 같다으면 true)
===: no type conversion(내용 같아도 타입 다르면 false)
</li>
<li>8. Conditional - if</li>
<li>9. Ternary operator: ?
조건 ? 출력1 : 출력2
</li>
<li>10. Switch</li>
<li>11. While / do While</li>
<li>12. loop(nested는 주의)</li>
</ul>

<!--  -->
<h2> 5강: 함수의 선언과 표현 (2022/2/14) </h2>
<ul>
<li>1. 함수 선언</li>
<li>2. 인자(parameter) - object도 올 수 있음</li>
<li>3. Default 인자 - 만약 인자에 대한 정보 부족해서 default가 오면 undefined로 온다</li>
<li>4. Rest 인자 - '...'은 여러 인자 온다는 것
for(i = 0; i < args.length; i++){
    console.log(args[i]);
}
for(const arg of args){
    console.log(arg);
}
args.forEach((arg) => console.log(arg));
위 세 개는 동일한 기능
</li>
<li>5. 변수 범위 - 함수 내부에서 전역 변수는 접근 가능하지만, 지역 변수를 외부에서 접근할 수는 없음</li>
<li>6. return - 따로 선언안하면 return undefined</li>
<li>7. Early return, early exit! - 조건문 사용 시, 간단한 로직부터 앞에 넣자
</li>
<li>8. 함수 표현 - anonymous(함수 이름 없는 것) vs named(함수 이름 있는 것) </li>
<li>9. Callback function - 함수를 인자로 전달해서 상황에 따라 함수를 호출</li>
<li>10. Arrow function
const simplePrint = function(){
    console.log('simplePrint!');
}
======>
const simplePrint = () => { console.log('simplePrint'); }
</li>

</ul>

<!--  -->
<h2> 6강: 클래스와 오브젝트 (2022/2/15) </h2>
<ul>
<li>
1. 클래스 선언
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
</li>
<li>2. Getter / Setter - 인자의 값이 지정된 범위가 아니라면, 가져와서(get) 범위 내로 재설정(set)</li>
<li>3. public / private 접근 </li>
<li>4. static - object 마다 할당되는 것이 아니라, class 자체에 붙어 있음 => 메모리의 사용 줄일 수 있음</li>
<li>5. 상속 - 자식 클래스를 이용하여 선언하였을 때, 부모 클래스는 자동으로 포함됨</li>
<li>6. instanceof - 생성자의 prototype 속성이 객체의 프로토타입 체인 어딘가 존재하는지 판단</li>
</ul>