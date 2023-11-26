
# /*----------------------------------------------------------------*/

defmodule Functions do
  def ascOrderVerify(array) do
      order_array = Enum.sort(array)
      array == order_array
  end
end 

array = [4, 2, 8, 1, 5, 3, 7, 6]
array = []

resultado = Functions.ascOrderVerify(array)

IO.inspect(resultado) 

# ---------------------------------------------------- 
#  FUNCAO PROFESSOR 

# tail -> recursão (tudo menos o RED da lista (cabeça), ou seja final do array)

defmodule Function do

  
  # verifica se o array é vazio
  def asc_order([]), do: true

  # verifica se o array possui 1 elemento
  def asc_order([_]), do: true

  # ex: TAIL = [1,2,3,4,5] -> compara -> [2,3] , [3,4] , [4,5] == true
  def asc_order([a,b | tail]) when a <= b, do: asc_order(tail)

  def asc_order(_), do: false

  
end 