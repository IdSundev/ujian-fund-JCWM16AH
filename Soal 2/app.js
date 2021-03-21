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

if(inputs.length == 1){
  console.log(inputs)
  console.log(`Nilai tertinggi : ${inputs.reduce(function(a, b) { return Math.max(a,b) })}`)
  console.log(`Nilai terendah : ${inputs.reduce(function(a, b) { return Math.min(a,b) })}`)
}else{
  let nilaiTertinggi = inputs[0]
  let nilaiTerendah = inputs[0]
  for(let i = 1; i < inputs.length;i++){
    if(parseInt(inputs[i]) > parseInt(nilaiTertinggi)){
      nilaiTertinggi = inputs[i]
    }
    if(parseInt(inputs[i]) < parseInt(nilaiTerendah)){
      nilaiTerendah = inputs[i]
    }
  }
  console.log(inputs.sort())
  console.log(`Nilai Tertinggi : ${nilaiTertinggi}`)
  console.log(`Nilai Terendah : ${nilaiTerendah}`)
}