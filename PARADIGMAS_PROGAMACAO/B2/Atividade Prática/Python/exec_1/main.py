from utils.processamento import *
import os

if __name__ == "__main__":

    path_arquivos = os.path.join(os.getcwd(), 'exec_1', 'assets')
    
    arquivo_entrada = os.path.join(path_arquivos, 'ips.json')
    arquivo_saida = os.path.join(path_arquivos, 'relatorio.json')

    processamento(arquivo_entrada,arquivo_saida)