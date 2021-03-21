var inputs = []
var angka = 0
do{
  angka = prompt('Masukan angka')
  if(angka.match(/[^\d]+/g)){
    if(!angka.match(/[-]+/g)){
      break;
    }
  }
  inputs.push(angka)
}while(angka.match(/[\d]+/g))
console.log(inputs)

if(inputs.length == 1){
  console.log(`Nilai tertinggi : ${inputs[0]}`)
  console.log(`Nilai terendah : ${inputs[0]}`)
}else{
  console.log(`Nilai tertinggi : ${inputs.reduce(function(a, b) { return Math.max(a,b) })}`)
  console.log(`Nilai terendah : ${inputs.reduce(function(a, b) { return Math.min(a,b) })}`)
}