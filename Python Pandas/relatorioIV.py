import pandas as pd

#Seleções e Frequências

dados = pd.read_csv('dados/aluguel_residencial.csv', sep=';')

#Selecione somente os imóveis classificados com tipo 'Apartamento'.

selecao = dados['Tipo'] == 'Apartamento'
n1 = dados[selecao]
print(n1)

#Selecione os imóveis classificados com tipos 'Casa', 'Casa de Condomínio' e 'Casa de Vila'.

selecao = (dados['Tipo'] == 'Casa') | (dados['Tipo'] == 'Casa de Condomínio') |  (dados['Tipo'] == 'Casa de Vila')
n2 = dados[selecao]
print(n2)

#Selecione os imóveis com área entre 60 e 100 metros quadrados, incluindo os limites.
selecao = (dados['Area'] >= 60) & (dados['Area'] <= 100)
n3 = dados[selecao]
print(n3)


#Selecione os imóveis que tenham pelo menos 4 quartos e aluguel menor que R$ 2.000,00.
selecao = (dados['Quartos'] >= 4) & (dados['Valor'] < 2000)
n4 = dados[selecao]
print(n4)