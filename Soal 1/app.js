var drawingTools = document.getElementById('drawingTools')
drawingTools.addEventListener('submit', draw, false)

function draw(e){
  e.preventDefault()
  let jenisBangunan = parseInt(document.getElementById('jenisBangunan').value)
  if(jenisBangunan == 1){
    persegi()
  }
}

function persegi(){
  let ukuran = parseInt(document.getElementById('ukuranBangunan').value)
  for(let i = 0; i < ukuran.length; i++)
}