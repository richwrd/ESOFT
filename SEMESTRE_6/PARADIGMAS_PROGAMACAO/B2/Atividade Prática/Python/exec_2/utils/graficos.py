import pandas as pd
import matplotlib.pyplot as plt

def graficos(data):
    
    # Leitura dos dados do arquivo CSV
    dados_filmes_csv = pd.read_csv(data + 'titles.csv')
    dados_atores_csv = pd.read_csv(data + 'credits.csv')

    # cria o grafico.
    fig, axs = plt.subplots(3, 1, figsize=(10, 15))  # 3 linhas, 1 coluna
        
    # agrupa os dados por ano de lançamento e conta o número de filmes
    ano_agrupado = dados_filmes_csv.groupby(['ano_lancamento']).size().reset_index(name='counts')

    # 1: Total de filmes por ano
    for ano in ano_agrupado['ano_lancamento'].unique():
        # filtra os dados por ANO
        ano_filtrado = ano_agrupado[ano_agrupado['ano_lancamento'] == ano]
        
        #cria uma barra pra cada ANO identificado
        axs[0].bar(ano_filtrado['ano_lancamento'], ano_filtrado['counts'], label=ano)
        
    axs[0].set_xlabel('Ano de Lançamento')
    axs[0].set_ylabel('Total de Filmes')
    axs[0].set_title('Total de Filmes por ano NETFLIX')

    #----------------
    # 2: Total de filmes por gênero

    total_filmes_genero = dados_filmes_csv['genero'].explode().value_counts().head(10)
    axs[1].bar(total_filmes_genero.index, total_filmes_genero.values)
    
    axs[1].set_xlabel('Gênero')
    axs[1].set_ylabel('Total de Filmes')
    axs[1].set_title('Top 10 Gêneros')
    axs[1].tick_params(axis='x', rotation=45)
    
    #----------------
    
    # 3: Top 10 atores 
    top_10_atores = dados_atores_csv['nome'].value_counts().head(10)
    axs[2].bar(top_10_atores.index, top_10_atores.values)
    
    axs[2].set_xlabel('Ator')
    axs[2].set_ylabel('Número de Filmes')
    axs[2].set_title('Top 10 Atores Netflix')
    axs[2].tick_params(axis='x', rotation=45)

    # Garante que a legenda não seja cortada
    plt.tight_layout()  
    plt.show()


