class Boletim{
    constructor(bim1, bim2, bim3, notaExtra){
        this.bim1 = bim1,
        this.bim2 = bim2,
        this.bim3 = bim3,
        this.notaExtra = notaExtra
    }
    set notEx(nota) {
        this.notaExtra = nota
    }
    get media() {
        return parseInt((this.bim1 + this.bim2 + this.bim3 + this.notaExtra) /3)
    }
}

const aluno2231 = new Boletim(5, 5, 10, null)
// aluno2231.notEx = 4

console.log(aluno2231.media)


//outro exemplo


class Curso {
    constructor(materia, professor, duracao){
        this.materia = materia,
        this.professor = professor,
        this.duracao = duracao
    }
    get prof() {
        return this.professor
    }
}

let poo = new Curso('Programação orientada a objetos', 'Rafaella', '1 semestre')
console.log(poo.prof) //Rafaella



//outro exemplo


class Aluno {
    constructor(nome, curso, semestre){
        this.nome = nome,
        this.curso = curso,
        this.semestre = semestre
    }
    set nomeAluno(nomeAluno) {
        this.nome = nomeAluno
    }
}

let lucas = new Aluno('', 'Engenharia', 5)
lucas.nomeAluno = 'Lucas'
console.log(lucas.nome) //Lucas