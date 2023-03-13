function insert(num) {
  let numero = document.getElementById("saida").innerHTML;
  document.getElementById("saida").innerHTML = `${numero + num}`;
}

function limpar() {
  document.getElementById("saida").innerHTML = ``;
}

function calcular() {
  let calcula = document.getElementById("saida").innerHTML;

  if (calcula) {
    document.getElementById("saida").innerHTML = eval(calcula);
  }
}
