//show the array's list and yours index
let list = [100, 200, 300, 400, 500, 600]

for (let i = 0; i < list.length; i++) {
    console.log(i, list[i])
}

//add elements value and divide by number of list elements
var schoolGrades = [6, 8.5, 8, 9.5]
var average = 0;

for (let i = 0; i < schoolGrades.length; i++){
    average += schoolGrades[i];
}

average /= schoolGrades.length;

console.log(average)

//using 'for' in three dimensions array
const classOneGrades = [6, 9, 7, 6];
const classTwoGrades = [6, 8, 10];
const classThreeGrades = [9, 9];

var allGrades = [classOneGrades, classTwoGrades, classThreeGrades];
var average = 0;

for (let i = 0; i < allGrades.length; i++){
    for (let key = 0; key < allGrades[i].length; key++){
        average += allGrades[i][key]/allGrades[i].length
    }
}
average /= allGrades.length

console.log(average)