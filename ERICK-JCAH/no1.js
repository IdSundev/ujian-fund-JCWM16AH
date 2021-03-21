//no 1

var result = ""

for(var i = 0; i< 5; i++){
  for(var l = 0;l< 5;l++){
    result += "*"
  }
  result += "\n"
}

console.log(result)

//

var row = 11;
var result = "";

for (let i = 0; i < row; i++) {
  for (let j = row - i-1; j > 0; j--) {
    result += " ";
  }
  for (let k = 0; k < i; k++) {
    result += "*";
  }
  result += "\n";
}
console.log(result)
// //

function segitiga(jumlah){
  let hasil = " "
  for ( let i = 0 ; i < jumlah; i++){
    for (let j = 0 ; j <= i; j++){
      hasil += "*"
    }
    hasil += "\n"
  }
  return hasil
}

console.log(segitiga(7))
