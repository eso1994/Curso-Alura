class Client {
    constructor (name, age, email, balance){
    this.name = name
    this.age =  age
    this.email = email
    this.balance = balance
    }
    deposit(value){
    this.balance += value
    }

    displayBalance(){
        console.log(this.balance)
    }
}

const jose = new Client ("José", "63", "jesusDad@email.com", 100)

console.log(jose)

jose.deposit(150)

jose.displayBalance()

console.log(jose)

class Developer extends Client {
    constructor(name, age, email, balance, language){
        super(name, age, email, balance)
        this.language = language
    }
}

const jesus = new Developer("Jesus", "13", "devJude@email.com", 100000, "JavaScript")

console.log(jesus)

jesus.deposit(444)

jesus.displayBalance()

console.log(jesus)