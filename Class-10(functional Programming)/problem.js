let radiusArr = [2, 3, 4, 5, 6]; // radius of circles

//Calculate the area for each raidus

function calculateArea(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(3.14 * arr[i] * arr[i]);
  }

  return result;
}


function calculatedDiamter(arr) {
    let diameterResult = [];
    for (let i = 0; i < arr.length; i++) {
      diameterResult.push(2 * arr[i]);
    }
  
    return diameterResult;
  }

  function calculatedCicumference(arr) {
    let circumferenceResult = [];
    for (let i = 0; i < arr.length; i++) {
      circumferenceResult.push(2 * 3.14 * arr[i]);
    }
  
    return circumferenceResult;
  }
  

let Areas = calculateArea(radiusArr);

console.log(Areas);

let diameters = calculatedDiamter(radiusArr);
console.log(diameters);

let circumferneces = calculatedCicumference(radiusArr);
console.log(circumferneces);




