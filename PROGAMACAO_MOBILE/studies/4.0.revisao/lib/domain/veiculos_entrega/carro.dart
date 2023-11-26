import 'package:revisao/domain/veiculos_entrega/veiculo.dart';

class Carro implements Veiculo {
  @override
  double calculoConsumo(double distancia) {
    return (distancia + 5) / 2;
  }
}
