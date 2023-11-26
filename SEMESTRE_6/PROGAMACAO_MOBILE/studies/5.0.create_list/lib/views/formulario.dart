import 'package:crud/model/produto.dart';
import 'package:flutter/material.dart';

class Formulario extends StatefulWidget {
  const Formulario({super.key});

  @override
  State<Formulario> createState() => _FormularioState();
}

class _FormularioState extends State<Formulario> {
  TextEditingController nomeController = TextEditingController();
  TextEditingController precoController = TextEditingController();
  List<Produto> produtos = [];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Cadastro de Produtos'),
        backgroundColor: Colors.orange,
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          TextField(
            controller: nomeController,
            decoration: const InputDecoration(
              border: OutlineInputBorder(),
              labelText: 'Nome',
              hintText: 'Escreva o Nome do produto',
            ),
          ),
          TextField(
            controller: precoController,
            decoration: const InputDecoration(
              border: OutlineInputBorder(),
              labelText: 'Preço',
              hintText: 'Escreva o Preço do produto',
            ),
          ),
          ElevatedButton(
              onPressed: () {
                Produto novoProduto = Produto(
                    nome: nomeController.text, preco: precoController.text);

                nomeController.clear();
                precoController.clear();
                Navigator.pop(context, novoProduto);
              },
              child: const Icon(Icons.save)),
        ],
      ),
    );
  }
}
