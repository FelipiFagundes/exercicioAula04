nomeCompleto = "Felipi"
apelido = "Fe"
idade = 36
dataNascimento = "22/07/1985"
localNascimento = "Porto Alegre"
altura = "1,69"
trabalhando = true

apresentacao = "Meu nome é " + nomeCompleto + " (Sou conhecido como " + apelido +") e tenho " + idade + " anos. Nasci no dia " + dataNascimento + ", na cidade de " + localNascimento + ". Tenho " + altura +"m de altura e atualmente estou " + (trabalhando? "empregado" : "desempregado") + "."

console.log(apresentacao)