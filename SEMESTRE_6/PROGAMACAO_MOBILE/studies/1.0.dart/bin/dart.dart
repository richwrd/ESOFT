import 'package:dart/dart.dart' as dart;

void main(List<String> arguments) {
  /* dynamic tipoDinamico */
  dynamic tipoDinamico = 'Joaquim';

  tipoDinamico = 2;

  /* variavel */
  var nome = 'eduardo';

  /* tipo de dado string */
  String sobrenome = 'Richard';

  /* TIPO DE DADO QUE PODE SER NULO */
  String? nomeComNull;

  print("Meu nome é: ${nome.toUpperCase()} $sobrenome \n");

  print(tipoDinamico);
  print(nomeComNull);
/* para criar uma variavel fora do metodo utiliza LATE */
}
