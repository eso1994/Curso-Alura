const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido",
    magias: ["proteção", "cura"]
   }

   /*delete objPersonagem.aliado

   console.log(objPersonagem)

   delete objPersonagem["status"]

   console.log(objPersonagem)

   delete objPersonagem.aliado["nome"]

   console.log(objPersonagem)*/

   objPersonagem.magias.forEach(magia => console.log(magia))