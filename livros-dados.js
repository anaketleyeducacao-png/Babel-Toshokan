// Base de dados dos livros/mangás do catálogo.
// Em um cenário real, isso viria de uma API/backend.
// As "páginas" abaixo são texto de preenchimento (lorem ipsum), só para simular a leitura.

const LOREM_A = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const LOREM_B = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const LOREM_C = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";
const LOREM_D = "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.";

function gerarPaginas(tituloCapitulo) {
  return [
    { titulo: `${tituloCapitulo} — Página 1`, texto: LOREM_A },
    { titulo: `${tituloCapitulo} — Página 2`, texto: LOREM_B },
    { titulo: `${tituloCapitulo} — Página 3`, texto: LOREM_C },
    { titulo: `${tituloCapitulo} — Página 4`, texto: LOREM_D },
    { titulo: `${tituloCapitulo} — Página 5`, texto: LOREM_A + " " + LOREM_C },
  ];
}

const LIVROS = {
  "sombra-de-tinta": {
    titulo: "Sombra de Tinta",
    genero: "Mangá de ação e mistério · Japão feudal",
    capaImg: "imagens/capa-sombra-de-tinta.jpg",
    capaAlt: "Capa do mangá Sombra de Tinta, ilustração de um samurai sob a lua",
    sinopseCurta: "Após ver seu mestre ser assassinado por um clã rival, o jovem espadachim Ren abandona seu nome e vira um ronin sem rosto.",
    sinopseCompleta: "Após ver seu mestre ser assassinado por um clã rival, o jovem espadachim Ren abandona seu nome e passa a vagar de vila em vila como um ronin sem rosto. Cada golpe de sua lâmina esconde um pedaço da verdade sobre a noite em que tudo mudou. Mas quanto mais perto ele chega dos responsáveis, mais percebe que a linha entre justiça e vingança já não existe. Enquanto o inverno se aproxima, Ren precisa decidir se ainda há algo dele que valha a pena salvar — ou se restou apenas a lâmina.",
    paginas: gerarPaginas("Capítulo 1"),
  },
  "ecos-do-vazio": {
    titulo: "Ecos do Vazio",
    genero: "Ficção científica · Exploração espacial",
    capaImg: "imagens/Capa-Ecos-do-Vazio.jpg",
    capaAlt: "Capa do livro Ecos do Vazio, ilustração de uma nave espacial",
    sinopseCurta: "A tripulação da nave Aurora-9 recebe um sinal vindo de uma região do espaço que, segundo os mapas, não deveria existir.",
    sinopseCompleta: "A tripulação da nave Aurora-9 recebe um sinal vindo de uma região do espaço que, segundo todos os mapas, não deveria existir. Enquanto a engenheira Lia tenta decifrar a origem da mensagem, o restante da tripulação começa a questionar se estão realmente sozinhos — ou se sempre foram observados. Conforme os sistemas da nave começam a falhar de formas que ninguém consegue explicar, a linha entre exploração científica e sobrevivência desaparece. Uma jornada sobre os limites do conhecimento humano e o preço de ultrapassá-los.",
    paginas: gerarPaginas("Capítulo 1"),
  },
  "flor-de-aco": {
    titulo: "Flor de Aço",
    genero: "Mangá shonen · Ação e vingança",
    capaImg: "imagens/capa-flor-de-aço.jpg",
    capaAlt: "Capa do mangá Flor de Aço, ilustração de uma guerreira com espada",
    sinopseCurta: "Treinada desde criança para proteger o último herdeiro de uma linhagem esquecida, Kaede empunha a espada da família contra o império.",
    sinopseCompleta: "Treinada desde criança por um mestre que jurou proteger o último herdeiro de uma linhagem esquecida, Kaede empunha a espada da família como símbolo de resistência contra o império que destruiu sua vila. Em cada duelo, ela aprende que força não basta: é preciso escolher pelo que vale a pena lutar. À medida que velhos aliados revelam segredos e novos inimigos surgem das sombras do próprio império, Kaede terá que decidir se luta pela vingança do passado ou por um futuro que ainda pode construir. Um mangá sobre superação, honra e o custo real da vingança.",
    paginas: gerarPaginas("Capítulo 1"),
  },
  "cidade-de-papel": {
    titulo: "Cidade de Papel",
    genero: "Drama urbano · Amizade e recomeços",
    capaImg: "imagens/capa-cidade-de-papel.jpg",
    capaAlt: "Capa do livro Cidade de Papel, ilustração de prédios ao entardecer",
    sinopseCurta: "Três amigos de infância se reencontram, anos depois, na mesma cidade que os viu crescer e se afastar.",
    sinopseCompleta: "Três amigos de infância se reencontram, anos depois, na mesma cidade que os viu crescer e se afastar. Entre empregos que não deram certo, promessas esquecidas e um segredo nunca contado, eles precisam decidir se ainda cabe, na vida adulta, o tipo de amizade que tinham quando nada parecia impossível. Ao longo de um único verão, os três vão precisar encarar quem se tornaram — e se a cidade que os formou ainda tem espaço para eles. Uma história sobre o que fica quando tudo o resto muda.",
    paginas: gerarPaginas("Capítulo 1"),
  },
};