import inquirer from 'inquirer'
import inserirEmpresa from '../requisicoes/insert.js';

export class Telas {

    limparTela() {
        console.log('\x1Bc');
    }

    movimentacaoTela()
    {

    }

    cadastrosTela()
    {

        this.limparTela()

        inquirer.prompt([
            {
            type: 'list',
            name: 'action',
            message: 'CADASTROS\n',
            choices: [
                'Empresas',
                'Departamentos', 
                'Colaboradores\n',
                'Voltar',
                ]
            },
        ]).then((answer) => {
            const action = answer['action']

            if(action === 'Empresas')
            {

                this.limparTela()

                inquirer.prompt([
                    {
                    type: 'list',
                    name: 'action',
                    message: 'OPÇÕES\n',
                    choices: [
                        'Adicionar Empresa',
                        'Editar Empresa', 
                        'Remover Empresa\n',
                        'Voltar',
                        ]
                    },
                ]).then((answer) => {
                    const action = answer['action']
            
                    if(action === 'Adicionar Empresa')
                    {
                        this.limparTela()

                        inquirer.prompt([
                            {
                                name: 'nomeEmpresa',
                                message: 'Nome da empresa: '
                            }
                        ]).then((answer) => {
                            const nomeEmpresa = answer['nomeEmpresa']

                            console.info(nomeEmpresa)

                            inserirEmpresa(nomeEmpresa)

                            this.cadastrosTela();

                        }).catch((err) => console.log(err))
                    }

                    else if (action === 'Voltar')
                        this.cadastrosTela();
                })
                .catch((err) => console.log(err))
            }

            if(action === 'Voltar')
                this.operationTela();

        })
        .catch((err) => console.log(err))

    }

    sobre(){


        this.limparTela()

        inquirer.prompt([
            {
            type: 'confirm',
            name: 'sobre',
            message: '\t ESOFT 5S \n\t EDUARDO RICHARD \n\t RA: 211618122 \n\n',
            default: true,
            }
        ]).then((answer) => {
            const resp = answer['sobre']

            if(resp)
                this.operationTela()
        })
    }

    operationTela(){

        this.limparTela()

        /* Inquirer cria menu recebendo dados em JSON (disponivel na documentacao)*/
        inquirer.prompt([
            {
            type: 'list',
            name: 'action',
            message: 'Oque voce deseja fazer \n',
            choices: [
                'Cadastros',
                'Movimentações', 
                'Sobre',
                'Sair',
                ]
            },
        ]).then((answer) => {
            const action = answer['action']

            if(action === 'Cadastros'){
                this.cadastrosTela();
            }
            else if(action === 'Movimentações'){
                this.movimentacaoTela();
            }
            else if(action === 'Sobre')
            {
                this.sobre();
            }
            else
                return
        })
        .catch((err) => console.log(err))
    }

}

export default Telas