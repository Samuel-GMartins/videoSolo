
// Escopos var let const
let cliente = '{"nome": "Samuel Martins", "idade":"23","email":"dev.gmartins@gmail.com", "preferencia": "Não", "dataInicio": " 28/03/2022", "tipoAssinante":"Administrador", "valor": 250.75}'

let clienteJson = JSON.parse(cliente)

console.log(clienteJson)

let conteudo = document.querySelector("#conteudo")
let titulo = document.querySelector("#titulo")
let nome = document.querySelector("#nome")
let idade = document.querySelector("#idade")
let email = document.querySelector("#email")
let preferencia = document.querySelector("#preferencia")
let dataInicio = document.querySelector("#dataInicio")
let tipoAssinante = document.querySelector("#tipoAssinante")
let valor = document.querySelector("#valor")

titulo.innerHTML = "Página do Usuário"
nome.innerHTML = "<b>Nome:</b> " + clienteJson.nome
idade.innerHTML = "<b>Idade: </b>" + clienteJson.idade
email.innerHTML = "<b>E-mail:</b> " + clienteJson.email
preferencia.innerHTML = "<b>Possui Preferências: </b>" + clienteJson.preferencia
dataInicio.innerHTML = "<b>Data De Início: </b>" + clienteJson.dataInicio
tipoAssinante.innerHTML = "<b>Tipo De Assinatura: </b>" + clienteJson.tipoAssinante
valor.innerHTML = "<b>Valor: R$ </b>" + clienteJson.valor








