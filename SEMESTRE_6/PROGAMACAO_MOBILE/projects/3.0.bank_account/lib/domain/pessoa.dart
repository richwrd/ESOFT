import 'package:bank_account/domain/enums/estado_civil.dart';

/* classe abstrata não pode ser declarada direta, apenas implementada como um contrato */
class Pessoa {
  String cpf;
  String nomecompleto;
  int? idade;

  /* chama enum Estado Civil */
  EstadoCivil estadoCivil;

  /* construtor */
  Pessoa({
    required this.cpf,
    this.idade,
    required this.nomecompleto,
    required this.estadoCivil,
  });
}
