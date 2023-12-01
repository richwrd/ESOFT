% FATOS
ponto(1, 2).
mais(2, 2).


% ----------------------------- ponto(A, B) = ponto(1, 2) 

execA(A, B) :- 
    ponto(A, B) = ponto(1, 2).

% ?- execA(A, B).
% A = 1,
% B = 2


% ----------------------------- 2 + 2 = 4

execB() :- 
    2 + 2 =:= 4.

% ?- execB.
% true.


% ----------------------------- ponto(A, B) = ponto(X, Y, Z)

execC(A, B) :- 
    ponto(A, B) = ponto(_, _, _).

% erro

% ----------------------------- mais(2, 2) = 4

execD :- 
    mais(2, 2) =:= 4.

% erro

% ----------------------------- +(2, D) = +(E, 2)

execE(D, E) :- 
    +(2, D) = +(E, 2).

% ?- execE(D,E).
% D = E, E = 2.



% ----------------------------- t(p(-1,0), P2, P3) = t(P1, p(1, 0), p(0, Y)) 

execF(P1, P2, P3, Y) :- 
    t(p(-1,0), P2, P3) = t(P1, p(1, 0), p(0, Y)).

% erro