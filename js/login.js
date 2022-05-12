var forml = document.forms.formLogin

document.querySelector("#btLogin").onclick = function () {
    if (forml.email.value == "") {
        alert("Email Inválido. Tente Novamente.")

    } else if (forml.senha.value == "") {
        alert("Senha Inválida. Tente Novamente")
    }
    else{
        forml.submit();
        localStorage.emailUser = forml.email.value
    }
}