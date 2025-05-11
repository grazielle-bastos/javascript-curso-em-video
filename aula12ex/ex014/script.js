function carregar() {
  let msg = window.document.getElementById('msg');
  let img = window.document.getElementById('imagem');

  let data = new Date();
  let hora = data.getHours();

  msg.innerHTML = `Agora são ${hora} horas`;

  if (hora >= 6 && hora < 12) {
    //bom dia!
    img.src = 'assets/manha.png';
    document.body.style.background = '#ecc292';
  } else if (hora >= 12 && hora <= 18) {
    //boa tarde!
    img.src = 'assets/tarde.png';
    document.body.style.background = '#c9cbbc';
  } else if (hora >= 19 && hora <= 23) {
    //boa noite!
    img.src = 'assets/noite.png';
    document.body.style.background = '#1b2e3f';
  } else if (hora >= 0 && hora <= 5) {
    //boa madrugada!
    img.src = 'assets/madrugada.png';
    document.body.style.background = '#1d1d27';
  }
}