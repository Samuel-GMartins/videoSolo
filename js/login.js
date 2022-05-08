var forml = document.forms.formLogin

document.querySelector("#btLogin").onclick = function () {
    if (forml.emailLogin.value == "") {
        alert("Email Inválido. Tente Novamente.")

    } else if (forml.paswLogin.value == "") {
        alert("Senha Inválida. Tente Novamente")
    }
    else{
        forml.submit();
    }
}