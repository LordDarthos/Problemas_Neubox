import {arrayFillment,save,equalQnty,valueLength} from "./validations.js"

const d = document, fr = new FileReader()
let resultado,saltoLinea,winner


d.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    d.getElementById('inputfile').addEventListener('change', function() {

        ;
        fr.onload = function() {
            document.getElementById('output').textContent=fr.result;

            console.log(fr.result)
            resultado = fr.result
            saltoLinea = resultado.split("\r\n")
            console.log(saltoLinea)
            valueLength(saltoLinea[0])
            equalQnty(saltoLinea[0],saltoLinea)
            winner = arrayFillment(saltoLinea)
            save(winner)
        }
        
    fr.readAsText(this.files[0]);
    
})
});
