/*
Crie uma IIFE que envolva todo o código desse arquivo. Faça também a
indentação correta do código, para ficar dentro da IIFE.
*/

(function(){
	console.log("\n\n\n\t\t ### inicio (1) ###")
	/*
	1)	Analise as funções abaixo (`myFunction`, `myFunction2` e `myFunction3`, e
		ajuste o posicionamento das variáveis e funções internas, para que os códigos
		dentro de `console.log` que estão retornando `undefined` retornem o valor
		correto da variável ou função chamada.

		function myFunction() {
		console.log( 'Na função `myFunction`, o primeiro número é', number1 );
		console.log( 'Na função `myFunction`, o segundo número é', number2 );
		var number1 = 10;
		return number1 + number2;
		var number2 = 20;
		}

		function myFunction2() {
		console.log( 'A soma de 10 e 20 é igual a', sum ? sum() : undefined );
		var sum = function sum() {
		    return number1 + number2;
		};
		var number1 = 10;
		var number2 = 20;
		return sum();
		}

		function myFunction3() {
		console.log( 'A soma de 40 e 50 é igual a', sum() );
		var number2 = 50;
		console.log( 'Na função myFunction3, number1 é igual a', number1 );
		var number1 = 40;
		return sum();
		function sum() {
		    return number1 + number2;
		};
		}
	*/
	function myFunction() {
		var number1 = 10;
		var number2 = 20;
		console.log( 'Na função `myFunction`, o primeiro número é', number1 );
		console.log( 'Na função `myFunction`, o segundo número é', number2 );
		return number1 + number2;
	}
	myFunction();

	function myFunction2() {
		var number1 = 10;
		var number2 = 20;
		var sum = function sum() {
		    return number1 + number2;
		};
		console.log( 'A soma de 10 e 20 é igual a', sum ? sum() : undefined );
		return sum();
	}
	myFunction2();

	function myFunction3() {
		var number1 = 40;
		var number2 = 50;
		function sum() {
		    return number1 + number2;
		}
		console.log( 'A soma de 40 e 50 é igual a', sum() );
		console.log( 'Na função myFunction3, number1 é igual a', number1 );
		return sum();
	}
	myFunction3();
	console.log("\t\t ### fim (1) ###\n\n\t\t ### inicio (2) ###");

	/*
	2)	No desafio anterior criamos uma calculadora, usando uma estrutura funcional.
		Agora vamos criar uma outra calculadora, usando uma outra abordagem :D
		(x)	Crie uma função `calculator` que recebe dois valores (números)
			por parâmetro.
		(x)	Essa função deve retornar uma outra função, que recebe um parâmetro
			chamado `callback`.
		( )	Esse `callback` será uma função, que passaremos por parâmetro ao invocar
			o retorno de `calculator`.
		( )	O retorno dessa segunda função deve ser a função de `callback` passada
			por parâmetro, INVOCADA, e passando a ela por parâmetro os dois valores
			que foram passadas para a primeira função `calculator`.
	*/
	function calculator(x, y){
		return function(callback){
			return callback(x, y);
		};
	}

	/*
	3)	Declare uma variável chamada `sum`, e atribua a ela a função `calculator`,
		passando dois números por parâmetro.
	*/
	var sum = calculator(1, 2);

	/*
	4)	Sabemos que `sum` agora tem uma função atribuída a ela, que é o retorno de
		`calculator`. E essa função espera um parâmetro `callback`. O `callback`
		tem dois parãmetros disponíveis, que são os números que você acabou de passar
		para a chamada à `calculator` acima.
		- Mostre no console o retorno da invocação de `sum`, passando por parâmetro
		uma função anônima que irá retornar a soma dos dois números que essa função
		anônima tem como seus argumentos.
	*/
	console.log('O resultado da soma é:');
	console.log( sum(function(a, b){
		return a + b;
	}) );
	
	console.log("\t\t ### fim (2) ###\n\n\t\t ### inicio (3) ###");
	/*
	5)	Agora declare outra variáveis chamadas `subtraction`, `multiplication`,
		`division` e `mod`, e atribua à elas `calculator`, passando números
		diferentes para cada chamada.
	*/
	var subtraction = calculator(5, 2);
	var multiplication = calculator(1, 3);
	var division = calculator(9, 3);
	var mod = calculator(147, 9);

	/*
	6)	Mostre as variáveis acima no `console` (uma chamada de console por variável),
		criando a função de `callback` que faz o cálculo para subração, multiplicação,
		divisão e módulo (resto de divisão), conforme a função utilizada.
		As suas respostas devem estar abaixo dos `console.log` referentes à cada
		chamada.
	*/
	console.log( 'O resultado da subtração é:' );
	console.log( subtraction(function(a, b){
		return a - b;
	}) );
	console.log( 'O resultado da multiplicação é:' );
	console.log( multiplication(function(a, b){
		return a * b;
	}) );
	console.log( 'O resultado da divisão é:' );
	console.log( division(function(a, b){
		return a / b;
	}) );
	console.log( 'O resto da divisão é:' );
	console.log( mod(function(a, b){
		return a % b;
	}) );
	console.log("\t\t ### fim (3) ###");
	
})();
