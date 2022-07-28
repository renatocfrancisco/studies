import sys
import random

#Funções
def tela_titulo():
    print("*********************************")
    print("***Bem vindo ao jogo da Forca!***")
    print("*********************************")
def palavras_secretas():
    #Leitura de Arquivo
    file = open("palavras.txt", "r")
    palavras = []

    for linha in file:
        linha = linha.strip()
        palavras.append(linha)
    file.close()
    
    num = random.randrange(0,len(palavras))
    palavra = palavras[num]

    return palavra

    #palavra = input("Escreva uma palavra para acertar: ")
    #palavra = 'jazz'
def inic_letras_acertadas(palavra):
    return ["_" for letra in palavra]
def chuta():
    chute = input("Letra?")
    chute = chute.strip()
    return chute
def notinpalavra(chute, palavra, chances, enforcou):
    if chute.casefold() not in palavra.casefold():
            chances += 1
            print("Erros: {}/6".format(chances))
    
    return chances
def check_chances(chances, enforcou,palavra):
    if chances > 5:
        imprime_mensagem_perdedor(palavra)
        enforcou = True

    
    return enforcou
def check_palavra(chute,palavra,letras_acertadas):
    index = 0
    for letra in palavra:
            if(chute.casefold() == letra.casefold()):
                letras_acertadas[index] = letra
                #print(chute)
                #print(("Letra {} na {}ª posição".format(letra, index + 1)))
            index += 1
def imprime_mensagem_perdedor(palavra):
    print("Puxa, você foi enforcado!")
    print("A palavra era {}".format(palavra))
    print("    _______________         ")
    print("   /               \       ")
    print("  /                 \      ")
    print("//                   \/\  ")
    print("\|   XXXX     XXXX   | /   ")
    print(" |   XXXX     XXXX   |/     ")
    print(" |   XXX       XXX   |      ")
    print(" |                   |      ")
    print(" \__      XXX      __/     ")
    print("   |\     XXX     /|       ")
    print("   | |           | |        ")
    print("   | I I I I I I I |        ")
    print("   |  I I I I I I  |        ")
    print("   \_             _/       ")
    print("     \_         _/         ")
    print("       \_______/           ")
def imprime_mensagem_vencedor():
    print("Parabéns, você ganhou!")
    print("       ___________      ")
    print("      '._==_==_=_.'     ")
    print("      .-\\:      /-.    ")
    print("     | (|:.     |) |    ")
    print("      '-|:.     |-'     ")
    print("        \\::.    /      ")
    print("         '::. .'        ")
    print("           ) (          ")
    print("         _.' '._        ")
    print("        '-------'       ")

#Main
def jogar():
    
    tela_titulo()

    palavra = palavras_secretas()
    
    letras_acertadas = inic_letras_acertadas(palavra)
    print(letras_acertadas)

    #letras_acertadas = []
    #for i in range(len(palavra)):
    #    letras_acertadas.append("_")
    #    i += 1
    #ou letras_acertadas = ["_" for letra in palavra]
    # List Comprehension

    enforcou = False
    acertou = False
    chances = 0

    print("Escreva 'END' para encerrar")
    
    while(not enforcou and not acertou):
        chute = chuta()

        if chute.casefold() == "end":
            sys.exit(0)

        chances = notinpalavra(chute, palavra, chances, enforcou)

        enforcou = check_chances(chances, enforcou,palavra)

        check_palavra(chute,palavra,letras_acertadas)
        
        print(letras_acertadas)
        if("_" not in letras_acertadas):
            imprime_mensagem_vencedor()
            acertou = True
            

    print("Fim do jogo")

if(__name__ == "__main__"):
    jogar()
