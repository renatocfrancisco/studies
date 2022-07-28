import pandas as pd
import matplotlib.pyplot as plt

dados = pd.read_csv('dados/aluguel_residencial.csv', sep = ';')
plt.rc('figure', figsize = (14,6))

print(dados.boxplot(['Valor']))
print(dados[dados['Valor'] >= 500000])

valor = dados['Valor']
Q1 = valor.quantile(.25)
Q3 = valor.quantile(.75)
IIQ = Q3 - Q1
limite_inferior = Q1 - 1.5 * IIQ
limite_superior = Q3 + 1.5 * IIQ

print(limite_inferior)
print(limite_superior)

selecao = (valor >= limite_inferior) & (valor <= limite_superior)
dados_new = dados[selecao]
print(dados_new)

dados.hist(['Valor'])
dados_new.hist(['Valor'])

# por grupo (aula 2)

grupo_tipo = dados.groupby('Tipo')['Valor']
Q1 = grupo_tipo.quantile(.25)
Q3 = grupo_tipo.quantile(.75)
IIQ = Q3 - Q1
limite_inferior = Q1 - 1.5 * IIQ
limite_superior = Q3 + 1.5 * IIQ

print(limite_inferior)
print(limite_superior)

dados_new = pd.DataFrame()
for tipo in grupo_tipo.groups.keys():
    eh_tipo = dados['Tipo'] == tipo
    eh_dentro_limite = (dados['Valor'] >= limite_inferior[tipo]) & (dados['Valor'] <= limite_superior[tipo])
    selecao = eh_tipo & eh_dentro_limite
    dados_selecao = dados[selecao]
    dados_new = pd.concat([dados_new, dados_selecao])

print(dados_new)
dados_new.boxplot(['Valor'], by = ['Tipo'])