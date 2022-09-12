const textoCarousel01="estoques do ps5 voltam às principais lojas online!"
const textoCarousel02="confira quais os melhores smartphones de 2022"

document.querySelector('#textoCarousel01').innerText=textoCarousel01
document.querySelector('#textoCarousel02').innerText=textoCarousel02

const cards = {
  "card01": {
      "titulo": "Tecnologia 5G",
      "info": "Será que é o momento de investir em aparelhos com a tecnologia?"
  },
  "card02": {
    "titulo": "PS5 ou XBOX Series X?",
    "info": "Qual console da nova geração é o mais poderoso?"
  },
  "card03": {
    "titulo": "Novidade Nvidia",
    "info": "Nova placa de entrada promete excelente custo benefício"
  }
}

const titulo01 = cards.card01["titulo"]
const info01 = cards.card01["info"]
const cardTittle01 = document.querySelectorAll(".card-tittle")[0].innerText=titulo01
const cardInfo01 = document.querySelectorAll(".card-info")[0].innerText=info01

const titulo02 = cards.card02["titulo"]
const info02 = cards.card02["info"]
const cardTittle02 = document.querySelectorAll(".card-tittle")[1].innerText=titulo02
const cardInfo02 = document.querySelectorAll(".card-info")[1].innerText=info02


const titulo03 = cards.card03["titulo"]
const info03 = cards.card03["info"]
const cardTittle03 = document.querySelectorAll(".card-tittle")[2].innerText=titulo03
const cardInfo03 = document.querySelectorAll(".card-info")[2].innerText=info03
