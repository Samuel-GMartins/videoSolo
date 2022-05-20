var formc = document.forms.formContato
var idRandon = parseInt(Math.random() * 90000) + 10000
var idRandonKey = parseInt(Math.random() * 10) + 100



document.querySelector("#btContato").onclick = function () {
    if (formc.nomecontato.value == "") {
        alert("Preencha o nome!")

    } else if (formc.emailcontato.value == "") {
        alert("Preencha o E-mail!")
    } else if (formc.assuntocontato.value == "") {
        alert("Digite o Assunto do Comentário!")
    } else if (formc.mensagemcontato.value == "") {
        alert("Escreva Um Comentário")

    } else if (formc.chamado.checked) {
        localStorage.setItem('idChamado' + idRandonKey, 'chamado-' + idRandon)
        localStorage.setItem('nomeChamado' + idRandonKey, formc.nomecontato.value)
        localStorage.setItem('emailChamado' + idRandonKey, formc.emailcontato.value)
        localStorage.setItem('assuntoChamado' + idRandonKey, formc.assuntocontato.value)
        
        formc.submit();
    } else {
        formc.submit();
    }
}