import sys
import os

def calcula_media(notas):

    for i in notas:
        total += notas[i]

    media = total / len(notas)

    print(f'TOTAL: {total}')
    print(f'QTS: {len(notas)}')

    return media



notas_um = {"nota1": 10,
            "nota2": 10,
            "nota3": 10,
            "nota4": 10}


print(calcula_media(notas_um))