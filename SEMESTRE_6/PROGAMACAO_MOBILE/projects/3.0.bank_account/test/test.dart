import 'package:bank_account/domain/empresa.dart';
import 'package:bank_account/domain/enums/estado_civil.dart';
import 'package:bank_account/domain/enums/tipo_transacao.dart';
import 'package:bank_account/domain/pessoa.dart';
import 'package:bank_account/domain/tipos_contas/conta_conjunto.dart';
import 'package:bank_account/domain/tipos_contas/conta_corrente.dart';
import 'package:bank_account/domain/tipos_contas/conta_empresarial.dart';
import 'package:bank_account/domain/tipos_contas/conta_poupanca.dart';
import 'package:bank_account/domain/transacao.dart';
import 'package:bank_account/services/conta_service.dart';
import 'package:test/test.dart';

void main() {
  test('Conta Corrente - Criação / Deposito / Pagamento [RECUSADO]', () {
    ContaCorrente contaCorrente = ContaCorrente(
      numeroConta: 111555,
      titular: Pessoa(
          cpf: "6515581",
          nomecompleto: "Eduardo Richard",
          idade: 20,
          estadoCivil: EstadoCivil.solteiro),
      saldo: 50,
    );

    Transacao transacaoDeposito = Transacao(
      valor: 10000,
      tipo: TipoTransacao.deposito,
      descricao: "Venda",
      data: DateTime.now(),
    );

    ContaService.realizarTransacao(
      contaCorrente,
      transacaoDeposito,
    );

    Transacao transacaoPagamento = Transacao(
      valor: 11000,
      tipo: TipoTransacao.pagamento,
      descricao: "Funcionario",
      data: DateTime.now(),
    );

    ContaService.realizarTransacao(
      contaCorrente,
      transacaoPagamento,
    );

    expect(contaCorrente.saldo, 10050);
  });

  test('Conta Corrente - Criação / Deposito / Pagamento [APROVADO]', () {
    ContaCorrente contaCorrente = ContaCorrente(
      numeroConta: 111555,
      titular: Pessoa(
          cpf: "6515581",
          nomecompleto: "Eduardo Richard",
          idade: 20,
          estadoCivil: EstadoCivil.solteiro),
      saldo: 50,
    );

    Transacao transacaoDeposito = Transacao(
      valor: 10000,
      tipo: TipoTransacao.deposito,
      descricao: "Venda",
      data: DateTime.now(),
    );

    ContaService.realizarTransacao(
      contaCorrente,
      transacaoDeposito,
    );

    Transacao transacaoPagamento = Transacao(
      valor: 2000,
      tipo: TipoTransacao.pagamento,
      descricao: "Funcionario",
      data: DateTime.now(),
    );

    ContaService.realizarTransacao(
      contaCorrente,
      transacaoPagamento,
    );

    expect(contaCorrente.saldo, 8050);
  });

  test('Conta Corrente - EXTRATO p/ periodo', () {
    ContaCorrente contaCorrente = ContaCorrente(
      numeroConta: 111555,
      titular: Pessoa(
          cpf: "6515581",
          nomecompleto: "Eduardo Richard",
          idade: 20,
          estadoCivil: EstadoCivil.solteiro),
      saldo: 50,
    );

    Transacao transacaoDeposito = Transacao(
      valor: 10000,
      tipo: TipoTransacao.deposito,
      descricao: "Venda",
      data: DateTime(2023, 1, 1),
    );

    ContaService.realizarTransacao(
      contaCorrente,
      transacaoDeposito,
    );

    Transacao transacaoPagamento = Transacao(
      valor: 2000,
      tipo: TipoTransacao.pagamento,
      descricao: "Funcionario",
      data: DateTime(2023, 1, 10),
    );

    ContaService.realizarTransacao(
      contaCorrente,
      transacaoPagamento,
    );

    Transacao transacaoPagamento2 = Transacao(
      valor: 3000,
      tipo: TipoTransacao.pagamento,
      descricao: "Funcionario",
      data: DateTime(2023, 2, 18),
    );

    ContaService.realizarTransacao(
      contaCorrente,
      transacaoPagamento2,
    );

    List<Transacao> extratoSolicitado = ContaService.extratoPorPeriodo(
        contaCorrente, DateTime(2023, 1, 1), DateTime(2023, 1, 20));

    // por conta da lista = array somo +1 para chegar a quantidade real.
    expect(extratoSolicitado.length + 1, 2);
  });

  test('Conta Empresarial - Criação / Deposito / Pagamento', () {
    ContaEmpresarial contaEmpresarial = ContaEmpresarial(
      numeroConta: 111555,
      empresa: Empresa(
        cnpj: "48915415651",
        razaoSocial: "Richard Shop",
      ),
      saldo: 100000,
    );

    Transacao transacaoDeposito = Transacao(
      valor: 10000,
      tipo: TipoTransacao.deposito,
      descricao: "Venda",
      data: DateTime.now(),
    );

    ContaService.realizarTransacao(
      contaEmpresarial,
      transacaoDeposito,
    );

    Transacao transacaoPagamento = Transacao(
      valor: 11000,
      tipo: TipoTransacao.pagamento,
      descricao: "Funcionario",
      data: DateTime.now(),
    );

    ContaService.realizarTransacao(
      contaEmpresarial,
      transacaoPagamento,
    );

    expect(contaEmpresarial.saldo, 99000);
  });

  test('Conta Conjunto - Criação / Deposito / Pagamento', () {
    ContaConjunto contaConjunto = ContaConjunto(
      numeroConta: 111555,
      titulares: [
        Pessoa(
          cpf: "6515581",
          nomecompleto: "Eduardo Richard",
          idade: 20,
          estadoCivil: EstadoCivil.uniaoestavel,
        ),
        Pessoa(
          cpf: "5448484",
          nomecompleto: "Eduarda",
          idade: 20,
          estadoCivil: EstadoCivil.uniaoestavel,
        )
      ],
      saldo: 100000,
    );

    Transacao transacaoDeposito = Transacao(
      valor: 10000,
      tipo: TipoTransacao.deposito,
      descricao: "Venda",
      data: DateTime.now(),
    );

    ContaService.realizarTransacao(
      contaConjunto,
      transacaoDeposito,
    );

    Transacao transacaoPagamento = Transacao(
      valor: 11000,
      tipo: TipoTransacao.pagamento,
      descricao: "Funcionario",
      data: DateTime.now(),
    );

    ContaService.realizarTransacao(
      contaConjunto,
      transacaoPagamento,
    );

    expect(contaConjunto.saldo, 99000);
  });

  test('Conta Conjunto - Diferentes estados civis (ERRO)', () {
    expect(
      () => ContaConjunto(
        numeroConta: 111555,
        titulares: [
          Pessoa(
            cpf: "6515581",
            nomecompleto: "Eduardo Richard",
            idade: 20,
            estadoCivil: EstadoCivil.solteiro,
          ),
          Pessoa(
            cpf: "5448484",
            nomecompleto: "Eduarda",
            idade: 20,
            estadoCivil: EstadoCivil.divorciado,
          )
        ],
        saldo: 100000,
      ),
      throwsA(isA<ArgumentError>()),
    );
  });

  test('Conta Conjunto - 3 Pessoas (ERRO)', () {
    expect(
      () => ContaConjunto(
        numeroConta: 111555,
        titulares: [
          Pessoa(
            cpf: "6515581",
            nomecompleto: "Eduardo Richard",
            idade: 20,
            estadoCivil: EstadoCivil.uniaoestavel,
          ),
          Pessoa(
            cpf: "5448484",
            nomecompleto: "Eduarda",
            idade: 20,
            estadoCivil: EstadoCivil.uniaoestavel,
          ),
          Pessoa(
            cpf: "5448484",
            nomecompleto: "Eduardin",
            idade: 5,
            estadoCivil: EstadoCivil.uniaoestavel,
          )
        ],
        saldo: 100000,
      ),
      throwsA(isA<ArgumentError>()),
    );
  });

  test('Conta Poupança - Criação / Deposito ', () {
    ContaPoupanca contaPoupanca = ContaPoupanca(
      numeroConta: 111555,
      titular: Pessoa(
        cpf: "6515581",
        nomecompleto: "Eduardo Richard",
        idade: 20,
        estadoCivil: EstadoCivil.solteiro,
      ),
      saldo: 50,
    );

    Transacao transacaoDeposito = Transacao(
      valor: 5000,
      tipo: TipoTransacao.deposito,
      descricao: "Venda",
      data: DateTime.now(),
    );

    ContaService.realizarTransacao(
      contaPoupanca,
      transacaoDeposito,
    );

    expect(contaPoupanca.saldo, 5050);
  });

  test('Conta Poupança - Saldo Inicial < 50 Reais (ERRO)', () {
    expect(
      () => ContaPoupanca(
        numeroConta: 111555,
        titular: Pessoa(
          cpf: "6515581",
          nomecompleto: "Eduardo Richard",
          idade: 20,
          estadoCivil: EstadoCivil.solteiro,
        ),
        saldo: 20,
      ),
      throwsA(isA<ArgumentError>()),
    );
  });

  test('Conta Corrente - Aplicação', () {
    ContaCorrente contaCorrente = ContaCorrente(
      numeroConta: 111555,
      titular: Pessoa(
          cpf: "6515581",
          nomecompleto: "Eduardo Richard",
          idade: 20,
          estadoCivil: EstadoCivil.solteiro),
      saldo: 50,
    );

    Transacao transacaoDeposito = Transacao(
      valor: 10000,
      tipo: TipoTransacao.deposito,
      descricao: "Venda",
      data: DateTime.now(),
    );

    ContaService.realizarTransacao(
      contaCorrente,
      transacaoDeposito,
    );

    Transacao transacaoAplicacao = Transacao(
      valor: 10000,
      tipo: TipoTransacao.aplicacao,
      descricao: "Cotas Petrobras",
      data: DateTime(2023, 5, 16),
    );

    ContaService.realizarAplicacao(
      contaCorrente,
      transacaoAplicacao,
    );

    double valorAplicacoes = ContaService.valorAplicacoes(contaCorrente);

    expect(valorAplicacoes, 10000);
  });
}
