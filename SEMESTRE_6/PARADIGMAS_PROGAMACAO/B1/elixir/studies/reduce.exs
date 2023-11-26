lista = [1,2,3,4,5]

soma = Enum.reduce(lista, 0, fn x, acc -> x + acc end)
