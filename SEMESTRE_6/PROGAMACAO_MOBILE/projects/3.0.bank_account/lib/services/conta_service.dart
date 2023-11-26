import 'package:bank_account/domain/conta.dart';
import 'package:bank_account/domain/transacao.dart';
import 'package:bank_account/domain/enums/tipo_transacao.dart';

class ContaService {
  static double extratoSaldo(Conta conta) {
    return conta.saldo;
  }

  static bool realizarTransacao(Conta conta, Transacao transacao) {
    if (transacao.tipo == TipoTransacao.deposito) {
      conta.saldo = conta.saldo + transacao.valor;

      conta.extrato.add(transacao);
      return true; // APROVADA
    } else if (transacao.tipo == TipoTransacao.pagamento) {
      if (conta.saldo < transacao.valor) {
        return false; // REPROVADA
      }
      conta.saldo = conta.saldo - transacao.valor;
      conta.extrato.add(transacao);
      return true; // APROVADA
    }
    return false; // REPROVADA (caso não entre em algum dos if's)
  }

  static List<Transacao> extratoPorPeriodo(
      Conta conta, DateTime inicio, DateTime fim) {
    List<Transacao> transacoesPeriodo = [];

    /* var transacao percorre todo o extrato */
    for (var transacao in conta.extrato) {
      /* verifica a data se está no intervalo solicitado e adiciona na lista criada */
      if (transacao.data.isAfter(inicio) && transacao.data.isBefore(fim)) {
        transacoesPeriodo.add(transacao);
      }
    }

    return transacoesPeriodo;
  }

  static bool realizarAplicacao(Conta conta, Transacao aplicacao) {
    if (conta.saldo < aplicacao.valor) {
      return false; // REPROVADA
    } else {
      conta.saldo = conta.saldo - aplicacao.valor;
      conta.aplicacao.add(aplicacao);
      return true; // APROVADA
    }
  }

  static double valorAplicacoes(Conta conta) {
    double valorTotal = 0;

    for (var aplicacoes in conta.aplicacao) {
      valorTotal = valorTotal + aplicacoes.valor;
    }

    return valorTotal;
  }
}
