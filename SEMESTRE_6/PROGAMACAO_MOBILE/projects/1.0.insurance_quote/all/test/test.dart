import 'package:all/domain/seguro.dart';
import 'package:test/test.dart';
import 'package:all/domain/automovel.dart';
import 'package:all/domain/motorista.dart';
import 'package:all/enums/estacionamento.dart';
import 'package:all/enums/estado_civil.dart';
import 'package:all/enums/tipo_automovel.dart';
import 'package:all/services/calculadora_seguro.dart';

void main() {
  test('Deve calcular motorista solteiro sem estacionamento', () {
    Automovel automovel = Automovel(
      fipe: 45000.0,
      tipo: TipoAutomovel.passeio,
    );

    Motorista fabio = Motorista(
      matricula: 10,
      nome: "Fabio",
      idade: 43,
      estadoCivil: EstadoCivil.casado,
      automovel: automovel,
      estacionamento: Estacionamento.portaoManual,
    );

    // Criando o SEGURO
    final seguro = Seguro.automovel(motorista: fabio);

    CalculadoraSeguro calculadoraSeguro = CalculadoraSeguro();

    double? resultado = calculadoraSeguro.calcularAutomovel(seguro);

    expect(resultado, 9000.0);
  });

  test('SECOND test', () {
    Automovel carro = Automovel(
      fipe: 80000.0,
      tipo: TipoAutomovel.passeio,
    );

    Motorista eduardo = Motorista(
      matricula: 12,
      nome: "Eduardo",
      idade: 20,
      estadoCivil: EstadoCivil.solteiro,
      automovel: carro,
      estacionamento: Estacionamento.portaoAutomatico,
    );

    // Criando o SEGURO
    final seguro = Seguro.automovel(motorista: eduardo);

    CalculadoraSeguro calculadoraSeguro = CalculadoraSeguro();

    double? resultado = calculadoraSeguro.calcularAutomovel(seguro);

    expect(resultado, 15280);
  });
}
