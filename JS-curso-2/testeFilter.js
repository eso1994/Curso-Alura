//Show failed student's names

const names = ['Luke', 'Obi-Wan', 'Anakin', 'Leia', 'Padmé']
const grades = [6, 8, 10, 4, 10]

const faileds = names.filter((_,index) => grades[index] < 7)

console.log(`Failed: ${faileds} `)