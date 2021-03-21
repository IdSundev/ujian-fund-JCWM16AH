var drawingTools = document.getElementById('drawingTools')
drawingTools.addEventListener('submit', draw, false)

function draw(e){
  e.preventDefault()
  let jenisBangunan = parseInt(document.getElementById('jenisBangunan').value)
  if(jenisBangunan == 1){
    persegi()
  }else if(jenisBangunan == 2){
    bintangRataKiri()
  }else if(jenisBangunan == 3){
    bintangRataKanan()
  }else{
    prompt("Pilih jenis bangunan dari 1 - 3")
    document.getElementById('hasil').innerHTML = ''
  }
}

function bintangRataKiri(){
  let ukuran = parseInt(document.getElementById('ukuranBangunan').value)
  let bintang = ""
  for(let i = 0; i <= ukuran; i++){
    for(let j = 0; j < i; j++){
      bintang += "*"
    }
    bintang += "<br>"
  }
  document.getElementById('hasil').innerHTML = bintang
  console.log(bintang.split('<br>').join('\n'))
}

function bintangRataKanan(){
  let ukuran = parseInt(document.getElementById('ukuranBangunan').value)
  let bintang = ""
  let bintanglog = ""
  for(let i = 0; i <= ukuran; i++){
    for(let j = ukuran-i; j > 0; j--){
      if(i == 0){
        continue;
      }
      bintang +=`<span style="color:white;">#</span>`
      bintanglog += ' '
    }
    for(let k = 0; k < i; k++){
      bintang += "*"
      bintanglog += "*"
    }
    bintang += "<br>"
    bintanglog += "\n"
  }
  document.getElementById('hasil').innerHTML = bintang
  console.log(bintanglog)
}

function persegi(){
  let ukuran = parseInt(document.getElementById('ukuranBangunan').value)
  let bintang = "<br>"
  for(let i = 0; i < ukuran; i++){
    for(let j = 0; j < ukuran; j++){
      bintang += "*"
    }
    bintang += "<br>"
  }
  document.getElementById('hasil').innerHTML = bintang
  console.log(bintang.split('<br>').join('\n'))
}