const idadeStefany = 21;
const idadesAmigos = [idadeStefany, 20, 23, 18, 7];

function calculaProximaIdade(idade) {
    idade += 1;
    console.log(idade);
}

function calculaProximasIdades(idades) {
    for (let i = 0; i < idades.length; i += 1) {
        idades[i] += 1;
    }
    console.log(idades);
    for (let i = 0; i < idades.length; i++){
        idades[i]--;
    }
}

function calculaIdadesDaqui5Anos(idades) {
     for (let i = 0; i < idades.length; i += 1) {
        idades[i] += 5;
    }
    console.log(idades);
    for (let i = 0; i < idades.length; i++){
        idades[i] -= 5;
    }
}

calculaProximaIdade(idadeStefany);

calculaProximasIdades(idadesAmigos);

calculaIdadesDaqui5Anos(idadesAmigos);