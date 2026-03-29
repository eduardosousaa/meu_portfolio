function SendMail() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    var params = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };
    
    emailjs.send("service_27nt7ie", "template_602j0nd", params).then(function (res) {
        alert("Obrigado por entrar em contato! Sua mensagem foi enviada com sucesso. Em breve retornarei sua mensagem.");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
    }).catch(function (error) {
        console.error("Erro EmailJS:", error);
        alert("Erro ao enviar a mensagem. Por favor, verifique o console (F12) para mais detalhes ou tente novamente mais tarde.");
    });
}
