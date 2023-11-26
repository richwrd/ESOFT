class Empresa {
  String cnpj;
  String razaoSocial;
  String? nomeFantasia;

  Empresa({
    required this.cnpj,
    required this.razaoSocial,
    this.nomeFantasia,
  });
}
