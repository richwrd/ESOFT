import 'package:bank_account/domain/empresa.dart';
import 'package:bank_account/domain/conta.dart';

class ContaEmpresarial extends Conta {
  Empresa empresa;

  ContaEmpresarial({
    required super.numeroConta,
    required this.empresa,
    required super.saldo,
  });
}
