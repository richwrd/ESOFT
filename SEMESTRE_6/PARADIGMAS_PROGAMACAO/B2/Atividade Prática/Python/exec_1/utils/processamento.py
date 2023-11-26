from utils.arquivos import *
from utils.verifica_ip import *

def processamento(arquivo_entrada, arquivo_saida):

    enderecos = ler_arquivo(arquivo_entrada)

    enderecos_validos = []
    enderecos_invalidos = []

    for ip in enderecos:
        if verifica_ip(ip):
            enderecos_validos.append(ip)
        else:
            enderecos_invalidos.append(ip)

    dados = {
        "Endereços válidos": enderecos_validos,
        "Endereços inválidos": enderecos_invalidos
    }

    grava_arquivo(dados, arquivo_saida)
