import re

regex01 = re.compile("[0-9]+")
f = open("text.txt","r")
lines = f.readlines()
index = 0

for x in lines:    
    new_string = lines[index].replace("\n","")
    print(new_string)
    lines[index] = new_string
    index = index + 1

arrayA = []
arrayB = []
winner = "A"

def valueLength(n):
    if(len(str(n)) >= 0 and len(str(n)) <= 10000):
        print(f"Numero valido: {n}")
        if(regex01.match(str(n))):
            print(f"Regexp valido: {n}")
        else:
            raise Exception(f"Regexp no valido:${n}")
    else:
        raise Exception(f"Numero no valido, demasiado largo: {n}")
    


def equalQnty(m,n):
    roundsQnty = 0
    x = 1
    y = 0
    
    while x < len(n):
        valuesPerLine = n[x].split(" ")
        
        while y < len(valuesPerLine):
            if(regex01.match(str(valuesPerLine[y]))):
                print(f"Regexp de puntaje valido: {valuesPerLine[y]}")
            else:
                raise Exception(f"Regexp Regexp de puntaje no valido: {valuesPerLine[y]}")
            y = y + 1
        if(len(valuesPerLine) == 2):
            roundsQnty = roundsQnty + 1
        else:
            raise Exception(f"Cantidad de valores invalido en fila: {x}")
        x = x + 1
    if(int(m) == roundsQnty):
        print(f"Numero de rondas correctas")
    else:
        raise Exception(f"Numero de rondas incorrectas")

def arrayFillment(stringsArray):
    dualValueArr = []
    unitaryString = " "
    x = 1
    while x < len(stringsArray):
        unitaryString = stringsArray[x]
        dualValueArr = unitaryString.split(" ")
        arrayA.append(dualValueArr[0])
        arrayB.append(dualValueArr[1])
        x = x + 1
    winner = victoriesFillment(arrayA,arrayB)
    return winner

def victoriesFillment(arrayA,arrayB):
    x = 0
    temp = 0
    tempDiference = 0
    while x < len(arrayA):
        tempDiference = abs(int(arrayA[x]) - int(arrayB[x]))
        if(arrayA[x] > arrayB[x]):
            if(temp < tempDiference):
                temp = tempDiference
                winner = "A"
        else:
            if(temp < tempDiference):
                temp = tempDiference
                winner = "B"
        x = x + 1
    print("Diferencia: "+str(temp))
    print("Ganador: "+winner)
    return winner




array = ["3","10 15","15 10","20 10"]
valueLength(3)
equalQnty(lines[0],lines)


file = open("textOut.txt", "w")
file.write(arrayFillment(lines))
file.close()


