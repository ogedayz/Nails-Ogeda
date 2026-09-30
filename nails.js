document.addEventListener('DOMContentLoaded', () => {

  const bannerCookies = document.getElementById('banner-cookies');
  const btnAceitar = document.getElementById('btn-aceitar-cookies');

  if (bannerCookies && btnAceitar) {

    const cookiesAceitos = localStorage.getItem('cookiesAceitos');

    if (cookiesAceitos === 'sim') {
      bannerCookies.classList.add('oculto');
    }

    btnAceitar.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.setItem('cookiesAceitos', 'sim');
      bannerCookies.classList.add('oculto');
    });
  }

  const formAgendamento = document.getElementById('form-agendamento');
  if (formAgendamento) {
    formAgendamento.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Obrigado! Seu agendamento foi solicitado com sucesso.');
      formAgendamento.reset();
    });
  }
});