const first = document.getElementById('number1');
const second = document.getElementById('number2');
const result = document.querySelector('.result');
const nwwButton = document.getElementById("nonWebWorker");
const wwButton = document.getElementById("WebWorker");

function initLoading() {
  result.textContent = 'Sorting ....';
}

nwwButton.addEventListener('click', function(){
  initLoading();

  const start = new Date().getTime();
	sortLib.bubbleSort();
	const end = new Date().getTime();
	const time = end - start;

  result.textContent = `${time} ms`;
});

if(window.Worker) {
  const myWorker = new Worker('worker.js');

  wwButton.addEventListener('click', function(){
    initLoading();
    myWorker.postMessage("start_sorting");
  });

  myWorker.onmessage = function(e){
    const data = e.data;
    result.textContent = `${data} ms`;
  }

  myWorker.onerror = function(error){
    console.log('onerror', error);
  }
} else {
  alert('Web worker is not supported in your browser');
}
