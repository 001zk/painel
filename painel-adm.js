document.getElementById("add-user-btn").addEventListener("click", function() {
    var newUserEmail = prompt("Digite o email do novo usuário:");
    var newUserPassword = prompt("Digite a senha do novo usuário:");
    
    // Aqui você pode enviar os novos dados de login para o servidor
    // e salvar como um novo usuário comum
    
    // Exemplo de como enviar dados para o servidor (usando fetch API)
    fetch("/add-user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: newUserEmail, password: newUserPassword })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Novo usuário adicionado com sucesso!");
        } else {
            alert("Erro ao adicionar novo usuário. Por favor, tente novamente.");
        }
    })
    .catch(error => {
        console.error("Erro:", error);
        alert("Ocorreu um erro. Por favor, tente novamente.");
    });
});
