% Fatos

passaro(joao).
peixe(pedro).
minhoca(maria).
gato(chuck_noris).

% Fatos específicos para Chuck Noris
nome_gato(chuck_noris, "Chuck Noris").
meu_gato(chuck_noris).

% Fatos adicionais
pessoa(joao). 
amigo(gato, pessoa).


% gosta
gosta(passaro, minhoca).
gosta(gato, peixe).
gosta(gato, passaro).


come(gato, Y) :-
    gosta(gato, Y),
    Y \= pessoa.


