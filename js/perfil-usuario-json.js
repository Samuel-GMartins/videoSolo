
// Escopos var let const
let cliente = '{"Nome": "Samuel Martins", "imagem": "fotoCliente.jpeg", "idade":"23","email":"dev.gmartins@gmail.com", "preferencia": "Terror", "dataInicio": " 28/03/2022", "tipoAssinante":"Administrador", "valor": 250.75}'

let clienteJson = JSON.parse(cliente)

console.log(clienteJson)

let imagem = document.querySelector("#imagem")
let conteudo = document.querySelector("#conteudo")
let titulo = document.querySelector("#titulo")
let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let telefone = document.querySelector("#telefone")
let idade = document.querySelector("#idade")
let preferencia = document.querySelector("#preferencia")
let dataInicio = document.querySelector("#dataInicio")
let tipoAssinante = document.querySelector("#tipoAssinante")
let valor = document.querySelector("#valor")

console.log(nome)


titulo.innerHTML = "Página do Usuário"
imagem.innerHTML = '<img style="border-radius:50%" src="images/'  + clienteJson.imagem + '"width="300"/>'
nome.innerHTML = "<b>Nome:</b> " + localStorage.nomeUser
idade.innerHTML = "<b>Idade: </b>" + clienteJson.idade
email.innerHTML = "<b>E-mail:</b> " + localStorage.emailUser
telefone.innerHTML = "<b>Telefone:</b> " + localStorage.telefoneUser
preferencia.innerHTML = "<b>Preferências: </b>" + clienteJson.preferencia
dataInicio.innerHTML = "<b>Data De Início: </b>" + clienteJson.dataInicio
tipoAssinante.innerHTML = "<b>Tipo De Assinatura: </b>" + clienteJson.tipoAssinante
valor.innerHTML = "<b>Valor: R$ </b>" + clienteJson.valor








