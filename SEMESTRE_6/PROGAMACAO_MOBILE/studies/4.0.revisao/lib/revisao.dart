import 'package:revisao/domain/endereco.dart';
import 'package:revisao/domain/pedido.dart';
import 'package:revisao/domain/pessoa.dart';
import 'package:revisao/domain/produto.dart';
import 'package:revisao/domain/enum/status_pedido.dart';

void main() {
  Pessoa eduardoCliente = Pessoa(
    nome: "Eduardo Richard",
    documento: "5846651",
    telefone: "8878784",
    email: "@gmail.com",
    endereco: Endereco(
        cep: "89855",
        numero: 22,
        logradouro: "Rua francisco",
        complemento: "Sobreloja",
        bairro: "Esperança"),
  );

  Produto produto1 = Produto(
    nome: "Camisa Social",
    descricao: "Tamanho G",
    valor: 130,
    serie: "Nova",
  );

  Produto produto2 = Produto(
    nome: "Calça Social",
    descricao: "Tamanho 38",
    valor: 160,
    serie: "Nova",
  );

  Produto produto3 = Produto(
    nome: "Jaqueta Couro",
    descricao: "Tamanho G",
    valor: 600,
    serie: "Nova",
  );

  Pedido pedido = Pedido(
    cliente: eduardoCliente,
    produtos: [produto1, produto2, produto3],
    status: StatusPedido.valorDefault,
  );

  double resultado = pedido.getValorTotal();

  print(resultado);
}
