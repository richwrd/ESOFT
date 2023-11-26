import 'package:poo/domain/pessoa.dart';
import 'cargo.dart';

class Funcionario extends Pessoa {
  String? matricula;
  Cargo? cargo;

  /* da pra instanciar desta forma mais bruta */
  /* Funcionario(String nome, int idade, this.matricula) : super(nome, idade);*/
  /* mas a fim de instanciar de uma forma mais limpa o dart possibilita que instanciamos desta forma */

  Funcionario(super.nome, super.idade, this.matricula, this.cargo);
}
