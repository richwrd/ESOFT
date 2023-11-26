import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  const Home({super.key});

  /* BUILDContext 
  e Object  */

  @override
  Widget build(BuildContext context) {
    // area total da tela
    return Scaffold(
      appBar: AppBar(
        centerTitle: true, // centraliza no meio
        /* precisa de uma classe para poder declarar o texto */
        title: const Text(
          'Playground',
          // para pintar o texto
          style: TextStyle(
            color: Color.fromRGBO(255, 255, 255, 1.0),
          ),
        ),
        backgroundColor: Theme.of(context).colorScheme.onSurface,
      ),
      body: const Text(
        'Fabio Lopes Nascimento',
        style: TextStyle(
          color: Color.fromRGBO(0, 0, 0, 1.0),
        ),
      ),
    );
  }
}
