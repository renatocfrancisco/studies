import pandas as pd

data = [[9, 6, 3], [8, 5, 2], [7, 4, 1]]
df = pd.DataFrame(data, list('ZYX'), list('CBA'))
print(df)

df.sort_index()
df.sort_index(axis = 1, inplace=True)
print(df)