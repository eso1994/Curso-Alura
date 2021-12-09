class User {
    constructor(name, cpf){
        this.name = name,
        this._cpf = cpf
    }
    get cpf(){
       return this._cpf
    }
}


const user2231 = new User("José", '04798893928')


//user2231.cpf = '123128378'

console.log(user2231.cpf)

//dessa maneira reservamos o cpf apenas para leitura, sem correr o risco de alterar um dado tão importante