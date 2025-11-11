let xJogador1 = 25;
let xJogador2 = 25;
let xJogador3 = 25;

function setup() {
  createCanvas(400, 400);
  noStroke();
  textAlign(CENTER, CENTER); // Centraliza texto horizontal e vertical
}

function draw() {
  // Define a cor do background ao clicar n
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
    fill('white');
    rect(350, 0, 10, 400);
    fill('black');
    for (let yAtual=0; yAtual < 400; yAtual += 20){
        rect(350, yAtual, 10, 10);
    }

  // Emojis dos jogadores
  textSize(40);
  fill(0);
  text("🤮", xJogador1, 50);
  text("🌂", xJogador2, 200);
  text("😱", xJogador3, 350);

  // Verifica vitória
  if (xJogador1 > 375) {
    // Sombra
    fill(0, 0, 0, 100);
    textSize(40);
    textStyle(BOLD);
    
    // Sombra do texto
    text("Jogador 1 venceu!", width / 2 + 2, height / 2 + 2);
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
    
    // Sombra do texto
    text("Jogador 2 venceu!", width / 2 + 2, height / 2 + 2);
    // Texto principal
    fill('#FF0055');
    text("Jogador 2 venceu!", width / 2, height / 2);
    noLoop();
  }
  
  if (xJogador3 > 375) {
    // Sombra
    fill(0, 0, 0, 100);
    textSize(40);
    textStyle(BOLD);
    
    // Sombra do texto
    text("Jogador 3 venceu!", width / 2 + 2, height / 2 + 2);
    // Texto principal
    fill('#FF0055');
    text("Jogador 3 venceu!", width / 2, height / 2);
    noLoop();
  }
}

function keyPressed() {
  let tecla = key.toLowerCase();
  if (tecla === 'a') {
    xJogador1 += random(10, 20);
  }
  if (tecla === ' ') {
    xJogador2 += random(10, 20);
  }
  if (tecla === 'l') {
    xJogador3 += random(10, 20);
  }
}
