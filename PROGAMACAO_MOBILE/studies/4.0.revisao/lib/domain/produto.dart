class Produto {
  String? nome;
  String? descricao;
  double valor;
  DateTime? fabricacao;
  DateTime? validade;
  String? serie;

  Produto({
    this.nome,
    this.descricao,
    required this.valor,
    this.fabricacao,
    this.validade,
    this.serie,
  });
}
