/* abstract se trata de uma classe que pode ser somente extendida ou implementada, nao pode ser instanciada diretamente */
import 'package:all/enums/estado_civil.dart';

abstract class Pessoa {
  int? matricula;
  String? nome; /* para declarar que uma variavel pode ser nula utilizamos ?*/
  int? idade;
  EstadoCivil estadoCivil;

  Pessoa({
    this.idade,
    this.nome,
    this.matricula,
    required this.estadoCivil,
  }); /* construtor */
}

class Pessoa2 {
  Pessoa titulars;

  Pessoa2({
    required this.titulars,
  });
}
