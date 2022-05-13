let qtd1 = document.querySelector('#qtd1')
let qtd2 = document.querySelector('#qtd2')
let qtd3 = document.querySelector('#qtd3')

let pr1 = document.querySelector('#pr1')
let pr2 = document.querySelector('#pr2')
let pr3 = document.querySelector('#pr3')

let qtdprod = document.querySelector('#qtdprod')
let tot = document.querySelector('#tot')

valorqtd1 = 1
valorqtd2 = 2
valorqtd3 = 1

preco1 = 12.50
preco2 = 15
preco3 = 11

qtdtot = valorqtd1 + valorqtd2 + valorqtd3
precotot = preco1 + preco2 + preco3


qtd1.innerHTML = valorqtd1
qtd2.innerHTML = valorqtd2
qtd3.innerHTML = valorqtd3

qtdprod.innerHTML = qtdtot + ' Produtos'

pr1.innerHTML = 'R$ ' + parseFloat(preco1)
pr2.innerHTML = 'R$ ' + parseFloat(preco2)
pr3.innerHTML = 'R$ ' + parseFloat(preco3)

tot.innerHTML = 'R$ ' + parseFloat(precotot)