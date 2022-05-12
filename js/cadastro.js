var formcad = document.forms.formCadastro

document.querySelector("#btcad").onclick = function () {
    if (formcad.nome.value == "") {
        alert("Preencha o nome!")

    } else if (formcad.email.value == "") {
        alert("Preencha o E-mail!")
    }
    else if (formcad.telefone.value == "") {
        alert("Digite um telefone para Contato")
    }
    else if (formcad.senha.value == "") {
        alert("Escolha uma Senha Forte")
    }
    else if (formcad.senhaF.value !== senha.value || formcad.senhaF.value == "") {
        alert("As Senhas não conferem. Tente Novamente")
    }

    else{
        formcad.submit();
        localStorage.nomeUser = formCadastro.nome.value
        localStorage.emailUser = formCadastro.email.value
        localStorage.telefoneUser = formCadastro.telefone.value
        localStorage.senhaUser = formCadastro.senha.value


    }
}
