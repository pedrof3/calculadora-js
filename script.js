// Alterar todos os nomes declarados para português

function numero(num) {
  if (document.getElementById("saida").innerHTML == `0`) {
    document.getElementById("saida").innerHTML = num;
  } else {
    let numero = document.getElementById("saida").innerHTML;
    document.getElementById("saida").innerHTML = `${numero + num}`;
  }
}

function operador(ope) {
  let screen = document.getElementById("saida").innerHTML;
  let regexOne = /[0-9]+[^0-9$]+[0-9]{1,}/gm;
  let regexTwo = /[0-9]+[^0-9$]/gm;
  if (screen == `0` || screen == `+` || screen == `-`) {
    ope == "+" || ope == "-"
      ? (document.getElementById("saida").innerHTML = ope)
      : console.log(`funcionando`);
  } else if (screen.match(regexOne)) {
    document.getElementById("saida").innerHTML = eval(screen);
    document.getElementById("saida").innerHTML += ope;
  } else if (screen.match(regexTwo)) {
    document.getElementById("saida").innerHTML = screen.replace(
      screen[screen.length - 1],
      ope
    );
    // Controla possível erro de dois operadores juntos
  } else {
    document.getElementById("saida").innerHTML += ope;
  }
}

function limpar() {
  document.getElementById("saida").innerHTML = `0`;
}

function calcular() {
  let calcula = document.getElementById("saida").innerHTML;
  let regexLNN = /[^0-9$]/;

  if (calcula[calcula.length - 1].match(regexLNN)) {
    document.getElementById("saida").innerHTML = calcula.slice(0, -1);
  } else if (calcula) {
    document.getElementById("saida").innerHTML = eval(calcula);
  }
}
