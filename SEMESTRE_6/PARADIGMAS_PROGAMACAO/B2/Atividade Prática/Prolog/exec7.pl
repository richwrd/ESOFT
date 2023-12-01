% A - adiciona(X,L1,L2) onde X é o elemento que será adicionado na lista L1. L2 é a lista retornada.


adiciona(X, L1, L2) :-
    L2 = [X | L1].

% ?- adiciona(3, [1, 2], L2).
% L2 = [3, 1, 2].



% --------------------------------------------------------------------------------------
% --------------------------------------------------------------------------------------
% B - remover(X, L1, L2) - onde X é o elemento que deve ser removido da lista L1. L2 é a lista resultante sem o elemento X

% remover/3
remover(_, [], []).
remover(X, [X | Tail], L2) :-
    remover(X, Tail, L2).
remover(X, [Head | Tail], [Head | L2]) :-
    X \= Head,
    remover(X, Tail, L2).


% Exemplo de consulta:
% remover(3, [1, 2, 3, 4, 3, 5], L2).
% Resultado: L2 = [1, 2, 4, 5].


% --------------------------------------------------------------------------------------
% --------------------------------------------------------------------------------------
% C - inverte(L1, L2) - onde L1 é a lista que deve ser invertida e L2 é a lista resultant

% inverte/2
inverte([], []).
inverte([X | Resto], InvertedList) :-
    inverte(Resto, RestoInvertido),
    reverse_and_append(RestoInvertido, X, InvertedList).

% reverse_and_append/3
reverse_and_append([], Element, [Element]).
reverse_and_append([H | T], Element, [H | Result]) :-
    reverse_and_append(T, Element, Result).

% consulta:
% inverte([1, 2, 3, 4], ListaInvertida).
% ListaInvertida = [4, 3, 2, 1].



% --------------------------------------------------------------------------------------
% --------------------------------------------------------------------------------------
% D - tamanho(L1, X) - onde X deve retornar o tamanho (numero de elementos da lista L1).


tam([], 0).

tam([_|Rest], X) :-
    tam(Rest, TamRest),
    X is TamRest + 1.

% tam([1, 2, 3, 4, 5, 6], X).
% X = 6


% --------------------------------------------------------------------------------------
% --------------------------------------------------------------------------------------

% E - soma(L1, X) - onde X deve retornar a soma de todos os elementos da lista L1.


soma([], 0).
soma([B|A], X) :-
    soma(A, RestSoma),
    X is B + RestSoma.


% soma([1, 5, 88, 25], X).
% X = 119