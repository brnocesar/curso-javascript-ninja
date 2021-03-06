# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
function funcao(x){
	if(x){
		return true;
	}
	else {
		return false;
	}
}

var isTruthy = funcao('alguma coisa');

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
is truthy = funcao(0);
is truthy = funcao(undefined);
is truthy = funcao(-0);
is truthy = funcao(null);
is truthy = funcao('');
is truthy = funcao("");
is truthy = funcao(NaN);
is truthy = funcao(false);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
is truthy = funcao(1);
is truthy = funcao(2);
is truthy = funcao([]);
is truthy = funcao('a');
is truthy = funcao('b');
is truthy = funcao({});
is truthy = funcao(' ');
is truthy = funcao(-1);
is truthy = funcao(-2);
is truthy = funcao(true);

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {marca: 'fiat', modelo: 'uno', placa: 'ABC-6666', ano: 1993, cor: 'azul', quantasPortas: 2, assentos: 5, quantidadePessoas: 0};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(novaCor){
	carro.cor = novaCor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){
	return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
	return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function(){
	return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function(){
	return 'Esse carro é um ' + carro.obterMarca() + ' ' + carro.obterModelo() + '.';
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.adicionarPessoa = function(pessoas){
	var lugaresVagos = carro.assentos - carro.quantidadePessoas;
	var tratamento;
	// testa se esta cheio
	if(lugaresVagos){
		if(pessoas > lugaresVagos){
			carro.quantidadePessoas = carro.assentos;
			tratamento = lugaresVagos == 1 ? 'pessoa' : 'pessoas';
			return 'Só cabem mais ' + lugaresVagos + ' ' + tratamento + '. Agora, o carro está lotado!';
		}
		else {
			carro.quantidadePessoas += pessoas;
			lugaresVagos = carro.assentos - carro.quantidadePessoas;
			tratamento = lugaresVagos == 1 ? 'pessoa' : 'pessoas';
			return 'Ainda tem lugar para ' + lugaresVagos + ' ' + tratamento + '!';
		}
	}
	return 'O carro já está lotado!';
} // esta funcao funciona se o numero de pessoa adicionadas no carro for POSITIVO


carro.tirarPessoa = function(pessoas){
	pessoas = pessoas > carro.quantidadePessoas ? carro.quantidadePessoas : pessoas;
	carro.quantidadePessoas -= pessoas;

	if(pessoas > 1){
		return 'Foram retiradas ' + pessoas + ' pessoas do carro. Sobraram ' + carro.quantidadePessoas + '!';
	}
	else {
		return 'Foi retirada ' + (pessoas ? 'uma' : 'nenhuma') + ' pessoa do carro. Sobraram ' + carro.quantidadePessoas + '!';
	}
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); // azul

// Mude a cor do carro para vermelho.
carro.mudaCor(vermelho);

// E agora, qual a cor do carro?
carro.obterCor(); // vermelho

// Mude a cor do carro para verde musgo.
carro.mudaCor(musgo);

// E agora, qual a cor do carro?
carro.obterCor(); // musgo

// Qual a marca e modelo do carro?
carro.obterMarcaModelo(); // 'Esse carro é um fiat uno.'

// Adicione 2 pessoas no carro.
carro.adicionarPessoa(2); // "Ainda tem lugar para 3 pessoas!"

// Adicione mais 4 pessoas no carro.
carro.adicionarPessoa(4); // "Só cabem mais 3 pessoas. Agora, o carro está lotado!"

// Faça o carro encher.
carro.adicionarPessoa(4); // "O carro já está lotado!"

// Tire 4 pessoas do carro.
carro.tirarPessoa(4); // 'Foram retiradas 4 pessoas do carro. Sobraram 1!'

// Adicione 10 pessoas no carro.
carro.adicionarPessoa(10); // "O carro já está lotado!"

// Quantas pessoas temos no carro?
carro.quantidadePessoas; // 5
```
