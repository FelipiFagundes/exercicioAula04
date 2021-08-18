peso = "100.00"
altura = "1.69"

imc = peso / (altura * altura)

classif = ""
grauObesidade = ""

if (imc < 18.50){
  classif = "Magreza"
  grauObesidade = "0"
}

else if (imc >= 18.50 && imc <= 24.99){
  classif = "Normal"
  grauObesidade = "0"
}

else if (imc >= 25.00 && imc <= 29.99){
  classif = "Sobrepeso"
  grauObesidade = "1"
}

else if (imc >= 30.00 && imc <= 39.99){
  classif = "Obesidade"
  grauObesidade = "2"
}
else{
  classif = "Obesidade grave"
  grauObesidade = "3"
}

console.log("Seu IMC é de  "+ imc.toFixed(2))
console.log("e foi classificado como " + classif)

switch (grauObesidade){
  case "1" :
   console.log("Cuidado! Você está acima do peso recomendado pela OMS.")
    break;

  case "2" :
   console.log("Cuidado! Você está acima do peso recomendado pela OMS.")
    break;

  case "3" :
   console.log("Cuidado! Você está acima do peso recomendado pela OMS.")
   console.log("É importante procurar um médico para avaliar sua saúde.")
    break;
}    


