let xJogador1 = 25;
let xJogador2 = 25;

function setup() {
  createCanvas(400, 400);
  noStroke();
  textAlign(CENTER, CENTER); // Centraliza texto horizontal e vertical
}

function draw() {
  // Define a cor do background ao clicar na página
  if (focused == true){
    for (let y = 0; y < height; y++) {
      let inter = map(y, 0, height, 0, 1);
      let c = lerpColor(color('#6EC5E9'), color('#A8E6CF'), inter);
      fill(c);
      rect(0, y, width, 1);
      }
  } else {
    background("rgb(238, 178, 178)");
    }

  // Linha de chegada destacada
  stroke('#FF8C00');
  strokeWeight(2);
  fill('#FFD700');
  rect(350, 0, 10, 400);
  noStroke();

  // Emojis dos jogadores
  textSize(40);
  fill(0);
  text("🤮", xJogador1, 100);
  text("😱", xJogador2, 300);

  // Verifica vitória
  if (xJogador1 > 375) {
    // Sombra
    fill(0, 0, 0, 100);
    textSize(40);
    textStyle(BOLD);
    text("Jogador 1 venceu!", width / 2 + 2, height / 2 + 2); // levemente deslocado
    // Texto principal
    fill('#FF0055');
    text("Jogador 1 venceu!", width / 2, height / 2);
    noLoop();
  }

  if (xJogador2 > 375) {
    // Sombra
    fill(0, 0, 0, 100);
    textSize(40);
    textStyle(BOLD);
    text("Jogador 2 venceu!", width / 2 + 2, height / 2 + 2);
    // Texto principal
    fill('#FF0055');
    text("Jogador 2 venceu!", width / 2, height / 2);
    noLoop();
  }
}

function keyPressed() {
  let tecla = key.toLowerCase();
  if (tecla === 'a') {
    xJogador1 += random(10, 20);
  }
  if (tecla === 'l') {
    xJogador2 += random(10, 20);
  }
}
