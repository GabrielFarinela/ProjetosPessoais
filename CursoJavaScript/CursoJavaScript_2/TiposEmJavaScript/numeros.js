const peso1 = 1.0;
const peso2 = Number("2.0");

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.982;
const avaliacao2 = 8.645;

const total = avaliacao1 * peso1 + avaliacao2 *peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(3));
console.log(media.toString(2));
console.log(typeof media);
console.log(typeof Number);