% FATOS
mulher(cassia).
mulher(ana).
homem(marcos).
homem(fabiano).
homem(silvio).
bonito(cassia).
bonito(marcos).
bonito(fabiano).
rico(marcos).
rico(ana).
forte(ana).
forte(fabiano).
forte(silvio).
amavel(silvio).

% -----------------------------

gosta(X, Y) :-
    homem(X),
    mulher(Y),
    bonito(Y).

gosta(ana, X) :-
    homem(X),
    gosta(X, ana).

gosta(cassia, X) :-
    homem(X),
    gosta(X, cassia),
    rico(X),
    forte(X),
    (amavel(X); bonito(X)).

% -----------------------------

feliz(X) :-
    homem(X),
    gosta(X, Y),
    gosta(Y, X).

feliz(X) :-
    mulher(X),
    gosta(X, Y),
    gosta(Y, X).

feliz(X) :-
    homem(X),
    rico(X).
