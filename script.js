function number(num) {
  if (document.getElementById("saida").innerHTML == `0`) {
    document.getElementById("saida").innerHTML = num;
  } else {
    let numero = document.getElementById("saida").innerHTML;
    document.getElementById("saida").innerHTML = `${numero + num}`;
  }
}

function operator(ope) {
  let screen = document.getElementById("saida").innerHTML
  let rgex = /[0-9][^0-9$]/
  if (screen == `0` || screen == `+` || screen == `-`) {
    document.getElementById("saida").innerHTML = ope;
  } else if (screen.match(rgex)) {
    console.log('foi crl')
  }
  else {
    document.getElementById("saida").innerHTML += ope
  }
}

function limpar() {
  document.getElementById("saida").innerHTML = `0`;
}

function calcular() {
  let calcula = document.getElementById("saida").innerHTML;

  if (calcula) {
    document.getElementById("saida").innerHTML = eval(calcula);
  }
}
