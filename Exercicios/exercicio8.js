temp = prompt("Entre com a temperatura corporal: ");
temp = parseFloat(temp);

if (temp <= 35){
    console.log("Hipotermia")}

else if (temp >= 35.1 && temp <= 37.7){
    console.log("Normal")}

else if (temp >= 37.8 && temp <= 39.5){
    console.log("Febre")}

else if (temp >= 39.6 && temp <= 41){
    console.log("Febre Alta")}

else {console.log("Hipertermia")}