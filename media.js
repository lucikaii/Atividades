'use strict'

const botaoMedia = document.getElementById('botaoMedia')
const bimUm = Number (document.getElementById('bimUm').value)
const bimDois = Number (document.getElementById('bimDois').value)
const bimTres = Number (document.getElementById('bimTres').value)
const bimQuatro = Number (document.getElementById('bimQuatro').value)
const mediafinal = document.getElementById('media')

function somarMedia(){
 const media = (bimUm + bimDois + bimTres + bimQuatro)/4
 mediafinal.textContent = media
 
}


botaoMedia.addEventListener('click', somarMedia)

