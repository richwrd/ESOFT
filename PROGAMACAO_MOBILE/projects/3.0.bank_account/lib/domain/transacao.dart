import 'package:bank_account/domain/enums/tipo_transacao.dart';

class Transacao {
  double valor;
  String descricao;
  DateTime data;

  TipoTransacao tipo;

  Transacao({
    required this.valor,
    required this.tipo,
    required this.descricao,
    required this.data,
  });
}
