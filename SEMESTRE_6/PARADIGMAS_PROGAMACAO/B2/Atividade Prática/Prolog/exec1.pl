% Fatos

passaro(joao).
peixe(pedro).
minhoca(maria).
gato(chuck_noris).

% gosta
gosta(passaro, minhoca).
gosta(gato, peixe).
gosta(gato, passaro).

amigos(X, Y) :- gato(X), gato(Y).

come(X, Y) :- gato(X), gosta(X, Y), not(pessoa(Y)).

% Fatos adicionais

pessoa(joao). 

% Fatos específicos para Chuck Noris

nome_gato(chuck_noris, "Chuck Noris").
meu_gato(chuck_noris).

