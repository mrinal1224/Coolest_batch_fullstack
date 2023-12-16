function parent() {
  var a = 10;

  function child() {

    var b = 20;

    function grandChild() {
       console.log(a)
    }
    return grandChild;
  }

  return child;
}

let childReturned = parent();


let grandChildReturned = childReturned()

console.log(grandChildReturned())
