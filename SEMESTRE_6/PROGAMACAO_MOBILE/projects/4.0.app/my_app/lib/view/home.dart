import 'package:flutter/material.dart';
import 'package:my_app/view/form_produto.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  List<Map<String, String>> produtos = [];

  void _cadastrarProdutos() async {
    Map<String, String> produtosNovos = await Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => const FormProduct()),
    );

    setState(() {
      produtos.add(produtosNovos);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Directionality(
        textDirection: TextDirection.ltr,
        child: Scaffold(
          appBar: AppBar(
            title: const Text('Minha Lojinha'),
          ),
          body: Center(
              child: Column(
            mainAxisAlignment:
                MainAxisAlignment.start, // alinha no topo da tela
            children: [
              Align(
                  alignment: Alignment.topLeft,
                  child: Padding(
                    padding: const EdgeInsets.all(15.0),
                    child: ElevatedButton(
                        onPressed: _cadastrarProdutos,
                        child: const Text('Cadastrar Produto')),
                  )),
              const SizedBox(height: 15),
              const Align(
                alignment: Alignment.topLeft,
                child: Padding(
                  padding: EdgeInsets.all(15.0),
                  child: Text('Produtos Cadastrados'),
                ),
              ),
              Expanded(
                child: ListView.builder(
                    itemCount: produtos.length,
                    itemBuilder: (context, index) {
                      return ListTile(
                        title: Text('${produtos[index]['nome']}'),
                        subtitle: Text('${produtos[index]['preco']}'),
                      );
                    }),
              ),
            ],
          )),
        ));
  }
}
