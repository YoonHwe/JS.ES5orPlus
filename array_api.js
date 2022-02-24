//01. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join('');
    console.log(result);
    const result2 = fruits.join(' ');
    console.log(result2);
}

//02. make a string out of an array
{
    const fruits = 'apple, banana, orange, cherry';
    const result = fruits.split(',');
    console.log(result);
    const result2 = fruits.split(',', 2); //limit 지정
    console.log(result2);
}
//03. make this array look like this
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array); //배열 자체를 reverse하는 것임을 알 수 있음
}

//04. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const array2 = array.splice(0, 2);
    console.log(array); //splice는 배열 자체를 자르는 것을 알 수 있음
    console.log(array2);

    const newArray = [1, 2, 3, 4, 5];
    const newArray2 = newArray.slice(2, 4); //end의 숫자는 제외하고 나옴
    console.log(newArray); //slice는 배열 자체 수정하지 않음
    console.log(newArray2);
}

class Student {
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 10, true, 50),
    new Student('B', 20, false, 40),
    new Student('C', 30, true, 30),
    new Student('D', 40, false, 20),
    new Student('E', 50, true, 10),
];

// 05. find a student with the score 40
{
    // const result = students.find(function(value, index){
    //     return value.score == 40;
    // })
    const result = students.find((value, index) => value.score == 40);
    console.log(result);
}

//06. make an array of enrolled students
{
    const result = students.filter((value) => value.enrolled == true);
    console.log(result);
}

//07. make an array containing only the students' scores
{
    const scores = students.map((value) => value.score);//배열 안에 있는 요소 하나하나를 다른 것으로 변환해 줌
    console.log(scores); 
}

//08. check if there is a student with the score lower than 50
{
    const result = students.some((value) => value.score < 20); //some은 callback함수가 true인 것이 하나라도 있는지 없는지 확인해준다
    console.log(result);
    const result2 = students.every((value) => value.score < 50); //every는 callback함수가 모든 요소에서 true인지 아닌지 확인해준다
    console.log(result2);
}

//09. compute students' average score
{
    const result = students.reduce((prev, current) => {
        console.log(prev);
        console.log(current);
        return prev + current.score;
    }, 0); //배열에 있는 모든 값을 누적한다! initial value(0)부터 시작
    console.log(result / students.length);
}

//10. make a string containing all the scores
{
    const resultString = students.map((value) => value.score).join(' ');
    console.log(resultString);
}

//Bonus! do Q10 sorted in ascending order
{
    const resultString = students.map((value) => value.score).sort();
    console.log(resultString);
}