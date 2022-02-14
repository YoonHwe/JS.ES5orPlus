<h1>자바스크립트 기초 강의(ES5+)</h1>

<h2> <2강> 2022/2/12 </h2>

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

<3강> - Variable
let은 ES6에서 추가되었음.

global 변수는 항상 메모리에 탑재되어 있으므로, 가능하면 덜 활용하는 것이 좋음
var은 값을 선언하기도 전에 사용할 수 있었음 - hoisting(move declaration from bottom to top)
또한 var은 {} 블록을 무시하여 내부 작성을 인식 못함.

const(constance): 가리키는 포인터가 잠겨 있어 값을 선언함과 동시에 할당하면 다시 변경할 수 없음
(장) 
security(보안성) - 외부인이 변수를 변경하는 것을 방지
thread safety - 어플리케이션 실행될 때, 한 가지 프로세스가 실행이 되고, 그 프로세스 내에서는 여러 개의 thread가 동시에 돌아가면서 어플리케이션을 조금 더 빠르고 효율적으로 동작하게끔 한다. 이 경우에서, 각 thread는 어떤 변수에 대해 값을 변경할 수 있는데 이는 매우 위험함, 따라서 값이 변경되지 않게끔 함으로써 안전성을 높인다.

변수 타입
//primitive - 더 이상 작은 단위로 나누어질 수 없는 한 단위의 item
=> number, string, boolean, null, undefined, symbol
//object - primitive가 여러 개 묶어 한 단위로 관리할 수 있음
=> box container
//function
first-class function가 지원이 된다? => function도 변수에 할당이 가능하고 이에 함수의 parameter 및 return type으로도 올 수 있음


//number
infinity: 1/0, -1/0 등 0으로 나눠진 경우에 발생
NAN: 문자를 숫자로 나눈 경우에 발생

Javascript에서의 숫자 범위: -2^53 ~ 2^53
Bigint: 위의 범위를 초과하는 숫자로, 숫자 뒤에 n을 붙이면 type이 bigint로 나온다.

//string
`... ${}`를 활용해 변수의 내용을 text로 출력할 수 있음

//boolean
false: 0, null, undefined, NAN, ''
true: 이 외 다른 것

//null
텅 비어있는 empty 값

//undefined
선언은 되었지만, 값은 아직 지정되어 있지 않음

//symbol
주어진 string에 관계없이 고유한 식별자를 만들 때 사용
주어진 string에 따른 고유한 식별자를 만들려면 const 변수 = Symbol.for('내용')으로 선언

Dynamic typing: 프로그램이 동작할 때 할당된 값에 따라 type이 변경될 수 있음 => 빠르게 prototype 가능 but 메모 

//object
const yoon = {
    name: 'yoonhwe'
    age: '27'
}
yoon은 변경할 수 없지만, yoon.name과 yoon.age로 내용은 변경 가능