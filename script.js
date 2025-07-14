// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
            destino.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Ação no envio do formulário
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = this.querySelector('input[type="text"]').value;
    const telefone = this.querySelector('input[type="tel"]').value;
    const horario = this.querySelector('input[type="datetime-local"]').value;

    if (nome && telefone && horario) {
        alert(`✅ Obrigado, ${nome}! Seu horário foi agendado para: ${new Date(horario).toLocaleString('pt-BR')}`);
        this.reset(); // limpa os campos após envio
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Botão WhatsApp flutuante
const whatsappBtn = document.createElement('a');
whatsappBtn.href = 'https://wa.me/18997209282?text=Olá!%20Gostaria%20de%20agendar%20um%20horário.';
whatsappBtn.target = '_blank';
whatsappBtn.className = 'whatsapp-float';
whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
document.body.appendChild(whatsappBtn);


