from utils.arquivos import *
from utils.bytes2mb import * 


def processamento(arquivo_entrada, arquivo_saida):

    usuarios = ler_arquivo(arquivo_entrada)

    total_espaco = 0
    for i in usuarios:
        total_espaco += i[1]

    # Cálculo do espaço médio
    espaco_medio = bytes_to_mb(total_espaco) / len(usuarios)
    
    grava_arquivo(usuarios, total_espaco, espaco_medio, arquivo_saida)