const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

   /*delete objPersonagem.aliado

   console.log(objPersonagem)

   delete objPersonagem["status"]

   console.log(objPersonagem)*/

   delete objPersonagem.aliado["nome"]

   console.log(objPersonagem)