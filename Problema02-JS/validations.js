const d = document

let arrayA = [], arrayB = [], temp = 0, winner = "A"

function valueLength(n) {
    if(n.length >= 0 && n.length <= 10000) {
        console.log(`Numero valido: ${n}`)
        if(/^[0-9_]*$/.test(n)){
            console.log(`Regexp valido: ${n}`)
        }else{
            throw new Error(`Regexp no valido: ${n}`)
        }
    }else{
        throw new Error(`Numero no valido, demasiado largo: ${n}`)
    }
}

function equalQnty(m,n) {
    let roundsQnty = 0
    for(let x = 1; x < n.length; x++) {
        let valuesPerLine = n[x].split(" ")
        for(let y = 0; y < valuesPerLine.length; y++) {
            console.log(valuesPerLine[y])
            if(/^[0-9_]*$/.test(valuesPerLine[y])){
                console.log(`Regexp de puntaje valido: ${valuesPerLine[y]}`)
            }else{
                throw new Error(`Regexp Regexp de puntaje no valido: ${valuesPerLine[y]}`)
            }
        }
        if(valuesPerLine.length == 2) {
            roundsQnty++
        }else{
            throw new Error(`Cantidad de valores invalido en fila: ${x}`)
        }
    }
    if(parseInt(m,10) == roundsQnty) {
        console.log(`Numero de rondas correctas`)
    }else{
        throw new Error(`Numero de rondas incorrectas`)
    }
}

function arrayFillment(stringsArray) {

    let dualValueArr, unitaryString
    for(let x = 1; x < stringsArray.length;x++) {
        unitaryString = stringsArray[x]
        dualValueArr = unitaryString.split(" ")
        arrayA.push(dualValueArr[0])
        arrayB.push(dualValueArr[1])
    }
    winner = victoriesFillment(arrayA,arrayB)
    return winner
}

function victoriesFillment(arrayA,arrayB) {
    for(let x = 0; x < arrayA.length; x++) {
        let tempDiference = Math.abs(arrayA[x] - arrayB[x])
        if(arrayA[x] > arrayB[x]) {
            if(temp < tempDiference){
                temp = tempDiference
                winner = "A"
            }
        }else {
            if(temp < tempDiference) {
                temp = tempDiference
                winner = "B"
            }
        }
    }
    console.log(temp)
    console.log(winner)
    return winner
}

function save(winner) { 
    var blob = new Blob([winner], { type: 'application/javascript;charset=utf-8' });
    
    var link=window.URL.createObjectURL(blob)
    d.getElementById('enlace').setAttribute('href', link);
} 

export {arrayFillment,save,equalQnty,valueLength}

