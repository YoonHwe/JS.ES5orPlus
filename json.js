//JSON
//JavaScript Object Notation

//1. Object to JSON
//stringify
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name:  'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'yoonHwe' : value;
});
console.log(json);

console.clear();
//2. JSON to Object
//parse
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); //이것은 JSON을 통해 함수가 전달되지 않으므로, 오류 발생하는 것

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());


//유용한 사이트
//JSON Diff: 
//JSON Beutifier: 포맷 깨지는 것 수정
//JSON Parser: JSON 형태를 object로 볼 수 있음
//JSON Validator: JSON 형태에 대한 에러를 포착할 수 있음