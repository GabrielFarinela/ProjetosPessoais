const valores = [7.7, 9.6, 6.1];
console.log(valores[0], valores[2]);
console.log(valores[3]); //errado pois so tem 3 valores(0, 1, 2)

valores[3] = 10;
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, "teste");
console.log(valores);

console.log(valores.pop());
delete valores[0];
console.log(valores);

console.log(typeof valores);
