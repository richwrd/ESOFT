nota(joao,5.0).
nota(maria,6.0).
nota(joana,8.0).
nota(mariana,9.0).
nota(cleuza,8.5).
nota(jose,6.5).
nota(jaoquim,4.5).
nota(mara,4.0).
nota(mary,10.0).

status(X, Y) :-
    X >= 7.0 -> Y = aprovado;
    X >= 5.0 -> Y = recuperacao;
    X >= 0.0 -> Y = reprovado.
    
situacao(X, Z) :-
    nota(X, Y),
    status(Y, Z).