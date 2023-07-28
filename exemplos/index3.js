const numeros = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3,]

const resultado = numeros.filter((numero) => {
    return numero === 10;
});

console.log(resultado);