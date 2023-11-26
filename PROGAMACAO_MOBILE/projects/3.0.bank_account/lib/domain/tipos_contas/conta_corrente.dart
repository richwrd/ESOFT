import 'package:bank_account/domain/pessoa.dart';
import 'package:bank_account/domain/conta.dart';

class ContaCorrente extends Conta {
  Pessoa titular;

  ContaCorrente({
    required super.numeroConta,
    required this.titular,
    required super.saldo,
  });
}
