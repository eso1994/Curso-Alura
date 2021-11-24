const idadeStefany = 21;


function calculaProximaIdade(idade) {
    idade += 1;
    console.log(idade);
}

function calculaProximasIdades(idades) {
    for (let i = 0; i < idades.length; i += 1) {
        idades[i] += 1;
    }
    console.log(idades);
}

function calculaIdadesDaqui5Anos(idades) {
     for (let i = 0; i < idades.length; i += 1) {
        idades[i] += 5;
    }
    console.log(idades);
}

calculaProximaIdade(idadeStefany);

calculaProximasIdades(idadesAmigos);

calculaIdadesDaqui5Anos(idadesAmigos);