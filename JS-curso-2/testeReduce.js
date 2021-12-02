//take average for each class
let jsClass = [5, 7, 8, 9, 5, 10];
let pythonClass = [6, 7, 8];
let javaClass = [8, 4, 5, 6, 7, 9.5];


function averageClasses(classes){
    const average = classes.reduce((accum, actu) => accum + actu, 0)
    return average/classes.length
}

console.log(`The JavaScript class average is: ${averageClasses(jsClass)}`)
console.log(`The Python class average is: ${averageClasses(pythonClass)}`)
console.log(`The Java class average is: ${averageClasses(javaClass)}`)