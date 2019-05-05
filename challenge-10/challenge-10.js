/*
		### wrapper objects ###
	 - valores primitivos NAO sao objetos, são valores exatamente como apresentados
	 ex: números, string, boolean, null, undefined
	 - um objeto (em JavaScript) é algo que tem propriedades e métodos
	 ex: arrays, funções...
	> var a = 'bruno'
	undefined
	> a
	'bruno' // variavel primitiva do tipo string
	> var b = new String('bruno')
	undefined
	> b
	[String: 'bruno'] // objeto do tipo string
	> a == b
	true
	> a === b
	false
	> name.valueOf() // propriedada que retorna o valor real desse objeto
	'bruno'
	> a === b.valueOf()
	true
	> a.length
	5
	> b.length
	5
		Porque a variável primitiva a do tipo string tem o método length (linha 22)?
		É ai que entram os construtores (wrapper objects), que são objetos ou funções que criam novos objetos.
		Isso é o que JS faz por baixo dos panos.

		Quando o operador new não é utlizado, ocorre uma conversão de tipo de dados:
	> var palavra = String(10)
	undefined
	> palavra
	'10'
	> var numero = Number('15')
	undefined
	> numero
	15
	> numero + 10
	25
	> palavra + 10
	'1010'
	> var zero = Boolean(0)
	undefined
	> zero
	false
	> var vazio = Boolean({})
	undefined
	> vazio
	true
	> !!{}
	true
	> !!0
	false
	> var numeravra = Number('azul')
	undefined
	> numeravra
	NaN
	> var numeravra = Number(azul)
	ReferenceError: azul is not defined

		Para testar tipos de valores primitivos, podemos usar o operador unário typeof
	> typeof true
	'boolean'
	> typeof 10
	'number'
	> typeof NaN
	'number'
	> typeof 'bruno'
	'string'
	> typeof undefined
	'undefined'
	> typeof function(){};
	'function'
	> typeof null
	'object'
	> typeof []
	'object'
	> typeof {}
	'object'
*/

