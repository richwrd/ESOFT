import 'package:revisao/domain/pessoa.dart';
import 'package:revisao/domain/produto.dart';
import 'package:revisao/domain/enum/status_pedido.dart';

class Pedido {
  Pessoa? cliente;
  List<Produto> produtos;
  StatusPedido status;

  double? valorTotal;

  Pedido({
    this.cliente,
    required this.produtos,
    required this.status,
  });

  double getValorTotal() {
    /* utilizei a variavel item para poder acessar o valor dos produtos */
    for (var item in produtos) {
      valorTotal = (valorTotal ?? 0) + item.valor;
    }
    return valorTotal ?? 0;

    /* return produtos.fold(0.0, (previousValue, element) => previousValue + element.valor) */
  }

  int getQuantidadeProdutos() {
    return produtos.length;
  }
}
