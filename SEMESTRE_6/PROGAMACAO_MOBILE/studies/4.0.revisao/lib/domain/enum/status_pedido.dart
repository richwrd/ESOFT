enum StatusPedido {
  valorDefault(sigla: "I"),
  aguardandoPagamento(sigla: "AP"),
  processandoPagamento(sigla: "PP"),
  pago(sigla: "P");

  final String sigla;

  const StatusPedido({required this.sigla});
}
