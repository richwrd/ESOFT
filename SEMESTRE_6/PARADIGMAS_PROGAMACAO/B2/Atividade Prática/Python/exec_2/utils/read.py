import pandas as pd
import matplotlib.pyplot as plt
import os
import sys

# Path: utils/read.py
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

# def ler_arquivos():

# Nome do arquivo CSV de entrada
csv_path = os.getcwd() + '/exec_2/utils/data/'

# Leitura dos dados do arquivo CSV
dados_filmes_csv = pd.read_csv(csv_path + 'titles.csv')
dados_atores_csv = pd.read_csv(csv_path + 'credits.csv')

# vinculo para trazer dados completos referente aos filmes e atores
# dados_completo_csv = pd.merge(dados_filmes_csv, dados_atores_csv, on='id', how='inner')
# colunas_csv = dados_completo_csv.columns.tolist()

os.system('clear')
# print(dados_completo_csv)
# print(colunas_csv)

# top_10_atores = dados_atores_csv['actor'].value_counts().head(10)

# agrupa os dados por ano de lançamento e conta o número de filmes
ano_agrupado = dados_filmes_csv.groupby(['ano_lancamento']).size().reset_index(name='counts')

# cria o grafico.
plt.figure(figsize=(10,5)) 

# Realiza loop em todos os anos com distinção (unique)
for ano in ano_agrupado['ano_lancamento'].unique():

    # filtra os dados por ANO
    ano_filtrado = ano_agrupado[ano_agrupado['ano_lancamento'] == ano]
    
    #cria uma barra pra cada ANO identificado
    plt.bar(ano_filtrado['ano_lancamento'], ano_filtrado['counts'], label=ano)


# Configurações do Gráfico
plt.xlabel('Ano de Lançamento')
plt.ylabel('Total de Filmes')
plt.title('Total de Filmes por ano NETFLIX')

# Garante que a legenda não seja cortada
plt.tight_layout()  

plt.show()