import pandas as pd
import matplotlib.pyplot as plt


# Função para criar uma janela de gráficos
def criar_janela_graficos(num_linhas, num_colunas):
    
    # Cria uma figura com o número desejado de subplots
    fig, axes = plt.subplots(num_linhas, num_colunas, figsize=(15, 5))

    return fig, axes

# Função para criar um gráfico de barras
def criar_grafico_barras(ax, x, y, title):
    ax.bar(x, y)
    ax.set_xlabel('X-axis')
    ax.set_ylabel('Y-axis')
    ax.set_title(title)
