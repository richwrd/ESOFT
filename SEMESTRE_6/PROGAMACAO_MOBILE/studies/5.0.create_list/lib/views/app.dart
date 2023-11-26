import 'package:crud/views/home.dart';
import 'package:flutter/material.dart';

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Directionality(
        textDirection: TextDirection.ltr,
        child: MaterialApp(
          title: 'Aplicações',
          theme: ThemeData(
            colorScheme: ColorScheme.fromSwatch(
              backgroundColor: Colors.grey.shade100,
              primarySwatch: Colors.blue,
              accentColor: Colors.green,
            ),
          ),
          home: const Home(),
        ),
      ),
    );
  }
}
