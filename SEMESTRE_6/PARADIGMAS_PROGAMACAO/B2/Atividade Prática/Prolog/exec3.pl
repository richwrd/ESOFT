% FATOS
aluno(joao, calculo).
aluno(maria, calculo).
aluno(joel, programacao).
aluno(joel, estrutura).
frequenta(joao, puc).
frequenta(maria, puc).
frequenta(joel, ufrj).
professor(carlos, calculo).
professor(ana_paula, estrutura).
professor(pedro, programacao).
funcionario(pedro, ufrj).
funcionario(ana_paula, puc).
funcionario(carlos, puc). 

% ---------------------
% Regras
% ---------------------
% Quem são os alunos do professor X?

alunos_do_professor(Y, X) :-
    aluno(Y, Z),
    professor(X, Z).


% ---------------------
% Quem sao as pessoas que estão associadas a uma universidade X? (alunos e professores)

universidade_pessoas(X, Y) :-
    frequenta(Y, X);
    funcionario(Y, X).