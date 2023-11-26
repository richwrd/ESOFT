import 'package:all/view/home.dart';
import 'package:flutter/material.dart';

// classe traz um estado parado -> Estacia como Abstract
class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    // Cor principal
    return MaterialApp(
      theme: ThemeData(
        useMaterial3: true,
        colorScheme: ColorScheme.fromSeed(
          seedColor: Colors.black,
        ),
      ),
      home: const Home(),
    );
  }
}
