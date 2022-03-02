function Client(name, cpf, age, balance){
    this.name = name
    this.cpf = cpf
    this.age = age
    this.balance = balance
    this.deposit = function(value){
        this.balance += value
    }
}

function savingsClient(name, cpf, age, balance, savBalance){
    Client.call(this, name, cpf, age, balance)
    this.savBalance = savBalance
}

const Maria = new savingsClient("Maria", "122", "13", 100, 200)

console.log(Maria)

savingsClient.prototype.depositSavBalance = function (value){
    this.savBalance += value
}

Maria.depositSavBalance(100)

console.log(Maria.savBalance)