var classNames = ['João', 'Maria', 'José', 'Jesus', 'Maomé', 'Darth Vader']
var classPoints = [10, 8, 7, 9, 3, 10]

var classNamesPoints = [classNames, classPoints]

const mediaStudents = (student) => {
    if (classNames.includes(student)){
        let index = classNames.indexOf(student)
        return classNamesPoints[0][index] + ', sua média é ' + classNamesPoints[1][index]
    } else {
       return 'Aluno não cadastrado.'
    }
}

console.log(mediaStudents('Enzo Castro'))