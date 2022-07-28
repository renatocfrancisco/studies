import pandas as pd
import matplotlib.pyplot as plt
dados = pd.read_csv('dados/aluguel_residencial.csv', sep = ';')

#dados['Valor'].mean()

bairros = ['Barra da Tijuca', 'Copacabana', 'Ipanema', 'Leblon', 'Botafogo', 'Flamengo', 'Tijuca']
selecao = dados['Bairro'].isin(bairros)
dados = dados[selecao]
#print(dados['Bairro'].drop_duplicates())
#print(dados)

grupo_bairro = dados.groupby('Bairro')
#type(grupo_bairro)
#print(grupo_bairro.groups)

#for bairro, dados in grupo_bairro:
#    print(bairro)

for bairro, data in grupo_bairro:
    print('{} -> {}'.format(bairro, data.Valor.mean()))

#print(grupo_bairro['Valor', 'Condominio'].mean().round(2))

print(grupo_bairro['Valor'].describe().round(2))

print(grupo_bairro['Valor'].aggregate(['min', 'max', 'sum']).rename(columns = {'min': 'Mínimo', 'max': 'Máximo', 'sum': 'Soma'}))


plt.rc('figure', figsize = (20,10))
fig = grupo_bairro['Valor'].mean().plot.bar(color = 'blue')
fig.set_ylabel('Valor do Aluguel')
fig.set_title('Valor Médio de Aluguel por Bairro', {'fontsize': 22})
fig