import 'package:revisao/domain/endereco.dart';

class Pessoa {
  String nome;
  String documento;
  String? telefone;
  String? email;

  Endereco? endereco;

  Pessoa({
    required this.nome,
    required this.documento,
    this.telefone,
    this.email,
    this.endereco,
  });
}
