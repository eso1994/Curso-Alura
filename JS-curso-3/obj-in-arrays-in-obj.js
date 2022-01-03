const client = {
    name: 'José',
    age: 64,
    cpf: '22345789021',
    email: 'pai_de_jesus@email.com',
    phone : ["04798893927", "11898116938"],
    dependents : [{
        name: "Jesus de Nazaré",
        kinship: "stepson",
        age: 1,
    }]
}

client.dependents.push({
    name:"Maria the virgin",
    kinship: "wife",
    age: 14,
}) 



const dependent = client.dependents.filter(dependent => dependent.age >= 13)

console.log(dependent[0].name)

console.log(client)