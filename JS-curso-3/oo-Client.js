export class Client {
    constructor(name, age){
        this. name = name,
        this.age = age,
        this._balance = 0
    }
    deposit(value){
        if(value <= 0) return;
        this._balance += value;
    }
    withdraw(value){
        if(value > this._balance){
             return console.log("Saldo indisponível.")
        } else {
        this._balance -= value;
        return console.log(`Você sacou ${value} reais`)
        }
    }
    balanceClient(){
        console.log(`Olá ${this.name}! Seu saldo atual é de ${this._balance} reais.`)
    }
    transfer(value, account){
        this.withdraw(value);
        account.deposit(value)
    }
}