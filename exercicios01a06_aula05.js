//1) Crie uma variável mesmoNome que verifica se nomeDoFulano é igual a nomeDoBeltrano;
nomeDoFulano = "Felipi"
nomeDoBeltrano = "João"

mesmoNome = (nomeDoFulano == nomeDoBeltrano)

console.log(mesmoNome)

//2) Crie uma variável maiorDeIdade que verifica se idade é de um adulto;

idade = 19
maiorDeIdade = (idade >= 18)

apresentacaoJoao = nomeDoBeltrano + " tem " + idade + " anos. "

console.log(apresentacaoJoao)

//Crie uma variável valorComJuros que calcula o valor de um boleto acrescido de 10% de juros por atraso;

boleto = 100.00
valorComJuros = boleto * 1.1

console.log(valorComJuros.toFixed(2))

//Faça a representação da fórmula de média aritmética, considerando um conjunto de elementos com 5 elementos nomeados como item1, item2, item3, item4 e item5;
item1 = 2
item2 = 6
item3 = 5
item4 = 7
item5 = 2

mediaAritmetica = (item1 + item2 + item3 + item4) / item5

console.log(mediaAritmetica.toFixed(2))

//5) O lucro bruto de uma empresa é representado pela receita líquida de vendas menos o custo dos produtos vendidos. A margem bruta de uma empresa é calculada pela divisão do lucro bruto pela receita líquida de vendas. Faça a representação da fórmula da margem bruta, multiplicando o resultado final por 100 para obter o valor percentual;

receitaLqdVendas = 1524.45
custoProdVendidos = 548.13

lucroBruto = receitaLqdVendas - custoProdVendidos
margemBruta = lucroBruto / receitaLqdVendas
valorPercentual = margemBruta * 100

console.log(lucroBruto.toFixed(2))
console.log(margemBruta.toFixed(2))
console.log(valorPercentual.toFixed(2))


//Exercicio 06

saldo1 = 1000.00
calca = 99.90
salario = 2500.00
caridade = 0.10

saldo2 = saldo1 - calca + salario - caridade

arCondicionado = saldo2 * 0.25

divida = (saldo2 - arCondicionado) / 2

saldoAtual = saldo2 - divida


console.log(saldo2.toFixed(2))
console.log(arCondicionado)
console.log(divida.toFixed(2))
console.log(saldoAtual.toFixed(2))