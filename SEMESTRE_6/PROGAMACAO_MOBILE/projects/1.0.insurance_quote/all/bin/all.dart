import 'package:all/domain/automovel.dart';
import 'package:all/domain/motorista.dart';
import 'package:all/domain/seguro.dart';
import 'package:all/enums/estacionamento.dart';
import 'package:all/enums/estado_civil.dart';
import 'package:all/enums/tipo_automovel.dart';
import 'package:all/services/calculadora_seguro.dart';

void main() {
  // Criando o automovel
  final automovel = Automovel(
    fipe: 80000,
    tipo: TipoAutomovel.passeio,
  );

  // Criando Motorista
  final motorista = Motorista(
    matricula: 10,
    nome: "Fabio",
    idade: 43,
    estadoCivil: EstadoCivil.solteiro,
    automovel: automovel,
    estacionamento: Estacionamento.portaoAutomatico,
  );

  // Criando o SEGURO
  final seguro = Seguro.automovel(motorista: motorista);

  CalculadoraSeguro calculadoraSeguro = CalculadoraSeguro();

  double? resultado = calculadoraSeguro.calcularAutomovel(seguro);

  //print('TIPO Automovel: R\$ ${seguro.motorista?.automovel.tipo}');
  //print('FIPE Automovel: R\$ ${seguro.motorista?.automovel.fipe}');
  //print('Estacionamento Automovel: R\$ ${seguro.motorista?.estacionamento}');
  //print('Nome Responsável: R\$ ${seguro.motorista?.nome}');
  //print('Nome Responsável: R\$ ${seguro.motorista?.estadoCivil}');
  print('Valor TOTAL do SEGURO: R\$ $resultado');
}
