import pandas as pd

pd.set_option('display.max_columns', None)  # or 1000
pd.set_option('display.max_rows', None)  # or 1000
pd.set_option('display.width', None)
pd.set_option('display.max_colwidth', None)

#file = pd.read_csv('dados/aluguel.csv', sep = ";")
data = [1,2,3,4,5]
s = pd.Series(data)
print(s,end='\n')

index = ['linha' + str(i) for i in range(len(data))]
print(index,end='\n')

s = pd.Series(data = data,index = index)
print("S\n")
print(s,end='\n')

data = {'Linha' + str(i) : i + 1 for i in range(5)}
print("data\n")
print(data,end='\n')

s = pd.Series(data)
s1 = s + 2
print(s1,end='\n')

s2 = s + s1
print(s2, end='\n')