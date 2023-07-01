const numbers = [10, 5, 20, 8, 30,80,50,60];

const largestNumber = findLargestElement(numbers);

function findLargestElement(arr) {

    let largest = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
  
    return largest;
  }

document.write(`<h2>The largest number is: ` + largestNumber);

  
