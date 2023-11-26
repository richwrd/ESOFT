lista = [1,2,3,4,5,6,7,8,9,10]

pares = Enum.filter(lista, fn item -> rem(item, 2) == 0 end)

IO.puts(&pares)