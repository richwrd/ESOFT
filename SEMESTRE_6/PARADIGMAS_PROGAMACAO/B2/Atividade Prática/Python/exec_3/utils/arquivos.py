from utils.bytes2mb import *

def ler_arquivo(arquivo):

    # Leitura do arquivo e armazenamento dos dados
    usuarios = []

    with open(arquivo, "r") as arquivo:
        for linha in arquivo:
            nome, espaco = linha.split()
            espaco = int(espaco)
            usuarios.append((nome, espaco))

    return usuarios

def grava_arquivo(usuarios, total_espaco, espaco_medio, arquivo_saida):
    
    with open(arquivo_saida, "w") as relatorio:
        relatorio.write("ACME Inc. Uso do espaço em disco pelos usuários\n")
        relatorio.write("-" * 60 + "\n")
        relatorio.write("{:<5} {:<15} {:<25} {:<10}\n".format("Nr.", "Usuário", "Espaço utilizado (MB)", "% do uso"))
        relatorio.write("\n")

        # Ordena os usuários pelo espaço ocupado
        usuarios_ordenados = sorted(usuarios, key=lambda x: x[1], reverse=True)


        numero = 1
        for usuario, espaco in usuarios_ordenados:
            percentual = f"{(espaco / total_espaco) * 100:.2f}%"
            espaco_mb = f"{bytes_to_mb(espaco):.2f} MB"
            
            relatorio.write(f"{numero:<5} {usuario:<15} {espaco_mb:<25} {percentual:>8}\n")
            numero += 1

        relatorio.write("\n")
        relatorio.write(f"Espaço total ocupado: {bytes_to_mb(total_espaco):.2f} MB\n")
        relatorio.write(f"Espaço médio ocupado: {espaco_medio:.2f} MB\n")
