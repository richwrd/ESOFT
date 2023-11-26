enum TipoAutomovel {
  passeio(percentual: 1.12),
  passeioProfissional(percentual: 1.143),
  transporte(percentual: 1.135),
  carga(percentual: 1.08);

  final double percentual;

  const TipoAutomovel({required this.percentual});
}
