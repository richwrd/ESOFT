defmodule FibonacciProfessor do
  def fibonacci(0), do: 0 # para evitar erro de sintax precisa do espaço apos do:
  def fibonacci(1), do: 1 # para evitar erro de sintax precisa do espaço apos do:
  def fibonacci(n), do: fibonacci(n-1)+fibonacci(n-2)
end

IO.puts(FibonacciProfessor.fibonacci(20))

# /*_______________________________________________________________________*/
# loop for 

defmodule LoopExample do
  def loop_example(n) when n <= limit do
    IO.puts("Fim do loop")
  end

  def loop_example(n) do
    IO.puts("Número: #{n}")
    loop_example(n - 1)
  end
end

LoopExample.loop_example(5)

# __________________________________________________________________________________________________


defmodule Fibonacci do
  def teste(0), do: 0
  def teste(1), do: 1
  def teste(t), do: teste(t-1)+teste(t-2)
end

IO.puts(Fibonacci.teste(2))