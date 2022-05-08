var formcad = document.forms.formCadastro

document.querySelector("#btcad").onclick = function () {
    if (formcad.nomeCadastro.value == "") {
        alert("Preencha o nome!")

    } else if (formcad.emailCadastro.value == "") {
        alert("Preencha o E-mail!")
    }
    else if (formcad.celCadastro.value == "") {
        alert("Digite um telefone para Contato")
    }
    else if (formcad.paswCadastro.value == "") {
        alert("Escolha uma Senha Forte")
    }
    else if (formcad.paswCadastroConf.value !== paswCadastro.value || formcad.paswCadastroConf.value == "") {
        alert("As Senhas não conferem. Tente Novamente")
    }

    else{
        formcad.submit();
    }
}
