def bubble_sort(array):
    for i in range(len(array) - 1, -1, -1):
        for j in range(i):
            if array[j] > array[j + 1]:
                temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
                # array[j], array[j +ralac
    return array

def busca_binaria(array, esq, dir,item):
    meio = (esq+dir)/2

    if item == meio:
        return meio
    elif (array[meio]>item):
        return busca_binaria(array, esq, meio-1,item)
    else:
        return busca_binaria(array, meio+1, dir, item)