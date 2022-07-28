import pandas as pd

dados = pd.read_csv('dados/aluguel.csv' ,sep = ';')
print(dados.head(10))

classes = [0, 2 ,4 ,6, 100]
quartos = pd.cut(dados.Quartos, classes)
print(quartos)

print(pd.value_counts(quartos))

labels = ['1 e 2 quartos', '3 e 4 quartos', '5 e 6 quartos', '7 e + quartos']
quartos = pd.cut(dados.Quartos, classes, labels = labels, include_lowest=True)

print(pd.value_counts(quartos))