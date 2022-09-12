const cards = {
  "container": {
      "titulo": "Qual console da geração atual é o mais poderoso?",
      "info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat luctus venenatis.Cras sollicitudin commodo sapien at laoreet. Integer dui orci, pharetra a condimentum sit amet, molestie ut tellus. Pellentesque rhoncus elit id magna laoreet scelerisque. Sed ac odio mi. Nullam nec dignissim mi. Morbi rhoncus est ornare, sollicitudin augue non, vehicula erat. Vestibulum sed urna feugiat, facilisis ante vitae, ullamcorper eros. Mauris erat lorem, congue non hendrerit ac, semper ac lorem. In et est quis felis semper sodales sed blandit urna. Nullam faucibus, nulla eget pretium tempus, magna ante dictum ligula, quis viverra est lacus non ex. Mauris ut turpis sed sem egestas sollicitudin. Duis vel tincidunt nisi, at lobortis neque. Nam facilisis mattis velit non sodales. Mauris id risus cursus, congue sapien et, fermentum risus. \n\n Donec ornare lobortis finibus. Mauris mattis elementum quam eget pharetra. In hac habitasse platea dictumst. Nam consequat neque lacus, non iaculis nulla dignissim id. Praesent sed rutrum elit, id commodo lacus. Ut at neque cursus, pharetra arcu quis, euismod orci. Proin sodales imperdiet mi, id pretium ante volutpat at. Suspendisse non tincidunt lorem. Vivamus egestas pellentesque nisl id semper. Quisque aliquet bibendum mauris eu elementum. Aenean tempus purus dolor, in blandit nulla maximus nec. Sed vel dolor erat. Aenean vel ante et orci aliquam imperdiet quis eget massa."
  }
}

const tituloCard = cards.container["titulo"]
const infoCard = cards.container["info"]
const cardTittle01 = document.querySelectorAll(".card__page-sub")[0].innerText=tituloCard
const cardInfo01 = document.querySelectorAll(".card__page-txt")[0].innerText=infoCard
