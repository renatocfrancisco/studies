class Filme:
    def __init__(self, nome, ano,descricao):
        self.nome = nome
        self.ano = ano
        self.descricao = descricao

class Serie:
    def __init__(self, nome, ano, temporadas):
        self.nome = nome
        self.ano = ano
        self.temporadas = temporadas

film1 = Filme("Hot Fuzz", 2007, "Action Movie")
print(film1.nome)

serie1 = Serie("Better Call Saul", 2015, "Crime Drama")
print(serie1.ano)