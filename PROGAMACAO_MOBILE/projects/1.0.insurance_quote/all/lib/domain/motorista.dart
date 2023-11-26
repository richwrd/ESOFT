import 'package:all/domain/automovel.dart';
import 'package:all/domain/pessoa.dart';
import 'package:all/enums/estacionamento.dart';

class Motorista extends Pessoa {
  final Automovel automovel;
  final Estacionamento estacionamento;

  Motorista({
    super.matricula,
    super.nome,
    super.idade,
    required super.estadoCivil,
    required this.automovel,
    required this.estacionamento,
  });
}
