const { expect } = require("chai");
const moduloTexto = require("../src/class");

describe("Módulo de Manipulação de Texto", () => {
  it("Deve converter texto para maiúsculas", () => {
    const resultado = moduloTexto.converterParaMaiusculas("Hello World");
    expect(resultado).to.equal("HELLO WORLD");
  });

  it("Deve converter texto para minúsculas", () => {
    const resultado = moduloTexto.converterParaMinusculas("Hello World");
    expect(resultado).to.equal("hello world");
  });

  it("Deve contar palavras corretamente", () => {
    const resultado = moduloTexto.contarPalavras("Hello World");
    expect(resultado).to.equal(2);
  });

  it("Deve inverter o texto corretamente", () => {
    const resultado = moduloTexto.inverterTexto("Hello World");
    expect(resultado).to.equal("dlroW olleH");
  });

  it("Deve contar caracteres corretamente", () => {
    const resultado = moduloTexto.contarCaracteres("Hello World");
    expect(resultado).to.equal(10);
  });

  it("Deve remover espaços em branco corretamente", () => {
    const resultado = moduloTexto.removerEspacos("  Hello World  ");
    expect(resultado).to.equal("Hello World");
  });

  it("Deve substituir substrings corretamente", () => {
    const resultado = moduloTexto.substituirSubstrings(
      "Hello World",
      "Hello",
      "Hi",
    );
    expect(resultado).to.equal("Hi World");
  });

  it("Deve recortar texto corretamente", () => {
    const resultado = moduloTexto.recortarTexto("Hello World", 0, 5);
    expect(resultado).to.equal("Hello");
  });

  it("Deve capitalizar palavras corretamente", () => {
    const resultado = moduloTexto.capitalizarPalavras("hello world");
    expect(resultado).to.equal("Hello World");
  });

  it("Deve remover caracteres especiais corretamente", () => {
    const resultado = moduloTexto.removerCaracteresEspeciais(
      "Hello World!@#$%^&*()",
    );
    expect(resultado).to.equal("Hello World");
  });

  it("Deve contar ocorrências de palavra corretamente", () => {
    const resultado = moduloTexto.contarOcorrenciasPalavra(
      "Hello Hello World",
      "Hello",
    );
    expect(resultado).to.equal(2);
  });

  it("Deve embaralhar palavras corretamente", () => {
    const resultado = moduloTexto.embaralharPalavras("Hello World");
    expect(resultado).to.not.equal("Hello World");
  });

  it("Deve verificar palíndromo corretamente", () => {
    const resultado1 = moduloTexto.verificarPalindromo("radar");
    const resultado2 = moduloTexto.verificarPalindromo("hello");
    expect(resultado1).to.equal(true);
    expect(resultado2).to.equal(false);
  });

  it("Deve remover duplicatas corretamente", () => {
    const resultado = moduloTexto.removerDuplicatas("Hello Hello World");
    expect(resultado).to.equal("Hello World");
  });

  it("Deve substituir vogais por números corretamente", () => {
    const resultado = moduloTexto.substituirVogaisPorNumeros("H2ll4 W6rld");
    expect(resultado).to.equal("H2ll4 W6rld");
  });

  it("Deve converter para algarismos romanos corretamente", () => {
    const resultado = moduloTexto.converterParaAlgarismosRomanos(2023);
    expect(resultado).to.equal("MMXXIII");
  });

  it("Deve gerar chave de criptografia corretamente", () => {
    const chave = moduloTexto.gerarChave();
    expect(chave).to.have.lengthOf(64); // Verifica se a chave tem 64 caracteres
  });

  it("Deve criptografar e descriptografar corretamente", () => {
    const textoOriginal = "Exemplo de texto para criptografia.";
    const chave = moduloTexto.gerarChave();

    const textoCriptografado = moduloTexto.criptografarTexto(
      textoOriginal,
      chave,
    );
    const textoDescriptografado = moduloTexto.descriptografarTexto(
      textoCriptografado,
      chave,
    );

    expect(textoDescriptografado).to.equal(textoOriginal);
  });

  it("Deve calcular o fatorial corretamente", () => {
    const resultado = moduloTexto.calcularFatorial(5);
    expect(resultado).to.equal(120);
  });

  it("Deve gerar identificador único corretamente", () => {
    const identificador = moduloTexto.gerarIdentificadorUnico();
    expect(identificador).to.be.a("string");
  });

  it("Deve calcular hash corretamente", () => {
    const resultado = moduloTexto.calcularHash("Hello World");
    expect(resultado).to.be.a("string");
  });

  it("Deve gerar código de autenticação corretamente", () => {
    const resultado = moduloTexto.gerarCodigoAutenticacao("Hello World");
    expect(resultado).to.be.a("string");
  });

  it("Deve formatar moeda corretamente", () => {
    const resultado = moduloTexto.formatarMoeda(123456.78, "BRL");
    // Use um caractere de espaço não quebrável (\u00A0) no lugar do espaço normal
    expect(resultado).to.equal("R$\u00A0123.456,78");
  });

  it("Deve converter JSON para objeto corretamente", () => {
    const resultado = moduloTexto.converterJsonParaObjeto('{"key": "value"}');
    expect(resultado).to.deep.equal({ key: "value" });
  });
});
