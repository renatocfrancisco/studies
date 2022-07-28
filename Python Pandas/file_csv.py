import pandas as pd

pd.set_option('display.max_columns', None)  # or 1000
pd.set_option('display.max_rows', None)  # or 1000
pd.set_option('display.width', None)
pd.set_option('display.max_colwidth', None)

file = pd.read_csv('dados/aluguel.csv', sep = ";")

#tipos_dados = pd.DataFrame(file.dtypes, columns = ['Tipos de Dados'])
#print(tipos_dados)
#print('A base de dados apresenta {} registros (imóveis) e {} variáveis'.format(file.shape[0], file.shape[1]))
#print(file.head(10)) #primeiras 10 linhas
#print(file['Tipo'])  #linhas só com coluna tipo

tipo_imovel = file['Tipo']
tipo_imovel.drop_duplicates(inplace = True)
#print(tipo_imovel)
tipo_imovel = pd.DataFrame(tipo_imovel)

#tipo_imovel.shape[0]
print(tipo_imovel)
tipo_imovel.index = range(tipo_imovel.shape[0])
print(tipo_imovel)