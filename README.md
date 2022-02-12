자바스크립트 기초 강의(ES5+)

2022/2/12

Web API(Application Programming Interface): 브라우저가 제공하는(이해할 수 있는) 함수

자바스크립트 공식 사이트: ecma-international.org (대체 ==> developer.mozilla.org)

js파일 언제 참조하냐...
<head>에 포함시키기 - (단) js파일의 size가 큰 경우 페이지 로드에 시간이 오래 걸림
<body>에 포함시키기 - (단) 웹사이트가 js 의존적이라면(사용자가 js가 늦게 온다면 사이트 보는데 지장이 있는경우)... 문제 발생

async: js 파일의 다운로드 및 실행을 HTML parsing과 병렬으로 가져간다
(장) 다운로드 시간 절약
(단) js가 html이 모두 다운로드 되어있지 않은 상태에서 실행되어 querySelector와 같은 기능처럼 필요한 요소를 다운 받지 못해 js 파일을 실행하는 데에 문제가 발생할 수 있다.

defer: js 파일의 다운로드만을 HTML parsing과 병렬으로 가져간다. 실행은 parsing이 완료된 이후에 진행... async의 장점은 최대한 가져오고 단점은 최대한 줄인 방식

[ 따라서 head 안에 defer을 쓰는 방식이 best! ]

'use strict';
=>
자바스크립트는 상당히 유연한 언어... 따라서 때로는 선언되지 않은 변수를 할당하는 등 개발자의 실수를 많이 허용하기도 함
