import 'package:bank_account/domain/pessoa.dart';
import 'package:bank_account/domain/conta.dart';

class ContaPoupanca extends Conta {
  Pessoa titular;

  ContaPoupanca({
    required super.numeroConta,
    required this.titular,
    required super.saldo,
  }) {
    if (super.saldo < 50) {
      throw ArgumentError("A conta deve ser criada com no mínimo R\$50");
    }
  }
}
