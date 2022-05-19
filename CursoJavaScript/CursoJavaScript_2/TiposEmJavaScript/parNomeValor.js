const saudacao = "opa"; //primeiro contexto léxico

function exec() { //segundo contexto léxico
    const saudacao = "falaaaaa"
    return saudacao
};

const cliente = {
    nome: "pedro", 
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: "Rua José Rizzo",
        numero: 123
    }
};

console.log(saudacao);
console.log(exec());
console.log(cliente);
