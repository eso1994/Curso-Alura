const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }

/*const objPersonagem2 = objPersonagem;

objPersonagem2.nome = "Gandalf, o cinzento"

console.log(objPersonagem.nome)
console.log(objPersonagem2.nome)*/

/*When we change objPersonagem2.nome we also change objPersonagem.nome!!
Because the 2º is just a reference not a copy
If we want to make a copy, we must use the Object.create method*/

const objPersonagem2 = Object.create(objPersonagem);
//objPersonagem2.nome = "Gandalf, o cinzento";

console.log(objPersonagem)
console.log(objPersonagem2)