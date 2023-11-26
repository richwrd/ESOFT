/* nao eh necessario passar private ou ate mesmo o export */
abstract class Pessoa {
  String? nome;
  int? idade;

  /*____________________________________________________________________________
    Devemos inicializar (construir) as variaveis

  Pessoa(String nome, int idade) {
    this.nome = nome;
    this.idade = idade;
  }*/

  /*____________________________________________________________________________*/
  /* mesma coisa que acima, so que mais limpo */
  Pessoa(this.nome, this.idade);

/*______________________________________________________________________________________________________________*/

  /* devemos criar o construtor para chamar esta classe e atribuir valores */
  /*____________________________________________________________________________*/
  /* 1. aceita somente o NOME */
  Pessoa.construtorNome(this.nome);
  /* 2. aceita idade e nome independe ta ordem -> para construir deve-se passar o var a ser definido e o seu valor */
  Pessoa.total({this.idade, this.nome});

  String? getNome() {
    return nome;
  }
  /*____________________________________________________________________________*/
}
