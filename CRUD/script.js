//CRUD - FUNÇÕES

const openCadastro = () => 
    document.getElementById('cadastrar').classList.add('active')
    

const closeCadastro = () => 
    document.getElementById('cadastrar').classList.remove('active')

const getLocalStorage = () => 
    JSON.parse(localStorage.getItem('bd_cliente')) ?? []

const setLocalStorage = (bd_cliente) => 
    localStorage.setItem("bd_cliente", JSON.stringify(bd_cliente))

const salvarCliente = () => {
    if(validar()) {
        const cliente = {
            nome: document.getElementById('nome').value,
            sobrenome: document.getElementById('sobrenome').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value
        }
        const index = document.getElementById('nome').dataset.index
        if(index == 'new') {
            createCliente(cliente)
            limparCadastro()
            atualizarTabela()
            fecharCadastro()
            location.reload()
        } else {
            updateCliente(index, cliente)
            atualizarTabela()
            fecharCadastro()
            location.reload()
        }

    }
    else(console.log("erro!"))
}

const validar = () => {
    return document.getElementById('formulario').reportValidity()
}

const limparCadastro = () => {
    const cliente = {
        nome: document.getElementById('nome').value="",
        sobrenome: document.getElementById('sobrenome').value= "",
        email: document.getElementById('email').value= "",
        telefone: document.getElementById('telefone').value= ""
    }
}

const fecharCadastro = () => {
    closeCadastro()
}

const novaLinha = (cliente, index) => {
    const novaLinha = document.createElement('tr')
    novaLinha.innerHTML = `
        <td>${cliente.nome}</td>
        <td>${cliente.sobrenome}</td>
        <td>${cliente.email}</td>
        <td>${cliente.telefone}</td>
        <td>
            <button type="button" class="botao-editar" id="editar-${index}">Editar</button>
            <button type="button" class="botao-excluir" id="excluir-${index}">Excluir</button>
        </td>
    `
    document.querySelector('tbody').appendChild(novaLinha)
}

const limparTabela = () => {
    const linhas = document.querySelectorAll('td')
    linhas.forEach(linha => linha.parentNode.removeChild(linha))
}

const atualizarTabela = () => {
    const bd_cliente = readCliente()
    limparTabela()
    bd_cliente.forEach(novaLinha)
}

const preencherCadastro = (cliente) => {
    document.getElementById('nome').value = cliente.nome
    document.getElementById('sobrenome').value = cliente.sobrenome
    document.getElementById('email').value = cliente.email
    document.getElementById('telefone').value = cliente.telefone
    document.getElementById('nome').dataset.index = cliente.index
}

const editarCliente = (index) => {
    const cliente = readCliente() [index]
    cliente.index = index
    preencherCadastro(cliente)
    openCadastro()
}

const acoes = (event) => {
    if(event.target.type == 'button') {
        const [action, index] = event.target.id.split('-')
        
        if(action == 'editar') {
            editarCliente(index)
        } else {
        const response = confirm (`Deseja realmente excluir o cliente?`)
            if(response) {
                deleteCliente(index)
                atualizarTabela()
                location.reload()
            }
        }
    }
}

//CRUD - CREATE | READ | UPDATE | DELETE

const createCliente = (cliente) => {
    const bd_cliente = getLocalStorage()
    bd_cliente.push(cliente)
    setLocalStorage(bd_cliente)
}

const readCliente = () => getLocalStorage()

const updateCliente = (index, cliente) => {
    const bd_cliente = readCliente()
    bd_cliente [index] = cliente
    setLocalStorage(bd_cliente)
}

const deleteCliente = (index) => {
    const bd_cliente = readCliente()
    bd_cliente.splice(index, 1) 
    setLocalStorage(bd_cliente)
}

atualizarTabela()

//CRUD - EVENTOS

document.getElementById('cadastrarUsuario').addEventListener( 'click', openCadastro, limparCadastro)

document.getElementById('cancelar').addEventListener('click', closeCadastro)

document.getElementById('salvar').addEventListener('click', salvarCliente)

document.getElementById('limpar').addEventListener('click', limparCadastro)

document.querySelector('tbody').addEventListener('click', acoes)


