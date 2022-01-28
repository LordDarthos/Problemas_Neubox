const d = document

function lenghtN(n) {
    if(n.length >= 3 && n.length <= 5000) {
        console.log(`Largo de N valido: ${n}`)
        if(/^[a-zA-Z0-9_]*$/.test(n)){
            console.log(`Regexp de N valido: ${n}`)
        }else{
            throw new Error(`Regexp de N no valido: ${n}`)
        }
    }else{
        throw new Error(`Largo de N no valido: ${n}`)
    }
}

function lenghtM(m1,m2) {
    if(m1.length >= 2 && m1.length <= 50 && /^[a-zA-Z0-9_]*$/.test(m1)) {
        console.log(`Largo o valores de M1 valido: ${m1}`)
        if(m2.length >= 2 && m2.length <= 50 && /^[a-zA-Z0-9_]*$/.test(m2)) {
            console.log(`Largo o valores de M2 validos: ${m2}`)
        }else{
            throw new Error(`Largo o valores de M2 no valido: ${m2}`)
        }
    }else{
        throw new Error(`Largo de o valores M1 no valido: ${m1}`)
    }
}

function purge(x) {
    return x.replace(/(.)\1+/g, '$1')
}

function included(m,n) {
    if(n.indexOf(m) >= 0) {
        console.log(`incluido: ${m}`)
        return "SI"
    }else {
        console.log(`no incluido: ${m}`)
        return "NO"
    }
}

function equalLength(len1,len2,len3,m1,m2,n) {
    testLength(len1,m1)
    testLength(len2,m2)
    testLength(len3,n)
}

function testLength(v1,v2) {
    if(parseInt(v1) == v2.length) {
        console.log(`equal Lenght: ${v2}`)
    }else throw new Error(`N unequal: ${v2}`)
}

function save(m1,m2) { 
    var blob = new Blob([m1+"\n"+m2], { type: 'application/javascript;charset=utf-8' });
    
    var link=window.URL.createObjectURL(blob)
    d.getElementById('enlace').setAttribute('href', link);
} 


export {lenghtN,lenghtM,included,purge,equalLength,save}