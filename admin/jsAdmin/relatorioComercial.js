
assValor1 = 9.90
assValor2 = 12.50
assValor3 = 49.99
assTotal = assValor1 + assValor2 + assValor3

aluValor1 = 9.90
aluValor2 = 9.90
aluValor3 = 19.80
aluTotal = aluValor1 + aluValor2 + aluValor3



// Assinatura
let assinatura1 = document.querySelector('#assinatura1').innerHTML = 'R$ ' + parseFloat(assValor1).toFixed(2)
let assinatura2 = document.querySelector('#assinatura2').innerHTML = 'R$ ' + parseFloat(assValor2).toFixed(2)
let assinatura3 = document.querySelector('#assinatura3').innerHTML = 'R$ ' + parseFloat(assValor3).toFixed(2)
let totalAssinatura = document.querySelector('#totalAssinatura').innerHTML = 'R$ ' + parseFloat(assTotal).toFixed(2)

// Aluguel
let aluguel1 = document.querySelector('#aluguel1').innerHTML = 'R$ ' + parseFloat(aluValor1).toFixed(2)
let aluguel2 = document.querySelector('#aluguel2').innerHTML = 'R$ ' + parseFloat(aluValor2).toFixed(2)
let aluguel3 = document.querySelector('#aluguel3').innerHTML = 'R$ ' + parseFloat(aluValor3).toFixed(2)
let totalAluguel = document.querySelector('#totalAluguel').innerHTML = 'R$ ' + parseFloat(aluTotal).toFixed(2)

// Visao Macro
let macroTotAss = document.querySelector('#macroTotAss').innerHTML = '<b>Total</b>: R$ ' + parseFloat(assTotal).toFixed(2)

let macroTotAlu = document.querySelector('#macroTotAlu').innerHTML = '<b>Total</b>: R$ ' + parseFloat(aluTotal).toFixed(2)