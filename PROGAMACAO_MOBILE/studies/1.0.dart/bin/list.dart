import 'package:dart/dart.dart' as dart;

void main(List<String> arguments) {
  /*  inicia como uma lista vazia */
  //const listaCompras = ['Arroz', 'Feijão'];

  //final listaItens = ['Monitor', 'Teclado'];

  /* lista SET constraint UNIQUE */
  List<String> listaSet = ["NAO PODE DOIS"];

  listaSet.add("NAO PODE DOIS");

  /* aberta, pode adicionar quantas vezes quiser */
  List<String> listaList = ["LISTA ABERTA"];

  listaList.add("LISTA ABERTA");

  print(listaList);
  print(listaSet);

  Map<String, int> salas = {"Eduardo": 20, "Richard": 40};

  var sala2 = Map<String, String>();

  sala2 = {"NECESSITO": "MONEY"};

  print(salas);
  print(sala2);

  var listaCompras = ["Arroz", "Feijão"];

  var novaLista = ["Macarrao", listaCompras];

  print(novaLista);

  var numero = 1;

  print(++numero);
  print(numero is! int);
  //print(numero is int);
}
