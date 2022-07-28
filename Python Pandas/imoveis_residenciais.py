import pandas as pd

pd.set_option('display.max_columns', None)  # or 1000
pd.set_option('display.max_rows', None)  # or 1000
pd.set_option('display.width', None)
pd.set_option('display.max_colwidth', None)

dados = pd.read_csv('dados/aluguel.csv', sep = ';')

print(dados.head(10))

print(list(dados['Tipo'].drop_duplicates()))

residencial = ['Quitinete', 'Casa', 'Apartamento', 'Casa de Condomínio', 'Casa de Vila']
print(residencial)

selecao = dados['Tipo'].isin(residencial)
dados_residencial = dados[selecao]
print(dados_residencial.head(10))

dados_residencial.index = range(dados_residencial.shape[0])
print(dados_residencial.head(10))

dados_residencial.to_csv('dados/aluguel_residencial.csv', sep = ';', index=False)