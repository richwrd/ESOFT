% FATOS (TABELA)
filme(amnesia, suspense, nolan, 2000, 113).
filme(babel, drama, inarritu, 2006, 142).
filme(capote, drama, miller, 2005, 98).
filme(casablanca, romance, curtiz, 1942, 102).
filme(matrix, ficcao, wachowsk, 1999, 136).
filme(rebecca, suspense, hitchcock, 1940, 130).
filme(shrek, aventura, adamson, 2001, 90).
filme(sinais, ficcao, shymalan, 2002, 106).
filme(spartacus, acao, kubrik, 1960, 184).
filme(superman, aventura, donner, 1978, 143).
filme(titanic, romance, cameron, 1997, 194).
filme(tubarao, suspense, spilberg, 1975, 124).
filme(volver, drama, almodovar, 2006, 121).



% -----------------------------
% Quem dirigiu o filme Titanic?
% ----------------------------- 
questaoA(X) :-
    filme(titanic, A, X, B, C).


% -----------------------------
% Quais são os filmes de suspense?
% ----------------------------- 
questaoB(X) :-
    filme(X, suspense, A, B, C).


% -----------------------------
% Quais os filmes dirigidos por Donner?
% ----------------------------- 
questaoC(X) :-
    filme(X, A, donner, B, C).
% -----------------------------


% -----------------------------
% Em que ano foi lançado o filme Sinais?
% ----------------------------- 
questaoD(X) :-
    filme(sinais, A, B, X, C).
% -----------------------------


% -----------------------------
% Em que ano foi lançado o filme Sinais?
% ----------------------------- 
questaoE(X) :-
    filme(X, A, B, C, D),
    D < 100.
% -----------------------------


% -----------------------------
% Quais os filmes com duração inferior a 100min?
% ----------------------------- 
questaoF(X) :-
    filme(X, A, B, C, D),
    C >= 2000,
    C < 2006.
% -----------------------------


% -----------------------------
classico(X) :-
    filme(X, A, B, C, D),
    C < 1980.

% -----------------------------
genero(X, Y) :-
    filme(Y, X, B, C, D).

% -----------------------------
classico_suspense(X) :-
    classico(X),
    genero(suspense, X).