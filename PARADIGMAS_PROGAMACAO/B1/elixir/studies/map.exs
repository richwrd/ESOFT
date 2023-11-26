lista = [1,2,3,4,5]
nova_lista = Enum.map(lista, fn item -> item * 2 end) 

IO.inspect(nova_lista)


