# ---------------------------------------------------- 

defmodule Functions do

  def ascOrderVerify(array) do
      #order_array = Enum.sort(array)
      order_array = Enum.map(array, fn(x) -> x * 2 end)
  end

end 


# tail -> recursão (tudo menos o RED da lista (cabeça), ou seja final do array)
defmodule Function do
  
  # verifica se o array é vazio
  def multipli([]), do: true

  # verifica se o array possui 1 elemento
  def multipli([_]), do: true

  # ex: TAIL = [1,2,3,4,5] -> compara -> [2,3] , [3,4] , [4,5] == true
  def multipli([a,b | tail]) when a  b, do: asc_order(tail)

  def multipli(_), do: false
end 