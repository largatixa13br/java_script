const form = document.getElementById("frmLogin");
const btn = document.querySelector(".btn");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // impede envio automático

    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();

    msg.textContent = "";

    // Validações
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

    // Se passou nas validações
    msg.textContent = "";
    btn.classList.add("loading");   // ativa animação
    btn.disabled = true;

    // Simula carregamento (3 segundos)
    setTimeout(() => {
        btn.classList.remove("loading");
        btn.disabled = false;
        msg.textContent = "Login realizado com sucesso!";
    }, 3000);
});
