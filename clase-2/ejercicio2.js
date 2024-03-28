const numeros = [10, 21, 22, 55, 58, 12, 4];

const devolverArrayPares = () => {
  return numeros.filter((e) => e % 2 === 0);
};

const resultado = devolverArrayPares(numeros);
console.log(`Los numeros pares son: ${resultado}`);
