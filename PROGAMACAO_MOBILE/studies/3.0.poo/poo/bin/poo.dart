/* pacote principal */

import 'package:poo/domain/funcionario.dart';
import 'package:poo/domain/progamador.dart';

void main(List<String> arguments) {
  /*_____________________________PESSOA________________________________________*/
  /* diferentes tipos de instanciar uma classe pessoa */

  /* para declarar a classe pessoa nao precisa utilizar o NEW antes igual no java 
  Pessoa eumesmo = Pessoa('Eduardo', 20);
  print(eumesmo.nome);

  Pessoa mae = Pessoa.construtorNome("Vanilza");
  print(mae.nome);

  Pessoa pai = Pessoa.construtorNome("Fabio");
  print(pai.nome);

  Pessoa teste = Pessoa.total(idade: 30, nome: "Richard");
  print(teste.nome);*/

  /*_____________________________FUNCIONARIO___________________________________*/

  var funcionario = Funcionario("Joao", 20, "241Sw", Progamador());
  print(funcionario.matricula);
  print(funcionario.nome);
  print(funcionario.idade);
  print(funcionario.cargo?.valorsalario());
}
