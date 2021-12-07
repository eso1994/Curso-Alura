function Client(name, cpf, age, balance){
    this.name = name
    this.cpf = cpf
    this.age = age
    this.balance = balance
    this.depositar = function(value){
        this.balance += value
    }
}

const José = new Client("José", "123456789", 63, 100)

console.log(José)