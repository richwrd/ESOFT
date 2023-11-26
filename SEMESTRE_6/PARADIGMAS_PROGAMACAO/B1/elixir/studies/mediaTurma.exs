# ignorar notas 0 com filter, filtrar somente as notas maiores que 0
# map pra extrair todas as notas dos alunos em uma unica lista
# utilizar o reduce para calcular a média
# flat_map


defmodule Exercicio do 
    #  filtrar registros inválidos
  def calcular_media(n) do

      # filter -> _nome (_) significa que o valor será ignorado
    notas_validas = Enum.filter(n, fn {_nome, notas} -> length(notas) > 0 end)

      # flat_map transforma a matriz de notas em um ARRAY 
    todas_notas = Enum.flat_map(notas_validas, fn {_nome, notas} -> notas end)
    qt_notas = length(todas_notas)

      # soma todas notas 
      # 0 pega o acumulador (index 0)
      # soma_notas = Enum.reduce(todas_notas, 0, fn x, acc -> x + acc end)
      soma_notas = Enum.reduce(todas_notas, 0, &(&1 +&2))
    
    if qt_notas > 0 do
      media = Float.round(soma_notas / qt_notas, 2)
      {:ok, media}
    else 
      {:error, "Nenhuma nota válida encontrada"}
    end 
    
  end
end


notas_da_turma = [
  {"Alice Maravilha", [9.5, 8.0, 7.5]},
  {"Joao Pedrero", [9.5, 8.0, 7.5]},
  {"Jorgin Maloca", []},
  {"Richard Software", [9.5, 9.8, 8]}
]

resultado = Exercicio.calcular_media(notas_da_turma)


# transformar tudo em função
