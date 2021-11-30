//add 1 point for all the student's grades

const grades = [10, 9, 7, 6]

const newGrades = grades.map( grades => grades >= 10 ? grades : ++grades)

console.log(newGrades)

//standardize the formatting by leaving all names in capital letters

let names = ['Ana JULIA', 'joAo ViCtor', 'CAIo cesaR', 'Otavio Agusto']

let upNames = names.map(names => names.toUpperCase())

console.log(upNames)