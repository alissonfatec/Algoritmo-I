peso = prompt("Entre com o peso (KG): ");
altura = prompt("Entre com a sua altura (M): ");

peso = parseFloat(peso);
altura = parseFloat(altura);

imc = peso/(altura * altura);

if (imc <= 18.5){
    console.log("Abaixo do Peso");}

else if(imc <= 24.9){
    console.log("Peso ideal (parabéns)");}

else if(imc <= 29.9){
    console.log("Levemente acima do peso");}

else if(imc <= 34.9){
    console.log("Obesidade grau I");}

else if(imc <= 39.9){
    console.log("Obesidade grau II (severa)");}

else{console.log("Obesidade III (mórbida)");
}