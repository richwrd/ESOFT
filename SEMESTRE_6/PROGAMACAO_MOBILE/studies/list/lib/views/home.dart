import 'package:flutter/material.dart';
import 'package:list/models/produto.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  List<Produtos> produtos = [];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(title: const Text('SEJA BEM VINDO!')),
        body: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Expanded(
              child: ListView(
                children: produtos
                    .map((item) => Card(
                          child: ListTile(
                            title: Text(item.nome),
                            subtitle: Text(item.preco),
                          ),
                        ))
                    .toList(),
              ),
            ),
            ElevatedButton(
                onPressed: () async {
                  final novoProduto = await Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => const Formulario()));

                  if (novoProduto != null) {
                    setState(() {
                      produtos.add(novoProduto);
                    });
                  }
                },
                child: const Icon(Icons.add)),
          ],
        ));
  }
}
