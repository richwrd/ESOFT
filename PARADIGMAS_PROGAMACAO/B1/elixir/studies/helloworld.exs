# criar uma função que recebe 4 parametros, 
# 1- nomeA
# 2- nomeB
# 3- idadeA
# 4- idadeB

# essa funcao deve retornar os nomes passados por parametros e exibir a idade utilizando concatenação e em uma nova linha retornar "soma das idades: " <>

defmodule Utils do 
  def ident(nomeA, nomeB, idadeA, idadeB) do

    IO.puts("\n")
    IO.puts("A - Nome: #{nomeA}, Idade: #{idadeA}")
    IO.puts("B - Nome: #{nomeB}, Idade: #{idadeB}")

    soma = idadeA+idadeB
    
    IO.puts("Soma das idades: #{soma}")
    
    # IMPRIME NO CONSOLE
    IO.puts()
  end
end

  sum(valorA,valorB) do
    
    return result
  end

# função anonima
sum = fn a, b -> a + b end

sum.(20.2)