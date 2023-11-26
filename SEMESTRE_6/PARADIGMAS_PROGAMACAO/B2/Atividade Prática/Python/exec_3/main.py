from utils.processamento import *
import os
import sys

# Path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '.')))


if __name__ == "__main__":
    
    # Diretorio do arquivo CSV 
    csv_path = os.getcwd() + '/exec_3/data/'    
    
    processamento(csv_path + 'usuarios.txt', csv_path + 'relatorio.txt')