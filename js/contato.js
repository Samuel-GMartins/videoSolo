var formc = document.forms.formContato

document.querySelector("#btcontato").onclick = function () {
    if (formc.nomecontato.value == "") {
        alert("Preencha o nome!")

    } else if (formc.emailcontato.value == "") {
        alert("Preencha o E-mail!")
    }
    else if (formc.assuntocontato.value == "") {
        alert("Digite o Assunto do Comentário!")
    }
    else if (formc.mensagemcontato.value == "") {
        alert("Escreva Um Comentário")
    }
    else{
        formc.submit();
    }
}
