'use strict';

//Promise is a JavaScript object for asychronous operation.
//state: pending -> fulfilled or rejected
//Producer vs Consumer

//1. Producer
const promise = new Promise((resolve, reject) => {
    //시간이 꽤 소요되는 작업은 비동기적 처리를 위해 Promise 같은 처리를 해주는 것이 좋음
    //when new Promise is created, the executor runs automatically.
    console.log("doing something...");
    setTimeout(() => {
        // resolve('yoonhwe');
        reject(new Error('No Network'));
    }, 2000);
    // console.log(resolve);
    // console.log(reject);
})

//2. Consumer: then, catch, finally
//then: promise가 성공적으로 잘 수행되어 최종적으로 resolve라는 callback함수를 통해 return되는 값을 파라미터(value)로 받아오는 것
promise.then((value) => {
    console.log(value);
})
//catch: promise의 수행이 실패되었을 때
.catch(error => {
    console.log(error);
})
//finally: 성공 여부 상관없이 마지막에 수행됨
.finally(() => {
    console.log('finally')
});

//3. Promise chaining
const fetchNum = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNum.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));

//4. Error Handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('hen'), 1000);
    });
const getEgg = hen => 
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => egg`), 1000);
        setTimeout(() => reject(new Error(`error! ${hen} => egg`)), 1000);
    });
const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => fry`), 1000);
    });

getHen()
.then(hen => getEgg(hen))
.catch(error => {
    return 'bread';
})
.then(egg => cook(egg))
.then(meal => console.log(meal))
.catch(meal => console.log(meal));
//인자로 한 가지만 받아오는 경우 생략 가능
//다음 코드는 위의 코드와 동일한 기능
// getHen()
// .then(getEgg)
// .then(cook)
// .then(console.log);