const crypto = require("crypto");

// Funções de manipulação de texto
function converterParaMaiusculas(texto) {
  return texto.toUpperCase();
}

function converterParaMinusculas(texto) {
  return texto.toLowerCase();
}

function contarPalavras(texto) {
  const palavras = texto.split(/\s+/);
  return palavras.length;
}

function inverterTexto(texto) {
  return texto.split("").reverse().join("");
}

function contarCaracteres(texto) {
  return texto.replace(/\s/g, "").length;
}

function removerEspacos(texto) {
  return texto.trim();
}

function substituirSubstrings(texto, antigaSub, novaSub) {
  return texto.replace(new RegExp(antigaSub, "g"), novaSub);
}

function recortarTexto(texto, inicio, fim) {
  return texto.slice(inicio, fim);
}

function capitalizarPalavras(texto) {
  return texto.replace(/\b\w/g, (match) => match.toUpperCase());
}

function removerCaracteresEspeciais(texto) {
  return texto.replace(/[^\w\s]/gi, "");
}

function contarOcorrenciasPalavra(texto, palavra) {
  const regex = new RegExp(`\\b${palavra}\\b`, "gi");
  const ocorrencias = texto.match(regex);
  return ocorrencias ? ocorrencias.length : 0;
}

function embaralharPalavras(texto) {
  return texto.split(" ").map((word) =>
    word.split("").sort(() => 0.5 - Math.random()).join("")
  ).join(" ");
}

function verificarPalindromo(texto) {
  const limpo = removerCaracteresEspeciais(texto).toLowerCase();
  return limpo === inverterTexto(limpo);
}

function removerDuplicatas(texto) {
  const palavras = texto.split(/\s+/);
  const unicas = [...new Set(palavras)];
  return unicas.join(" ");
}

// Função para calcular o hash de uma string
function calcularHash(texto) {
  return crypto.createHash("sha256").update(texto, "utf-8").digest("hex");
}

// Função para gerar um código de autenticação (exemplo: OTP)
function gerarCodigoAutenticacao(tamanho = 6) {
  const caracteres = "0123456789";
  let codigo = "";
  for (let i = 0; i < tamanho; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    codigo += caracteres.charAt(indice);
  }
  return codigo;
}

function formatarMoeda(valor, codigoMoeda) {
  try {
    const opcoesFormato = {
      style: "currency",
      currency: codigoMoeda,
    };
    return valor.toLocaleString("pt-BR", opcoesFormato);
  } catch (error) {
    console.error("Erro ao formatar moeda:", error.message);
    return null;
  }
}

// Função para converter um texto em formato JSON para objeto
function converterJsonParaObjeto(json) {
  try {
    return JSON.parse(json);
  } catch (error) {
    console.error("Erro ao converter JSON para objeto:", error.message);
    return null;
  }
}

function substituirVogaisPorNumeros(texto) {
  const substituicoes = {
    "a": "2",
    "e": "2",
    "i": "4",
    "o": "6",
    "u": "8",
  };

  return texto.replace(
    /[aeiou]/gi,
    (vogal) => substituicoes[vogal.toLowerCase()],
  );
}

// Função para converter um número em algarismos romanos
function converterParaAlgarismosRomanos(numero) {
  const valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const algarismos = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let resultado = "";

  for (let i = 0; i < valores.length; i++) {
    while (numero >= valores[i]) {
      resultado += algarismos[i];
      numero -= valores[i];
    }
  }

  return resultado;
}

// Função para calcular o fatorial de um número
function calcularFatorial(numero) {
  if (numero < 0) return undefined; // Fatorial não está definido para números negativos
  if (numero === 0 || numero === 1) return 1;

  let resultado = 1;
  for (let i = 2; i <= numero; i++) {
    resultado *= i;
  }

  return resultado;
}

// Função para gerar um identificador único
function gerarIdentificadorUnico() {
  return crypto.randomUUID();
}

// Funções de criptografia
function gerarChave() {
  return crypto.randomBytes(32).toString("hex");
}

function criptografarTexto(texto, chave) {
  const algorithm = "aes-256-cbc";
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(
    algorithm,
    Buffer.from(chave, "hex"),
    iv,
  );
  let crypted = cipher.update(texto, "utf-8", "hex");
  crypted += cipher.final("hex");
  return {
    iv: iv.toString("hex"),
    textoCriptografado: crypted,
  };
}

function descriptografarTexto(textoCriptografado, chave) {
  const algorithm = "aes-256-cbc";
  const iv = Buffer.from(textoCriptografado.iv, "hex");
  const decipher = crypto.createDecipheriv(
    algorithm,
    Buffer.from(chave, "hex"),
    iv,
  );
  let dec = decipher.update(
    textoCriptografado.textoCriptografado,
    "hex",
    "utf-8",
  );
  dec += decipher.final("utf-8");
  return dec;
}

// Exporta as funções
module.exports = {
  // Funções de manipulação de texto
  converterParaMaiusculas,
  converterParaMinusculas,
  contarPalavras,
  inverterTexto,
  contarCaracteres,
  removerEspacos,
  substituirSubstrings,
  recortarTexto,
  capitalizarPalavras,
  removerCaracteresEspeciais,
  contarOcorrenciasPalavra,
  embaralharPalavras,
  verificarPalindromo,
  removerDuplicatas,
  substituirVogaisPorNumeros,
  converterParaAlgarismosRomanos,

  // Funções de criptografia
  gerarChave,
  criptografarTexto,
  descriptografarTexto,

  // Funções adicionais
  calcularHash,
  gerarCodigoAutenticacao,
  formatarMoeda,
  converterJsonParaObjeto,
  calcularFatorial,
  gerarIdentificadorUnico,
};
