const client = {
    name: 'José',
    age: 40,
    cpf: '22345789021',
    email: 'pai_de_jesus@email.com'
}

console.log(`Olá sr. ${client.name}. Sua idade é de ${client.age} anos e os 4 primeiros digitos de seu cpf são: ${client.cpf.substr(0,4)}`)