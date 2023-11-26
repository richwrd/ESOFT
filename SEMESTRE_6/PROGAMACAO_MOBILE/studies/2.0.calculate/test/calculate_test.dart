import 'package:calculate/calculate.dart';
import 'package:test/test.dart';

void main() {
  test('deve ser arredondado', () {
    expect(arredondaMedia(84, 5), 85);
    expect(arredondaMedia(29, 5), 29);
    expect(arredondaMedia(91, 5), 91);
    expect(arredondaMedia(99, 5), 100);
  });

  test('aprovado', () {
    expect(isAprovado(80), true);
  });

  test('teste media', () {
    expect(media([]), 0);
    expect(media([80, 45, 86]), 70);
    expect(media([78, 94, 41]), 71);
    expect(media([87, 91, 47]), 75);
  });
}
