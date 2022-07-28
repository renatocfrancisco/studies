import pandas as pd

dados = pd.read_csv('dados/aluguel_amostra.csv', sep = ';')

valor = dados['Valor m2']

Q1 = valor.quantile(.25)
Q3 = valor.quantile(.75)
IIQ = Q3 - Q1

limite_inferior = Q1 - 1.5 * IIQ
limite_superior = Q3 + 1.5 * IIQ

print(limite_inferior)
print(limite_superior)