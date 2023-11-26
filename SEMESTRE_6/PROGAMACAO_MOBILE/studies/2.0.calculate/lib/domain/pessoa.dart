class Pessoa {
  /* todo atributo ja eh get e set por baixos dos panos */
  /* diferença entre os metodos get e set */

  /* SET não pode repetir os elementos */
  /* GET pega os elementos */

  String? nome;
  int? idade;

  Pessoa(this.nome, this.idade);

  Pessoa.construtorNome(this.nome);

  Pessoa.construtorIdade(this.idade);

  String? get getNome => nome;
}
