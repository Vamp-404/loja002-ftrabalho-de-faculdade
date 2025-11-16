document.addEventListener('DOMContentLoaded', () => {
    // Regex para E-mail: joao.silva@net.com
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,3}$/; 
    const emailInput = document.getElementById('email');

    // Regex para CPF: 999.999.999-99
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    const cpfInput = document.getElementById('cpf');
    
    const form = document.getElementById('form-contato'); 

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); 
            
            // 1. Validação do E-mail
            if (!emailRegex.test(emailInput.value)) {
                alert('Por favor, insira um e-mail no formato correto (ex: nome.sobrenome@net.com).');
                emailInput.focus();
                return; 
            }

            // 2. Validação do CPF
            if (!cpfRegex.test(cpfInput.value)) {
                alert('Por favor, insira o CPF no formato correto (999.999.999-99).');
                cpfInput.focus();
                return; 
            }

            alert('Formulário enviado com sucesso!');
            // Descomente a linha abaixo para enviar o formulário de verdade:
            // form.submit(); 
        });
        
        // Máscara de formatação para CPF
        cpfInput.addEventListener('input', (event) => {
            let valor = event.target.value.replace(/\D/g, ''); 
            
            if (valor.length > 0) {
                valor = valor.replace(/^(\d{3})(\d)/, '$1.$2');
            }
            if (valor.length > 6) {
                valor = valor.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
            }
            if (valor.length > 9) {
                valor = valor.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d{2})$/, '$1.$2.$3-$4');
            }
            
            event.target.value = valor.substring(0, 14);
        });
    }
});