document.addEventListener('DOMContentLoaded', () => {
  const btnTema = document.getElementById('btn-tema');
  if (!btnTema) return; // esta página não tem o botão de tema

  const TEMA_SALVO = localStorage.getItem('tema');

  function aplicarTema(tema) {
    if (tema === 'claro') {
      document.documentElement.setAttribute('data-tema', 'claro');
      btnTema.textContent = '☀️';
    } else {
      document.documentElement.removeAttribute('data-tema');
      btnTema.textContent = '🌙';
    }
  }

  // Usa o tema salvo; se não tiver nenhum, mantém o escuro (padrão do site)
  aplicarTema(TEMA_SALVO === 'claro' ? 'claro' : 'escuro');

  btnTema.addEventListener('click', () => {
    const temaAtual = document.documentElement.getAttribute('data-tema') === 'claro' ? 'claro' : 'escuro';
    const novoTema = temaAtual === 'claro' ? 'escuro' : 'claro';
    aplicarTema(novoTema);
    localStorage.setItem('tema', novoTema);
  });
});
