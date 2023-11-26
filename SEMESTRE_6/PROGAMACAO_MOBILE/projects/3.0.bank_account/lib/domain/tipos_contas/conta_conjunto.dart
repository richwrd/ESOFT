import 'package:bank_account/domain/enums/estado_civil.dart';
import 'package:bank_account/domain/pessoa.dart';
import 'package:bank_account/domain/conta.dart';

class ContaConjunto extends Conta {
  List<Pessoa> titulares;

  ContaConjunto({
    required super.numeroConta,
    required this.titulares,
    required super.saldo,
  }) {
    if (titulares.length != 2) {
      throw ArgumentError(
          'A conta conjunto permite apenas 2 pessoas Casadas ou com União Estável');
    }

    // condição para barrar o construtor se o estado civil for diferente de casado e uniao estavel
    if (titulares.any((titular) =>
        titular.estadoCivil != EstadoCivil.casado &&
        titular.estadoCivil != EstadoCivil.uniaoestavel)) {
      throw ArgumentError(
          'Os titulares devem ser Casados, ou possuir união estável');
    }
  }
}
