self.importScripts('sortLib.js');

onmessage = function(e) {
  if ( e.data === "start_sorting" ) {
    console.log('Worker: Received sorting command');

    const start = new Date().getTime();
  	sortLib.bubbleSort();
  	const end = new Date().getTime();
  	const time = end - start;

    console.log('Worker: Completed sorting');
    postMessage(time);
  }
};
