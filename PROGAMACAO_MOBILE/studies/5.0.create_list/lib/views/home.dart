import 'package:crud/model/produto.dart';
import 'package:crud/views/formulario.dart';
import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  List<Produto> produtos = [Produto(nome: 'Produto 1', preco: '1000.00')];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Produtos'),
        backgroundColor: Colors.green,
      ),
      body: Column(
        children: [
          Expanded(
            child: ListView(
              children: produtos
                  .map(
                    (item) => Card(
                      child: ListTile(
                        title: Text(item.nome),
                        subtitle: Text(item.preco),
                      ),
                    ),
                  )
                  .toList(), // lista todos os produtos
            ),
          ),
          ElevatedButton(
              onPressed: () async {
                final novoProduto = await Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => const Formulario(),
                  ),
                );

                if (novoProduto != null) {
                  setState(() {
                    produtos.add(novoProduto);
                  });
                }
              },
              child: const Icon(Icons.add))
        ],
      ),
    );
  }
}
