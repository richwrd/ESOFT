import 'package:flutter/material.dart';

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Directionality(
        textDirection: TextDirection.ltr,
        child: MaterialApp(
            title: 'APP',
            theme: ThemeData(
                colorScheme: ColorScheme.fromSwatch(
                    primarySwatch: Colors.blue,
                    backgroundColor: Colors.grey,
                    accentColor: Colors.amber))),
        home: Home(),
      ),
    );
  }
}
