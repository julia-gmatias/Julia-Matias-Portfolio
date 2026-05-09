document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contato');
    const btnEnviar = document.getElementById('btn-enviar');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Captura dos valores
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            // Validação obrigatória
            if (!nome || !email || !mensagem) {
                alert('Por favor, preencha todos os campos do formulário.');
                return;
            }

            // Simulação de envio
            btnEnviar.innerText = 'ENVIANDO...';
            btnEnviar.disabled = true;

            setTimeout(() => {
                alert(`Mensagem enviada com sucesso! Obrigado, ${nome}.`);
                form.reset();
                btnEnviar.innerText = 'ENVIAR MENSAGEM';
                btnEnviar.disabled = false;
            }, 1500);
        });
    }
});