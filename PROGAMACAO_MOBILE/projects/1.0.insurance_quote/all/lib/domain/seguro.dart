import 'package:all/domain/motorista.dart';

class Seguro {
  Motorista? motorista;

  Seguro.automovel({required this.motorista});

  String printApolice() {
    return "Matricula: ${motorista?.matricula} \n Nome: ${motorista?.nome} \n Idade: ${motorista?.idade} \n Estado Civil: ${motorista?.estadoCivil} \n Valor Automóvel: ${motorista?.automovel.fipe} \n Tipo Automóvel: ${motorista?.automovel.tipo} \n Estacionamento: ${motorista?.estacionamento}";
  }
}
