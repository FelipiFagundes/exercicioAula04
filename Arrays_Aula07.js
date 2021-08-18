alunos = ["João" , "Jose" , "Ana" , "Bia"]
notas = [[7.5,8.7] , [4.8,5.7] , [9.5,6.4] , [8.6,3.5]]

selecionado = 0
resultado = ""

nomeDoAluno = alunos[selecionado]
notasDoAluno = notas[selecionado]

nota1 = notasDoAluno[0]
nota2 = notasDoAluno[1]

media = (nota1 + nota2)/2

if (media >= 6.0){
 resultado = "Parabéns!"
}

else{
  resultado = "Tente mais uma vez!"
}

console.log(nomeDoAluno + ",")
console.log("Sua primeira nota foi " + nota1)
console.log("Sua segunda nota foi " + nota2)
console.log("Sua média foi " + media )
console.log(resultado)


