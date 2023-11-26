import 'package:calculate/calculate.dart' as calculate;
import 'package:calculate/domain/pessoa.dart';

void main(List<String> arguments) {
  Pessoa pessoa = Pessoa('Fábio', 25);

  Map<String, Map<String, List<int>>> alunos = {
    'Joaquim': {
      'matematica': [87, 92, 89, 72],
      'historia': [92, 96, 85, 91],
      'ciencias': [39, 36, 38, 35]
    },
    'Manuel': {
      'matematica': [61, 60, 85, 62],
      'historia': [77, 80, 75, 78],
      'ciencias': [89, 92, 75, 80]
    },
    'João': {
      'matematica': [30, 45, 67, 42],
      'historia': [35, 37, 30, 46],
      'ciencias': [73, 65, 79, 83]
    }
  };

  calculate.calculaMediaAlunos(alunos);
}
