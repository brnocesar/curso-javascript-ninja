/*
1) Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
var sum = function calculateSum(x, y){
    return x + y;
};
/*
> sum(1,2);
3
> calculateSum(1, 2);
ReferenceError: calculateSum is not defined
*/

/*
2) Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
var a = 2, b = 3;
console.log('A soma de ' + a + ' e ' + b + ' é igual a ' + sum(a, b) + '.');

/*
3) Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
console.log('O nome da função que faz a soma é ' + sum.name + '.');

/*
4) Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
function showName(name){
    return name;
}

/*
5) Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
var varShowName = showName; //mais correto
//ou
var varShowName = function showName(name){
    return name;
}
/*
> var varShowName = showName(); //isso invoca a funcao, o objetivo eh passar o nome de uma funcao para a variavel para que eu possa usar essa funcao chamando pelo nome da variável
> varShowName(meu_nome);
TypeError: varShowName is not a function
> var varShowName = function showName();
SyntaxError: missing { before function body
*/

/*
6) Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
var meu_nome = 'Bruno Cesar';
console.log('A função ' + varShowName.name + ' retorna ' + varShowName(meu_nome) + '.');


/*
7)  (x) Crie uma função literal chamada `calculator`, que funcione assim:
    (x) A função deve receber um parâmetro que dirá qual operação matemática ela
        vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
    (x) Essa função deve retornar uma segunda função que fará o seguinte:
    (x) Essa segunda função deve receber dois parâmetros;
    (x) Esses dois parâmetros serão os operandos usados na operação matemática;
    (x) O retorno dessa segunda função é a operação matemática completa, com a frase:
        "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
    () Se o operador não for válido, retornar a frase:
        "Operação inválida."
*/
var x = 9, y = 3;
function calculator(operation){
    return function(x, y){
        var result;
        switch(operation){
            case '+':
                result = x + y;
                break;
            case '-':
                result = x - y;
                break;
            case '*':
                result = x * y;
                break;
            case '/':
                result = x / y;
                break;
            case '%':
                result = x % y;
                break;
            default:
                return 'Operação inválida.';
        }
        return 'Resultado da operação: ' + x + operation + y + ' = ' + result + '.';
    };
}

/*
8) Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
var sum = calculator('+');

/*
9) Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
console.log(sum(9,3));
/*
> sum(); //dessa forma nao estou passando os parametros da funcao que eh retornada pela funcao calculator
"Resultado da operação: undefined+undefined = NaN."
*/

/*
10) Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
var subtraction = calculator('-');
var multiplication = calculator('*');
var division = calculator('/');
var mod = calculator('%');

/*
11) Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
console.log(subtraction(9,3));
console.log(multiplication(9,3));
console.log(division(9,3));
console.log(mod(9,3));
