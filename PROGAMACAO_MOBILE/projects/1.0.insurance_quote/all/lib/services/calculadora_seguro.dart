import 'package:all/domain/seguro.dart';

class CalculadoraSeguro {
  double? calcularAutomovel(Seguro seguro) {
    double valorFipe = seguro.motorista!.automovel.fipe;

    double valorAutomovel = (seguro.motorista!.automovel.fipe *
            seguro.motorista!.automovel.tipo.percentual) -
        valorFipe;

    //fix para numeros quebrados
    valorAutomovel = double.parse(valorAutomovel.toStringAsFixed(2));

    double valorEstadocivil =
        (valorFipe * seguro.motorista!.estadoCivil.percentual) - valorFipe;

    //fix para numeros quebrados
    valorEstadocivil = double.parse(valorEstadocivil.toStringAsFixed(2));

    double valorSeguro = valorAutomovel + valorEstadocivil;

    //calcula desconto estacionamento
    return (valorSeguro * seguro.motorista!.estacionamento.percentual);
  }
}
