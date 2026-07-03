document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contato');
  if (!form) return; // esta página não tem formulário de contato

  const msgSucesso = document.getElementById('msg-sucesso');
  const btnEnviar = form.querySelector('button[type="submit"]');

  const campos = {
    nome: {
      el: document.getElementById('nome'),
      validar: (v) => v.trim().length >= 2,
      erro: 'Digite seu nome (mínimo 2 caracteres).',
    },
    email: {
      el: document.getElementById('email'),
      validar: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
      erro: 'Digite um e-mail válido.',
    },
    mensagem: {
      el: document.getElementById('mensagem'),
      validar: (v) => v.trim().length >= 10,
      erro: 'Sua mensagem precisa ter pelo menos 10 caracteres.',
    },
  };

  // Cria um <span> de erro logo abaixo de cada campo, uma única vez
  Object.values(campos).forEach(({ el }) => {
    const span = document.createElement('span');
    span.className = 'erro-campo';
    span.setAttribute('aria-live', 'polite');
    span.hidden = true;
    el.insertAdjacentElement('afterend', span);
    el._erroSpan = span;

    // Valida em tempo real assim que o usuário sai do campo ou digita de novo
    el.addEventListener('input', () => limparErro(el));
    el.addEventListener('blur', () => validarCampo(el));
  });

  function chaveDoEl(el) {
    return Object.keys(campos).find((k) => campos[k].el === el);
  }

  function mostrarErro(el, texto) {
    el.setAttribute('aria-invalid', 'true');
    el.classList.add('input-erro');
    el._erroSpan.textContent = texto;
    el._erroSpan.hidden = false;
  }

  function limparErro(el) {
    el.removeAttribute('aria-invalid');
    el.classList.remove('input-erro');
    el._erroSpan.hidden = true;
  }

  function validarCampo(el) {
    const chave = chaveDoEl(el);
    const { validar, erro } = campos[chave];
    const valido = validar(el.value);
    if (!valido) {
      mostrarErro(el, erro);
    } else {
      limparErro(el);
    }
    return valido;
  }

  function validarFormulario() {
    let tudoValido = true;
    Object.values(campos).forEach(({ el }) => {
      if (!validarCampo(el)) tudoValido = false;
    });
    return tudoValido;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    msgSucesso.hidden = true;

    if (!validarFormulario()) {
      // leva o foco pro primeiro campo inválido
      const primeiroInvalido = Object.values(campos)
        .map((c) => c.el)
        .find((el) => el.getAttribute('aria-invalid') === 'true');
      if (primeiroInvalido) primeiroInvalido.focus();
      return;
    }

    // Simula envio (aqui entraria um fetch real pro backend)
    btnEnviar.disabled = true;
    btnEnviar.textContent = 'Enviando...';

    setTimeout(() => {
      msgSucesso.hidden = false;
      form.reset();
      Object.values(campos).forEach(({ el }) => limparErro(el));
      btnEnviar.disabled = false;
      btnEnviar.textContent = 'Enviar';

      setTimeout(() => {
        msgSucesso.hidden = true;
      }, 4000);
    }, 600);
  });
});
