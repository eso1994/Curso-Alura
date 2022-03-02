const client = {
    name: 'José',
    age: 63,
    cpf: '22345789021',
    email: 'pai_de_jesus@email.com'
}

client.phone = ["04798893927", "11898116938"]

client.dependents = {
    name: "Jesus",
    kinship: "stepson",
    birthDate: "25/12/0000"
}

client.dependents.name = "Jesus de Nazaré"

console.log(client.dependents.name)