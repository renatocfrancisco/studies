import pandas as pd

atletas = pd.DataFrame([['Marcos', 9.62], ['Pedro', None], ['João', 9.69], 
                        ['Beto', 9.72], ['Sandro', None], ['Denis', 9.69], 
                        ['Ary', None], ['Carlos', 9.74]], 
                        columns = ['Corredor', 'Melhor Tempo'])
print(atletas)
print("===========================")
atletas.fillna(atletas["Melhor Tempo"].mean(), inplace = True)
print(atletas)