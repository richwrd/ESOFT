int arredondaMedia(int nota, int multiplo) {
  if (nota >= 38) {
    var restoMultiplo = nota % multiplo;
    var result = multiplo - restoMultiplo;

    if (result < 3) {
      return nota - restoMultiplo + multiplo;
    }
  }
  /* caso nao caia no if retorna a nota */
  return nota;
}

/* ________________________________________________________________ */

bool isAprovado(int media) {
  return media >= 60 ? true : false;
}

/* ________________________________________________________________ */
/* 
bool isAprovado(int media) {
  if (media >= 60) {
    print("aprovado");
    return true;
  } else {
    print("reprovado");
    return false;
  }
}
*/
/* ________________________________________________________________ */

int media(List<int> medias) {
  if (medias.isEmpty) return 0;

  double resultado =
      medias.reduce((value, element) => value + element) / medias.length;

  return resultado.toInt();
}

/* ________________________________________________________________ */

void calculaMedia(Map<String, Map<String, List<int>>> alunos) {}

void calculaMediaAlunos(Map<String, Map<String, List<int>>> alunos) {
  alunos.forEach((keyNomeDisciplina, value) {
    print('Nome do aluno: $keyNomeDisciplina');

    value.forEach((disciplina, notas) {
      print('Disciplina: $disciplina');

      int soma = media(notas);

      print('Média: $soma');

      int arredondado = arredondaMedia(soma, 5);

      bool aprovado = isAprovado(arredondado);

      if (aprovado) {
        print('Aprovado!');
      }
    });
  });
}
