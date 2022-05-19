const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua Jose Rizzo",
        numero: 1000
    }
};

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);

//const { conta: { ag, num } } = pessoa;
//console.log(ag, num);

/* 
- Cuidar para que o null ou o undefined fique sempre
- em ultimo ou então nem exista conferir sempre bem
- para que não tenha problema pois o codigo vai parar
- de compilar no primeiro erro.
*/ 