document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('profissao').value;

    if (senha !== confirmarSenha) {
        alert('As senhas não conferem!');
        return;
    }

    // Lógica de envio do formulário para o servidor
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Profissão:', profissao);

    alert('Cadastro realizado com sucesso!');
});
