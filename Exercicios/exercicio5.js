num1 = prompt("Entre com um número inteiro: ");
num2 = prompt("Entre com um número inteiro: ");
num1 = parseInt(num1);
num2 = parseInt(num2);
if(num1 > num2){
    console.log("O número " + num1 + " é maior que " + num2);
}
else{
    console.log("O número "+ num2 +" é maior que " + num1);
}