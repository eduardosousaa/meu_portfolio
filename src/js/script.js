function SendMail() {
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_27nt7ie","template_602j0nd", params).then(function (res) {
        alert("Obrigado por entrar em contato! Sua mensagem foi enviada com sucesso. Em breve retornarei sua mensagem.");

        // Limpa os campos do formulário
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
    })
}