import 'package:flutter/material.dart';
import 'package:my_app/components/inputs.dart';

class FormProduct extends StatefulWidget {
  const FormProduct({super.key});

  @override
  State<FormProduct> createState() => _FormProductState();
}

class _FormProductState extends State<FormProduct> {
  final TextEditingController ctrlNome = TextEditingController();
  final TextEditingController ctrlPreco = TextEditingController();

  void _salvarProduto() {
    String nome = ctrlNome.text;
    String preco = ctrlPreco.text;

    Navigator.of(context).pop({'nome': nome, 'preco': preco});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Cadastro de Produtos'),
      ),
      body: SingleChildScrollView(
          child: Column(
        children: [
          InputsField(
              controller: ctrlNome,
              label: "Nome",
              hint: "Digite o titulo do produto"),
          InputsField(
              controller: ctrlPreco,
              label: "Preço",
              hint: "Digite o preço do produto"),
          ElevatedButton(
            onPressed: _salvarProduto,
            child: const Text('Salvar'),
          )
        ],
      )),
    );
  }
}
