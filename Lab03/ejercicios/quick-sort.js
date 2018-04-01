'use strict'

function ordenar(array) {
    let pivote = array[0]

    let punt1 = array[1]
    let punt2 = array[array.length-1]

    let array_temp = []

    var temp1 = null
    var temp2 = null
    let aux = 0


    console.log('Array original: '+array.toString())

    

      //while (array.indexOf(punt1) !=  array.indexOf(punt2)) {
      while (aux < array.length-1) {
        /* let punt1_tmp = null
        let punt2_tmp = null

        if (punt1 < pivote) {
            let index = array.indexOf(punt1)
            punt1 = array[index+1]
        }else{
            punt1_tmp = punt1
        }

        if (punt2 > pivote) {
            let index = array.indexOf(punt2)
            punt2 = array[index-1]
        }else{
            punt2_tmp = punt2
        }

        if (punt1_tmp != null && punt2_tmp != null) {
            let indice1 = array.indexOf(punt1)
            let indice2 = array.indexOf(punt2)
            
            array[indice1] = punt2
            array[indice2] = punt1
        }
        console.log(array) */



        console.log(punt1,punt2)

        
        
        if (punt1 > pivote) {
            temp1 = punt1
        }else{
            let index1 = array.indexOf(punt1)
            punt1 = array[index1+1]
            aux++
        }
   
        if (punt2 < pivote) {
            temp2 = punt2
        }else{
            let index2 = array.indexOf(punt2)
            punt2 = array[index2-1]
            aux++
        }

        if (temp1 != null && temp2 != null) {
        let indice1 = array.indexOf(temp1)
        let indice2 = array.indexOf(temp2)
        array[indice1] = temp2
        array[indice2] = temp1
        temp1 = null
        temp2 = null
        punt1 = array[indice1+1]
        punt2 = array[indice2-1]
        aux = aux + 2
        }
         
        console.log(array)
        //prueba 02
        
       /*  if (punt1 > pivote && punt2 < pivote) {
            let indice1 = array.indexOf(punt1)
            let indice2 = array.indexOf(punt2)
            array[indice1] = punt2
            array[indice2] = punt1
            punt1 = array[indice1+1]
            punt2 = array[indice2-1]
            console.log(array)
            console.log(punt1)
            console.log(punt2)
        } 
        else if (punt1 > pivote) {
            let indice1 = array.indexOf(punt1)
            
        }
        else if (punt2 < pivote) {
            
        } */

    } 
    console.log('salio del bucle',array)
    console.log(punt1,punt2)
    array.shift()
    array.splice(array.indexOf(punt1), 0, pivote)
}

const array = [2,3,1]

ordenar(array)

/* if (indice1==indice2) {
                array.splice(indice1+1, 0, pivote)
                console.log(array.toString()+'svfs')
            } */