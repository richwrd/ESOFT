enum Estacionamento {
  portaoAutomatico(percentual: 0.955),
  portaoManual(percentual: 0.98),
  nenhumPortao(percentual: 1);

  final double percentual;

  const Estacionamento({required this.percentual});
}
