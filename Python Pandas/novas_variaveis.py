import pandas as pd

dados = pd.read_csv('dados/aluguel_residencial.csv', sep = ';')

dados['Valor Bruto'] = dados['Valor'] + dados['Condominio'] + dados['IPTU']
dados['Valor m²'] = dados['Valor'] / dados['Area']
dados['Valor m²'] = dados['Valor m²'].round(2)
dados['Valor Bruto m²'] = (dados['Valor Bruto']/dados['Area']).round(2)

casa = ['Casa', 'Casa de Condomínio', 'Casa de Vila']
dados['Tipo Agregado'] = dados['Tipo'].apply(lambda x: 'Casa' if x in casa else 'Apartamento')

print(dados)
print("================================")

#EXCLUIR VARIAVEIS
#dados_aux = pd.DataFrame(dados[['Tipo Agregado', 'Valor m²', 'Valor Bruto', 'Valor Bruto m²']])
#print(dados_aux)
dados.drop(['Valor Bruto', 'Valor Bruto m²'], axis = 1, inplace=True)
print(dados)
dados.to_csv('dados/aluguel_residencial.csv', sep = ';', index = False)
