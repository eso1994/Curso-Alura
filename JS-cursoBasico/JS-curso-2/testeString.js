var word = ["orange", "red", "yellow"]



console.log(word[0][3])


/*Com o método charAt() conseguimos acessar um caractere de uma string. Lembre-se que, por baixo dos panos, strings são arrays de caracteres, e em cada posição temos o caractere que compõe a string.*/

console.log("orange".charAt(3))




/*Outra função muito interessante é a substr() (substring), que permite que façamos a extração de parte de uma string. A função recebe como parâmetro o início e o fim da nova string a ser retirada da string principal. Na execução do código acima, temos como resultado a palavra Mergulhando. */

let frase= "Mergulhando em tecnologia."
console.log(frase.substr(0,11)) 






/*Com a função replace() temos a possibilidade de substituir parte de uma string por outra. Essa função recebe como parâmetros duas informações: a string que você quer substituir e a string que será colocada no lugar.Na execução deste exemplo, a string nomeusuario será substituída pelo conteúdo da variável nome. Como resultado da execução do método replace() teremos uma nova string.*/

let nome = "André";
let comunicacao = " Olá, sr. nomeusurario, informamos que a partir da presente data o senhor tem 50% de desconto em nossa loja.";
console.log(comunicacao.replace("nomeusurario",nome));




/*O método split() é bem interessante, pois com ele conseguimos quebrar uma string com base em caracteres separadores que vamos informar para o método como parâmetro. Quando trabalhamos com o split(), devemos nos atentar, pois a execução gerará como resultado um array de strings com os elementos que foram separados com base no separador desejado. Portanto a execução do código resulta em um array.*/

let linguagens = "JavaScript;Java;C#;PHP;Python;Go;Vb;SQL;C;C++";
let arrayLinguagens = linguagens.split(";");
console.log(arrayLinguagens)





/*O trim() remove os espaços em branco no início ou fim de uma string. Se em alguma situação precisarmos fazer uma verificação de que o usuário não digitou o login com espaços.*/

let login = "   andre@emailteste.com      ";
let loginSemEspaco = login.trim();
console.log(loginSemEspaco); 

/*A variável loginSemEspaco conterá uma nova string, sem os espaços em branco no início ou fim que podem ter sido digitados. Então, quando executado o método trim(), o resultado é uma nova string.

No JavaScript ainda temos algumas variações desta função como: trimEnd(),trimStart(),trimLeft() e trimRight()*/



