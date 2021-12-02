const client = {
    name: 'José',
    age: 63,
    cpf: '22345789021',
    email: 'pai_de_jesus@email.com',
    phone : ["04798893927", "11898116938"],
    dependents : [{
        name: "Jesus de Nazaré",
        kinship: "stepson",
        birthAge: 0,
    }, {
        name:"Maria the virgin",
        kinship: "wife",
        birthAge: -13,
    }],
    balance: 100,
    deposit: function(value){
        this.balance += value;
    }
}

console.log(client.balance)
client.deposit(50)
console.log(client.balance)