document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Credenciais de administrador
    var adminUsername = "Lzk001@Gmail.com";
    var adminPassword = "991046063"; // Senha do administrador
    
    // Verifica se o login é do administrador
    if (email === adminUsername && password === adminPassword) {
        // Redireciona para a página do painel do administrador
        window.location.href = "painel-adm.html";
    } else {
        // Aqui você pode adicionar lógica para autenticar o usuário regular
        // Se for bem-sucedido, redirecione para outra página
        // Se houver erro de autenticação, exiba uma mensagem de erro
        alert("Credenciais inválidas. Por favor, tente novamente.");
    }
});
