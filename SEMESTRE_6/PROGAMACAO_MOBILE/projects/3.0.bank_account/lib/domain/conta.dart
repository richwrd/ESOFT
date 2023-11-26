import 'package:bank_account/domain/transacao.dart';

class Conta {
  int numeroConta;
  double saldo = 0;

  /* lista de todas transações da conta iniciada */
  List<Transacao> extrato = [];

  /* lista de todas aplicações da conta iniciada */
  List<Transacao> aplicacao = [];

  Conta({
    required this.numeroConta,
    required this.saldo,
  });
}
