let paso = 0;
let contador = 0;

function siguiente() {
  paso++;

  document.querySelectorAll('.texto').forEach(div => div.classList.add('oculto'));

  if (paso === 1) {
    document.getElementById("pregunta").classList.remove("oculto");
  } else if (paso === 2) {
    document.getElementById("propuesta").classList.remove("oculto");
  }
}

function jugar() {
  document.getElementById("propuesta").classList.add("oculto");
  document.getElementById("juego").classList.remove("oculto");
  moverComida();
}

function moverComida() {
  const comida = document.getElementById("comida");
  comida.style.position = 'absolute';
  comida.style.top = Math.random() * 300 + "px";
  comida.style.left = Math.random() * 200 + "px";
}

function atrapar() {
  contador++;
  document.getElementById("contador").textContent = `Veces atrapada: ${contador}/5`;

  if (contador < 5) {
    moverComida();
  } else {
    document.getElementById("juego").classList.add("oculto");
    document.getElementById("resultado").classList.remove("oculto");
    document.getElementById("resultado").innerHTML = "<p>Podemos comer alguna de esas opciones?🎉🍔🍕</p>";
  }
}
