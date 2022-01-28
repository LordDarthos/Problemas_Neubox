import {lenghtN,lenghtM,included,purge,equalLength,save} from "./validations.js"

const d = document, fr = new FileReader();
let resultado,saltoLinea,espacio,m1,m2


d.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    d.getElementById('inputfile').addEventListener('change', function() {

        
        fr.onload = function() {
            document.getElementById('output').textContent=fr.result;

            resultado = fr.result
            saltoLinea = resultado.split("\r\n")
            espacio = saltoLinea[0].split(" ")

            lenghtN(saltoLinea[3])
            lenghtM(saltoLinea[1],saltoLinea[2])
            equalLength(espacio[0],espacio[1],espacio[2],saltoLinea[1],saltoLinea[2],saltoLinea[3])
            m1 = included(saltoLinea[1],purge(saltoLinea[3])),
            m2 = included(saltoLinea[2],purge(saltoLinea[3]))

            save(m1,m2)
        }
   
    fr.readAsText(this.files[0]);
    
})
});
