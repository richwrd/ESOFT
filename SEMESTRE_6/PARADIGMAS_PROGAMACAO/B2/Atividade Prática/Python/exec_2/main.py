from utils.graficos import *
import os
import sys

# Path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '.')))


if __name__ == "__main__":

    # Diretorio do arquivo CSV 
    csv_path = os.getcwd() + '/exec_2/data/'    
    
    graficos(csv_path)