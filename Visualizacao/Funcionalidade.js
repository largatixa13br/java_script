document.getElementById("frmLogin").addEventListener("submit", function(event) {

    event.preventDefault(); // impede envio automático

    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();
    let msg = document.getElementById("msg");

    msg.textContent = "";

    if (email === "") {
        msg.textContent = "O campo email é obrigatório.";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        msg.textContent = "Digite um email válido.";
        return;
    }

    if (senha === "") {
        msg.textContent = "O campo senha é obrigatório.";
        return;
    }

    if (senha.length < 6) {
        msg.textContent = "A senha deve ter pelo menos 6 caracteres.";
        return;
    }

    msg.style.color = "green";
    msg.textContent = "Login válido!";

});