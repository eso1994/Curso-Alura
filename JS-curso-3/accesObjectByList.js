const client = {
    name: 'José',
    age: 40,
    cpf: '22345789021',
    email: 'pai_de_jesus@email.com'
}

const index = ['name', 'age', 'cpf', 'email']

console.log(client[index[0]])
//like a:
console.log(client['name'])

//this way we can use to repetition methods with objects

index.forEach(index => console.log(client[index]))