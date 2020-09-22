let numeros = [];
function Adc() {
  
    let numero = document.getElementById("numbers").value
    let novoNumero = numero
     numeros.push(numero)

    alert(`Você adicionou o número ${novoNumero} e o Array contém os seguintes números [${numeros}].`)

    document.getElementById("numbers").value = ""

    
}



let ArrayIns = numeros;
function Ins(ArrayIns) {
  let tempoInicio = performance.now()

    let i, j, valor;
    for (i = 1; i < ArrayIns.length; i++) {
        console.log("iniciando fluxo ", ArrayIns);
        valor = ArrayIns[i];
        j = i - 1;
        while (j > -1 && ArrayIns[j] > valor) {
        console.log("antes de alterar ", ArrayIns);
        ArrayIns[j + 1] = ArrayIns[j];
        console.log("depois de alterar ", ArrayIns);
        j--;
        }
        ArrayIns[j + 1] = valor;
        console.log("alocando o valor na posicao correta ", ArrayIns);
  }  

  let tempoFinal = performance.now()
  document.getElementById("res").innerHTML = `O Array ordenado por Inserção é [${ArrayIns}] e demorou ${tempoFinal - tempoInicio} milisegundos para ser ordenar.`
  
}


    
let ArraySel = numeros;
function Sel(ArraySel) {
  let tempoInicio = performance.now()

    let i, j, index;
    for (i = 0; i < ArraySel.length - 1; i++) {
      index = i;

      for (j = i + 1; j < ArraySel.length; j++) {
        if (ArraySel[j] < ArraySel[index]) {
          index = j;
        }
      }
      let menorNumero = ArraySel[index];
      console.log("iniciando troca ", ArraySel);
      ArraySel[index] = ArraySel[i];
      console.log("troca posicao ", ArraySel);
      ArraySel[i] = menorNumero;
      console.log("menor numero mais a esquerda ", ArraySel);
    }

    let tempoFinal = performance.now()
    document.getElementById("res").innerHTML = `O Array ordenado por Seleção é [${ArraySel}] e demorou ${tempoFinal - tempoInicio} milisegundos para ser ordenar.`

}


let ArrayBub = numeros;
function Bubble(ArrayBub) {
  let tempoInicio = performance.now()

  var length = ArrayBub.length;
  for (var i = 0; i < length; i++) { 
    for (var j = 0; j < (length - i - 1); j++) { 
      
      if (ArrayBub[j] > ArrayBub[j + 1]) {
       
        var tmp = ArrayBub[j]; 
        ArrayBub[j] = ArrayBub[j + 1]; 
        ArrayBub[j + 1] = tmp;
      }
    }
  }

  let tempoFinal = performance.now()
  document.getElementById("res").innerHTML = `O Array ordenado pelo metodo Bubble é [${ArrayBub}] e demorou ${tempoFinal - tempoInicio} milisegundos para ser ordenar.`

}