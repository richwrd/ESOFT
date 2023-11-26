
import json

def ler_arquivo(arquivo):

    # somente leitura 
    with open(arquivo, 'r') as arquivo_entrada:
        data = json.load(arquivo_entrada)
        return data['ips']


def grava_arquivo(dados,arquivo):

    # somente escrita
    with open(arquivo, 'w', encoding='utf-8') as arquivo_saida:
        json.dump(dados, arquivo_saida, indent=4, ensure_ascii=False)