import 'package:revisao/domain/endereco.dart';
import 'package:revisao/domain/pedido.dart';
import 'package:revisao/domain/pessoa.dart';
import 'package:revisao/domain/produto.dart';
import 'package:revisao/domain/enum/status_pedido.dart';
import 'package:revisao/domain/veiculos_entrega/moto.dart';
import 'package:revisao/services/calcula_entrega.dart';
import 'package:test/test.dart';

void main() {
  test('Teste 1 - Quantidade Produtos', () {
    Pessoa eduardoCliente = Pessoa(
      nome: "Eduardo Richard",
      documento: "5846651",
      telefone: "4499707733",
      email: "dudurichard07@gmail.com",
      endereco: Endereco(
          cep: "87350652",
          numero: 22,
          logradouro: "Rua Gisele Gomes",
          complemento: "Sobreloja",
          bairro: "Jardim Liberdade"),
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

    int resultado = pedido.getQuantidadeProdutos();

    expect(resultado, 3);
  });

  test('Teste 2 - Valor Total', () {
    Pessoa eduardoCliente = Pessoa(
      nome: "Eduardo Richard",
      documento: "5846651",
      telefone: "4499707733",
      email: "dudurichard07@gmail.com",
      endereco: Endereco(
          cep: "87350652",
          numero: 22,
          logradouro: "Rua Gisele Gomes",
          complemento: "Sobreloja",
          bairro: "Jardim Liberdade"),
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

    expect(resultado, 890);
  });

  test('Teste 3 - Veiculos Implements', () {
    double calc = CalculaEntrega().consumoTotal(Moto());

    expect(calc, 0);
  });
}