(function(){
	console.log("\n\n\n\t\t ### inicio (1) ###")
	/*
	1)	Crie uma IIFE que envolva todo esse arquivo (inclusive esse comentário),
		e faça a indentação correta.
	*/

	/*
	2)	Sem alterar os códigos nos `console.log` abaixo, faça com que o retorno
		deles seja "true", usando os Wrapper Objects como "conversores" nos valores
		das variáveis. Analise o que está sendo impresso no console para saber como
		resolver o problema corretamente.
	*/
	var five = Number('5'); // adicionado
	console.log( five + ' é número?', typeof five === 'number' );

	var concat = String(10) + String(10); // adicionado
	console.log( '"' + concat + '" é uma string? E é igual a "1010"?', typeof concat === 'string' );

	console.log("\t\t ### fim (1) ###\n\n\t\t ### inicio (2) ###");
	/*
	3)	Voltando ao exemplo da calculadora, vamos utilizar mais uma abordagem
		funcional, mas dessa vez, separando algumas responsabilidades.
		(x) Primeiro, crie um objeto chamado `operation` que terá as propriedades:
		'+', '-', '*', '/' e '%'.
		(x) Cada propriedade vai receber uma função (logo, elas serão métodos), e essa
		função receberá dois parâmetros e retornará a operação referente à sua
		propriedade, usando os valores passados por parâmetro.
	*/
	var operation = {
		'+' : function(a, b){
			return a + b;
		},
		'-': function(a, b){
			return a - b;
		},
		'*': function(a, b){
			return a * b;
		},
		'/': function(a, b){
			return a / b;
		},
		'%': function(a, b){
			return a % b;
		}
	};
	/*
	ou o objeto poderia ter sido criado da seguinte forma:
	var operation = new Object();
	operation.'+' = function(a, b){
		return a + b;
	};
	...
	operation.'%' = function(a, b){
		return a % b;
	};
	*/

	/*
	4)	Crie uma função chamada `isOperatorValid`, que receberá um operador por
		parâmetro.
		- Essa função será responsável por verificar se o operador passado por
		parâmetro a ela é válido, ou seja, se ele é igual a '+', '-', '*', '/' ou
		'%'.
		- Se for igual a qualquer um desses, ela deverá retornar "true".
		Caso contrário, "false".
		- O desafio é fazer o retorno sem usar "if" ou "switch".
	*/
	function isOperatorValid( operator ){
		return !!operation[operator]; // retorna o valor booleano referente
//		return operation[operator] !== undefined; 
//		return ( typeof operator === '+' || typeof operator === '-' || typeof operator === '*' || typeof operator === '/' || typeof operator === '%' );
	}

	/*
	5)	Agora vamos criar a calculadora.
		(x) Crie uma função chamada `calculator`, que receberá como parâmetro um
		operador;
		(x) Se o operador não for válido, a função deve retornar "false";
		(x) Se o operador for válido, retornar uma segunda função que receberá dois
		parâmetros;
		(x) Se algum dos parâmetros não for um número, retornar "false";
		(x) Senão, retornar o método do objeto "operation" criado acima, baseado no
		operador passado para a função "calculator", e passando para esse método
		os dois parâmetros da função de retorno de "calculator".
	*/
	function calculator( operator ){
		if ( !isOperatorValid(operator) ){
//			console.log('\tcalculator -> nao eh operacao valida');
			return false;
		}
		return function( a, b ){
			if( typeof a !== 'number' || typeof b !== 'number' ){
//				console.log('\tcalculator -> nao sao numeros validos');
				return false;
			}
//			console.log('\tcalculator -> operacao valida');
			return operation[ operator ](a, b); // o formato de array DEVE ser utilizado, pois os operadores são strings
		}
	}

	/*
	6)	Crie uma função chamada "showOperationMessage" que recebe três parâmetros:
		(x) o operador, o primeiro número e o segundo número. O retorno da função
		deve ser a frase:
		'A operação [NUMBER1] [OPERATOR] [NUMBER2] =';
		Essa função mostrará a mensagem da operação que criaremos mais abaixo.
	*/
	function showOperationMessage( operator, a, b ){
		return 'A operação ' + a + ' ' + operator + ' ' + b + ' =';
	}

	/*
	7)	Crie uma função chamada "showErrorMessage" que recebe um parâmetro: o
		operador da operação cálculo, quando a operação não for válida.
		Essa função deverá retornar a frase:
		'Operação "[OPERATOR]" não permitida!'
	*/
	function showErrorMessage( operator ){
		return 'Operação "' + operator + '" não permitida!';
	}



	console.log("\t\t ### fim (2) ###\n\n\t\t ### inicio (3) ###");
	/*
	8)	Nossa calculadora está pronta! Agora vamos testá-la:
		PASSO 1:
		(x) Declare 3 variáveis: "number1" e "number2", iniciando com valor zero, e
		"operationSignal", sem valor por enquanto.
	*/
	var number1 = 0;
	var number2 = 0;
	var operationSignal = '';

	/*
		PASSO 2:
		(x) Atribua à variável operationSignal o operador de soma, e (x) declare uma
		variável chamada "sum", que receba a função "calculator", (x) passando por
		parâmetro a variável que recebeu o sinal da operação.
	*/
	operationSignal = '+'; // tem que ser como string
//	operationSignal = String(+); // nao funciona
	
	var sum = calculator(operationSignal);

	/*
		PASSO 3:
		(x) "sum" agora é uma função, e, se o sinal correto não foi passado para a
		função "calculator", "sum" será false. Certifique-se de que "sum" não é
		"false", e então atribua às variáveis "number1" e "number2", dois números
		que serão os operandos da operação de soma.
		(x) Após isso, mostre no console o resultado da operação, passando dois
		parâmetros para o método "log" de "console":
		(x) O primeiro será a mensagem da operação (usando a função criada acima);
		(x) O segundo, a função de soma, passando os dois operandos.
		() Se "sum" for "false", mostrar no console a mensagem de erro.
	*/

//	console.log('\tsoma');
	if( sum ){
		number1 = 1;
		number2 = 2;
		console.log( showOperationMessage( operationSignal, number1, number2 ), sum( number1, number2 ) );
	}
	else {
		console.log( showErrorMessage( operationSignal ) );
	}

	console.log("\t\t ### fim (3) ###\n\n\t\t ### inicio (4) ###");
	/*
	Repita desde o "PASSO 2" com as operações de subtração, multiplicação,
	divisão e resto. Crie variáveis com os nomes "subtraction",
	"multiplication", "division" e "mod".
	*/

	//subtração
	operationSignal = '-';
	var subtraction = calculator(operationSignal);
//	console.log('\tsubtracao');
	if( subtraction ){
		number1 = 6;
		number2 = 3;
		console.log( showOperationMessage( operationSignal, number1, number2 ), subtraction( number1, number2 ) );
	}
	else {
		console.log( showErrorMessage( operationSignal ) );
	}

	//multiplicação
	operationSignal = '*';
	var multiplication = calculator(operationSignal);
//	console.log('\tmultiplicacao');
	if( multiplication ){
		number1 = 1;
		number2 = 3;
		console.log( showOperationMessage( operationSignal, number1, number2 ), multiplication( number1, number2 ) );
	}
	else {
		console.log( showErrorMessage( operationSignal ) );
	}

	//divisão
	operationSignal = '/';
	var division = calculator(operationSignal);
//	console.log('\tdivisao');
	if( division ){
		number1 = 9;
		number2 = 3;
		console.log( showOperationMessage( operationSignal, number1, number2 ), division( number1, number2 ) );
	}
	else {
		console.log( showErrorMessage( operationSignal ) );
	}

	//resto de divisão
	operationSignal = '%';
	var mod = calculator(operationSignal);
//	console.log('\tresto');
	if( mod ){
		number1 = 147;
		number2 = 9;
		console.log( showOperationMessage( operationSignal, number1, number2 ), mod( number1, number2 ) );
	}
	else {
		console.log( showErrorMessage( operationSignal ) );
	}


	/*
	Repita o PASSO 2 novamente, mas passando um operador inválido, para ver se
	a mensagem de erro será mostrada no console.
	*/
	// ?
	console.log("\t\t ### fim (4) ###");
})();
