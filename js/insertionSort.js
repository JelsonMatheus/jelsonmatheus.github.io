const canvas = document.getElementById('canvas');
const range = document.getElementById('range');
const vetorLabel = document.getElementById('vetorOriginal');
const resultado = document.getElementById("resultado");
const labelTempo = document.getElementById('labelTempo');
const speedButton = document.getElementById('speed');

let array = [];
let graph = null;
let speed = 0;
let isRun = false;

(function inil() {
    canvas.width = 2 * canvas.width;
    canvas.height = 2 * canvas.height;
    graph = new Graph(
        canvas.getContext('2d'),
        canvas.width,
        canvas.height
    );
    reset();
})();

function start(btn) {
    
    isRun = true;
    speed = speedButton.value;
    btn.disabled = true;
    const startTime = Date.now();
    
    
    insertionSort(array).then(() => {
        
        resultado.innerText = "[" + array + "]";
        
    }).catch((e) => {
        
        resultado.innerText = e;
        reset();
        
    }).finally(() => {
        
        btn.disabled = false;
        labelTempo.innerText = (Date.now() - startTime) + " ms";
        isRun = false;
        
    });
}

function reset() {
    array = [];
    
    if(isRun === true) {
        isRun = false;
        return;
    }
    
    for(let i = 1; i <= range.value; i++) {
        array.push(i);
    }
    
    shuffle(array);
    
    vetorOriginal.innerText = "[" + array + "]";
    resultado.innerText = "";
    labelTempo.innerText = "";
    
    graph.drawRects(array);
}

function shuffle(vetor){
	
   const n = vetor.length;
  
   for(let i = (n-1); i>0; i--){
	
       let j = Math.floor(Math.random() * (i+1));
		
       let aux = vetor[i];
       vetor[i] = vetor[j];
       vetor[j] = aux;
    }
}

async function sleep(ms) {
    let time = 0;
    do {
        await new Promise(r => setTimeout(r, 1));
        time += 1;
    } while(time < ms);
}

/*
 *
 * **** Algoritmo insertion Sort *****
 *
*/

async function insertionSort(vetor){

    const n = vetor.length
    const ms = (speed === "max") ? 0 : 400 / speed;
	
    for(let i = 1; i < n; i++){
	
        let aux = vetor[i];
        let j = i;
		
		
        while((j > 0) && (vetor[j-1]>aux)){
			
            vetor[j] = vetor[j-1];
            j--
        }
		
        vetor[j] = aux;
        
        
        if(isRun === false) {
           throw("concelado!");
        }
        
        graph.drawRects(vetor);
        await sleep(ms);
    }
}