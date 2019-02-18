const sortLib = function() {
  function bubbleSort() {
    // prepare array
    const arr = [];
    for (let i = 80000; i >= 0; i--) {
      arr.push(i);
    };

    // bubble sort array
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
          var temp = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  }
  return {
    bubbleSort: bubbleSort,
  }
}();
