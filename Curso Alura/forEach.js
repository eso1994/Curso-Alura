const grades = [6, 7, 5, 10]
var average = 0;

grades.forEach(grades => {
    average += grades;
})

average /= grades.length

console.log(average)