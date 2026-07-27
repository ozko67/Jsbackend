//1. Usando var (forma mais antiga)
var idade = 25;
var nome = 'maria';
var estudante = true;

//2. Usando let (introduzindo no ES6)
let idade = 25;
let nome  = "Maria";
let estudante = true;

//3. Usando const (para valores constante)
const PI = 3.1459;
const NOME_EMPRESA = "TechSolutions"

//Tipos de Dados de JavaScript
//1.Tipos primitivos 
Number
//representa tanto numeros inteiros quanto decimais.
let  idade = 25 ; // Numero inteiro
let altura = 1.75; // Numero decimal
let temperatura = -5; //Numero negativo 

String(Texto)
let nome = "João"
let sobrenome = "Silva"
let endereco = "Rua das Flores , 123"; // Templete string (ES6)

Boolean(Booleno)
// Representa valores logicos : verdadeiros (true )  ou falso (false)
let estudente = true;
let aprovado = false; 

undefined
//Representa um varialvel que foi declarada, mas não recebeu um valor 
let cidade; // valor e undefined 

null 
// Representa a ausência intencional de valor 
let telefone = null; //Explicitamente sem valor 

2.// Tipos complexos 
//Array (Vetor)
//Coleção ordenada de valores 
let frutas =["Maçã", "banana" , "laranja" ]
let numeros = [1,2,3,4,5]
let misturado = [1,"dois",true,null]

//Objetos (objeto)
let pessoa = {
    nome: "Ana",
    idade: 30 ,
    profissao: "Dessenvolvedora"
};

//Verificando o tipo de uma variavel

let idade = 25;
console.log(typeof idade);

let nome = "Maria";
console.log(typeof nome);

let ativo = true;
console.log (typeof ativo);

//Conversão entre Tipo 
// De String para Number
let numeroTexto = "42"
let numéro = Number(numeroTexto)
console.log(typeof numero); // "number"

let number1 = perseInt(numetoTexto);//Para inteiros
let number2 = parseFloat(numeroTexto);//"42"(Texto)

//De number para String 
let numero = 42;
let texto = String(numero);//"42"(texto)
//Alternativa
let texto2 = numero.toString(); // "42"(texto)
// Para boolean
let valor = 1;
let Boolean = Bolean(valor);//true
//Valores que convertem para false:
//0,"",null,undefined,NaN,false


// Exemplo Pratico:Calculadora de idade 

// declaração de variaveis 
const anoAtual = 2026;
let anoNascimento = 1990;
//calculando a idade 
let idade = anoAtual - AnoNascimento;
//exibindo o resultado 
console.log("Você tem " + idade + "anos")

console.log(`Você tem ${idade} anos` )

//Exemplo pratico:
// calculadora de media de notas
let nota1 = 8.8;
let nota2 = 7.8;
let nota3 = 9.8;

let média = (nota1 + nota2 + nota3) / 3;
console.log(`A média das notas é  ${média.toFixed(1)}

//Operadores de atribuição combinados
let pontos = 100;
console.log(`Pontuação inicial: ${pontos}`);
//O jogador ganhou 50 pontos
pontos += 50; // pontos = pontos + 50
console.log(`Pontuação após ganhar 50 pontos: ${pontos}`);
//O jogador perdeu 30 pontos
pontos -= 30; // pontos = pontos - 30
console.log(`Pontuação após perder 30 pontos: ${pontos}`);

