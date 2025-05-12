function verificar() {
  let data = new Date();
  let ano = data.getFullYear();

  let fAno = document.getElementById('txtAno');

  let res = document.querySelector('div#res');

  if (fAno.value.length == 0 || Number(fAno.value) > ano) {
    window.alert('[ERRO] Ano inválido. Verifique os dados, e tente novamente!')
  } else {
    let fSex = document.getElementsByName('radSex');
    let idade = ano - Number(fAno.value);
    // res.innerHTML = `Idade calculada: ${idade}`; //teste

    let img = document.createElement('img');
    img.setAttribute('id', 'foto'); //atribui o id 'foto' para o element img do HTML

    let genero = '';
    if (fSex[0].checked) {
      genero = 'Masculino';
      if (idade >= 0 && idade < 2) {
        //bebê
        img.setAttribute('src', 'assets/bebeM.png');
      } else if (idade >= 2 && idade < 12) {
        //criança
        img.setAttribute('src', 'assets/criancaM.png');
      } else if (idade >= 12 && idade < 30) {
        //jovem
        img.setAttribute('src', 'assets/jovemM.png');
      } else if (idade >= 30 && idade < 60) {
        //adulto
        img.setAttribute('src', 'assets/adultoM.png');
      } else if (idade >= 60) {
        //idoso
        img.setAttribute('src', 'assets/idosoM.png');        
      }
    } else if (fSex[1].checked) {
      genero = 'Feminino';
      if (idade >= 0 && idade < 2) {
        //bebê
        img.setAttribute('src', 'assets/bebeF.png');
      } else if (idade >= 2 && idade < 12) {
        //criança
        img.setAttribute('src', 'assets/criancaF.png');
      } else if (idade >= 12 && idade < 30) {
        //jovem
        img.setAttribute('src', 'assets/jovemF.png');
      } else if (idade >= 30 && idade < 60) {
        //adulto
        img.setAttribute('src', 'assets/adultoF.png');
      } else if (idade >= 60) {
        //idoso
        img.setAttribute('src', 'assets/idosoF.png');       
      }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} ano(s) de idade.`;
    res.appendChild(img);
  }
}