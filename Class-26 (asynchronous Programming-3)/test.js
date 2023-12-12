// Coffee Shop Problem
console.log('Before')
function placeOrder(drink) {
  return new Promise((resolve, reject) => {
    if (drink === "coffee") {
      resolve("Order for Coffee has been placed");
    } else {
      reject("The requested order cannot be placed");
    }
  });
}

function processOrder(orderPlaced) {
  return new Promise(function (resolve , reject) {
    setTimeout(function(){
        resolve(`${orderPlaced} and Served`);
    } , 4000)
 
  });
}

// Promisified Way by using then and catch
// placeOrder("coffee")
//   .then(function (orderTaken) {
//     console.log(orderTaken);
//     return orderTaken; // order for coffee placed
//   })
//   .then(function (orderTaken) {
//     let orderIsProcessed = processOrder(orderTaken);
//     return orderIsProcessed; // order for coffee placed and served
//   })
//   .then(function (orderIsProcessed) {
//     console.log(orderIsProcessed);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// async and Await

async function serveOrder() {
  try {
    let orderTaken = await placeOrder("coffee");
    console.log(orderTaken);

    let processedOrder = await processOrder(orderTaken);
    console.log(processedOrder);

    // Will they be executed togther after 4 secs

    // or 1st promise will be resolved right now and 2 will take 4 sec
  } catch (err) {
    console.log(err);
  }
}

serveOrder();

console.log("after")
