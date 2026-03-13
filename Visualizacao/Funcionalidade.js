document.getElementById("frmLogin").addEventListener("submit", function(event) {

    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();

    if (email === "") {
        alert("O campo email é obrigatório");
        event.preventDefault();
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um email válido");
        event.preventDefault();
        return;
    }

    if (senha === "") {
        alert("O campo senha é obrigatório");
        event.preventDefault();
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres");
        event.preventDefault();
        return;
    }

});