let radiusArr = [2, 3, 4, 5, 6]; // radius of circles

function calculate(arr, cb) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      result.push(cb(arr[i]));
    }
  
    return result;
  }

function circleArea(radius) {
  return 3.14 * radius * radius;
}

function circleCircumference(radius) {
  return 2 * 3.14 * radius;
}

function circleDiameter(radius) {
  return 2 * radius;
}

//Calculate the area for each raidus



let Areas = calculate(radiusArr, circleArea);
let circumferneces = calculate(radiusArr, circleCircumference);
let diameter = calculate(radiusArr, circleDiameter);

console.log(Areas);
console.log(circumferneces);
console.log(diameter);

// Use higher order function to solve this
