import 'package:flutter/material.dart';
import 'package:my_app/view/home.dart';

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData.from(
          colorScheme: ColorScheme.fromSwatch(
              backgroundColor: Colors.white,
              primarySwatch: Colors.lightGreen,
              accentColor: Colors.green)),
      home: const Home(),
    );
  }
}
