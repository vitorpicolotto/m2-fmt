/* Revisão JS */

//daclaração de variáveis//

    //var - descartado
    //let - essa é a que vamos usar (ver material no AVA) - valores que mudam
    //const - valores não mudam

//tipos de variáveis

    //number - ...
    //string - usada com "", palavras, etc
    //booleano - true, false



/* Concatenação */

const readline = require('readline')

const input = readline.createInterface(
    process.stdin,
    process.stdout
) //Criar uma variável input -igual a rl da biblioteca- (porque vamos receber input de dados do terminal), estamos pegando os processos de entrada (stdin) e saida de dados (stdout) do terminal e armazenando na variável. Conseguiremos fazer pergbuntas ao terminal, ter respostas e add na var. PROCESS é uma variável global, não precisa declarar em outro lugar.

    // let nome = "";
    // let sobrenome = ""

    // input.question("Qual é o seu nome?", (nomeDigitado) => {
    //     nome = nomeDigitado; 

    //     input.question("Qual é seu sobrenome?", (sobrenomeDigitado) =>{
    //         sobrenome = sobrenomeDigitado;
    //         console.log(nomeDigitado + " " + sobrenomeDigitado);
    //         input.close()
    //     })
        
    // }) //input.close encerra a entrada de dados no terminal


//Calcular IMC

    let peso = 0;
    let altura = 0;

    input.question("Qual o seu peso?", (pesoDigitado)=>{
        peso = parseFloat(pesoDigitado);

        input.question("Qual é a sua altura?", (alturaDigitada) =>{
            altura = parseFloat(alturaDigitada);

            const resultado = peso / (altura*altura)

            if (resultado < 18.5){
                console.log(resultado.toFixed(2) + " = Abaixo do peso normal")
            } else if (resultado >= 18.5 && resultado < 25){
                console.log(resultado.toFixed(2) + " = Peso normal")
            } else if (resultado >= 25 && resultado < 30){
                console.log(resultado.toFixed(2) + " = Acima do peso normal")
            } else {
                console.log(resultado.toFixed(2) + " = Obeso")
            }

            console.log(resultado.toFixed(2))

            input.close()
        })
    })

//Comportamento de um dado

const numeroAleatorio = Math.random()*6 //gerar um numero aleatório entre 0 e 6 
const numeroFinal = Math.ceil(numeroAleatorio); //arredonda o valor pra cima com o .ceil. Poderia usar com o +1.

console.log(numeroFinal)


