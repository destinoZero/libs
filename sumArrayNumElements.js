// Suma todos los elementos de un array numérico y devuelve el resultado.
// Antes comprueba que los elementos del array son todos números.
// Los índices que no sean numéricos son saltados y no se tienen en cuenta.
function sumArrayNumElements(arr) {
  var result = 0,
      arrLen = arr.length,
      elem, el;

  arr.forEach(function(elem) {
    if(typeof elem !== 'number') {
      el = elem;
      console.log('"' + (typeof el) + '"' + ' is not a number.');
    }
    else {
      result += elem;
    }
  });

  return result;
}

