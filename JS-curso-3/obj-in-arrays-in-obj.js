const client = {
    name: 'José',
    age: 63,
    cpf: '22345789021',
    email: 'pai_de_jesus@email.com',
    phone : ["04798893927", "11898116938"],
    dependents : [{
        name: "Jesus de Nazaré",
        kinship: "stepson",
        birthAge: 0000,
    }]
}

client.dependents.push({
    name:"Maria the virgin",
    kinship: "wife",
    birthAge: -0013,
}) 



const kid = client.dependents.filter(dependent => dependent.birthAge >= -0014)

console.log(kid[0].name)