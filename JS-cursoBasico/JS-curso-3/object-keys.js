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

function OfferSecurity(obj){
    const condition = Object.keys(obj);
    if (condition.includes("dependents")){
        console.log(`Hello ${obj.name}, we have a security offer to you.`)
    }
}

OfferSecurity(client)

/*console.log(Object.keys(client))
console.log(Object.values(client))
console.log(Object.entries(client))*/