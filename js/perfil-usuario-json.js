// Escopos var let const
let cliente = '{"Nome": "Samuel Martins", "imagem": "fotoCliente.jpeg", "idade":"23","email":"dev.gmartins@gmail.com", "preferencia": "Terror", "dataInicio": " 28/03/2022", "tipoAssinante":"Administrador", "valor": 250.75}'
let clienteJson = JSON.parse(cliente)

let conteudo = document.querySelector("#conteudo")

titulo = document.querySelector("#titulo").innerHTML = "Página do Usuário"
imagem = document.querySelector("#imagem").innerHTML = '<img style="border-radius:50%" src="images/'  + clienteJson.imagem + '"width="300"/>'
nome = document.querySelector("#nome").innerHTML = "<b>Nome:</b> " + localStorage.nomeUser
idade = document.querySelector("#idade").innerHTML = "<b>Idade: </b>" + clienteJson.idade
email = document.querySelector("#email").innerHTML = "<b>E-mail:</b> " + localStorage.emailUser
telefone = document.querySelector("#telefone").innerHTML = "<b>Telefone:</b> " + localStorage.telefoneUser
preferencia = document.querySelector("#preferencia").innerHTML = "<b>Preferências: </b>" + clienteJson.preferencia
dataInicio = document.querySelector("#dataInicio").innerHTML = "<b>Data De Início: </b>" + clienteJson.dataInicio
tipoAssinante = document.querySelector("#tipoAssinante").innerHTML = "<b>Tipo De Assinatura: </b>" + clienteJson.tipoAssinante
valor = document.querySelector("#valor").innerHTML = "<b>Valor: R$ </b>" + clienteJson.valor








