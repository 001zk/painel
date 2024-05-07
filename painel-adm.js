document.getElementById("add-user-btn").addEventListener("click", function() {
    var modal = document.getElementById("add-user-modal");
    modal.style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener("click", function() {
    var modal = document.getElementById("add-user-modal");
    modal.style.display = "none";
});

window.onclick = function(event) {
    var modal = document.getElementById("add-user-modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("add-user-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("new-email").value;
    var password = document.getElementById("new-password").value;
    // Aqui você pode enviar os dados para o servidor para adicionar o novo usuário
    alert("Novo usuário adicionado:\nEmail: " + email + "\nSenha: " + password);
    // Aqui você pode adicionar lógica para enviar os dados para o servidor
    // e tratar a resposta do servidor
});

