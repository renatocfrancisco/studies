import pandas as pd
pd.set_option('display.max_columns', None)  # or 1000
pd.set_option('display.max_rows', None)  # or 1000
pd.set_option('display.width', None)
pd.set_option('display.max_colwidth', None)

dados = pd.read_csv('dados/aluguel_residencial.csv', sep = ';')

print(dados.info())
#print(dados[dados['Condominio'].isnull()].shape[0])
selecao = (dados['Tipo'] == 'Apartamento') & (dados['Condominio'].isnull())

A = dados.shape[0]
print(A)
dados = dados[~selecao]
B = dados.shape[0]
print(B)
print(A - B)

#dados = dados.fillna(0, inplace=True)
dados = dados.fillna({'Condominio': 0, 'IPTU': 0})
print(dados[dados['Condominio'].isnull()].shape[0])
print(dados.info())

dados.to_csv('dados/aluguel_residencial.csv', sep = ';', index=False)

#print(dados.head(10))
#print(dados.notnull())
#print(dados.info())
#print(dados[dados['Valor'].isnull()])

#A = dados.shape[0]
#dados = dados.dropna(subset=['Valor'])
#B = dados.shape[0]
#print(A - B)