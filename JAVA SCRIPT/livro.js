document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const livro = LIVROS[id];

  const conteudo = document.getElementById('conteudo-livro');
  const naoEncontrado = document.getElementById('livro-nao-encontrado');

  if (!livro) {
    conteudo.hidden = true;
    naoEncontrado.hidden = false;
    return;
  }

  document.title = `${livro.titulo} | Babel Toshokan`;
  const capaEl = document.getElementById('livro-capa');
  capaEl.innerHTML = `<img src="${livro.capaImg}" alt="${livro.capaAlt}">`;
  document.getElementById('livro-titulo').textContent = livro.titulo;
  document.getElementById('livro-genero').textContent = livro.genero;
  document.getElementById('livro-sinopse').textContent = livro.sinopseCompleta;

  // --- Leitor de páginas ---
  const paginas = livro.paginas;
  let pagAtual = 0;

  const tituloPagina = document.getElementById('leitor-titulo-pagina');
  const textoPagina = document.getElementById('leitor-texto');
  const indicador = document.getElementById('leitor-indicador');
  const btnAnterior = document.getElementById('leitor-anterior');
  const btnProxima = document.getElementById('leitor-proxima');

  function renderizarPagina() {
    const pagina = paginas[pagAtual];
    tituloPagina.textContent = pagina.titulo;
    textoPagina.textContent = pagina.texto;
    indicador.textContent = `Página ${pagAtual + 1} de ${paginas.length}`;
    btnAnterior.disabled = pagAtual === 0;
    btnProxima.disabled = pagAtual === paginas.length - 1;
  }

  btnAnterior.addEventListener('click', () => {
    if (pagAtual > 0) {
      pagAtual -= 1;
      renderizarPagina();
      textoPagina.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  btnProxima.addEventListener('click', () => {
    if (pagAtual < paginas.length - 1) {
      pagAtual += 1;
      renderizarPagina();
      textoPagina.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  renderizarPagina();
});