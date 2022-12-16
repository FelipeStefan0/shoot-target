let fundo_menu;

let tela = 1;

let largura = 150;
let altura = 50;

let xMenu = 225;
let yMenu1 = 130;
let yMenu2 = 190;
let yMenu3 = 250;

let centro = 300;

let municao;

let vitoria = 0;

//Fases

let tempo1 = 30;
let tempo2 = 20;
let tempo3 = 10;

let contador1 = 50;
let contador2 = 30;
let contador3 = 10;

// Movimento do alvo
let xpos, ypos;

let xdirection = 1;
let ydirection = 1;

//Fase 1
let xspeed1 = 4.8;
let yspeed1 = 4.2;

//Fase 2
let xspeed2 = 6.8;
let yspeed2 = 6.2;

//Fase 3
let xspeed3 = 10.8;
let yspeed3 = 10.2;


function preload() {
  //Fonte
  vt323 = loadFont('fonts/VT323-Regular.ttf');
  
  //Tela de Menu
  fundo_menu = loadImage('img/background.png');
  
  //Tela de Controles
  mouse1 = loadImage('img/mouse1.png');
  mouse2 = loadImage('img/mouse2.png');
  
  //Tela de Fases
  fundo_fase = loadImage('img/campo_de_tiro.png');
  alvo = loadImage('img/alvo.png');
  municao4 = loadImage('img/municao/1.png');
  municao3 = loadImage('img/municao/1.png');
  municao2 = loadImage('img/municao/2.png');
  municao1 = loadImage('img/municao/3.png');
  
  //Tela Game Over
  perdeu = loadImage('img/perdeu.png');
  
  //Tela You Win
  ganhou = loadImage('img/ganhou.png');
  
  // Tela End Game
  zerou = loadImage('img/zerou.png');
  
  //Tela Educativa
  educ = loadImage('img/educ.png')
}

function setup() {
  createCanvas(600, 400);
  municao = municao4;
  frameRate(30);
  xpos = width / 2;
  ypos = height / 2;
}

function mouseClicked() {
  if(tela == 7 && mouseX >= xpos && mouseX <= xpos+150 && mouseY >= ypos && mouseY <= ypos+150) {
    xpos = random(0, 450);
    ypos = random(60, 250)
    contador1--;
  } else if(tela == 8 && mouseX >= xpos && mouseX <= xpos+100 && mouseY >= ypos && mouseY <= ypos+100) {
    xpos = random(0, 500);
    ypos = random(60, 300);
    contador2--;
  } else if(tela == 9 && mouseX >= xpos && mouseX <= xpos+50 && mouseY >= ypos && mouseY <= ypos+50) {
    xpos = random(0, 550);
    ypos = random(60, 350);
    contador3--;
  } else if(municao == municao4 && tela == 7 || municao == municao4 && tela == 8 || municao == municao4 && tela == 9) {
    municao = municao3;
  } else if(municao == municao3 && tela == 7 || municao == municao3 && tela == 8 || municao == municao3 && tela == 9) {
    municao = municao2;
  } else if(municao == municao2 && tela == 7 || municao == municao2 && tela == 8 || municao == municao2 && tela == 9) {
    municao = municao1;
  } else if(municao == municao1 && tela == 7 || municao == municao1 && tela == 8 || municao == municao1 && tela == 9) {
    tela = 5;
  }
}

function draw() {
  //Tela "Menu" - Finalizado
  if(tela == 1) {
    image(fundo_menu, 0, 0);
    
    cursor(CROSS);
    textAlign(CENTER, CENTER);
    textSize(60);
    textFont(vt323);
    
    //Título do jogo
    fill(230);
    noStroke();
    text("Shoot Target", centro, 70);
    
    //Tamanho da fonte dos botões
    textSize(26);
    
    //Botão 1
    if(mouseX >= xMenu && mouseX <= xMenu+largura && mouseY >= yMenu1 && mouseY <= yMenu1+altura){
      if(mouseIsPressed) {
        tela = 2
        stroke(230);
        fill(230);
        rect(xMenu, yMenu1, largura, altura, 10);

        fill(0);
        noStroke();
        text("Atirar", centro, 152);
        
      } else {
        stroke(100);
        fill(50, 20, 20);
        rect(xMenu, yMenu1, largura, altura, 10);

        fill(140);
        noStroke();
        text("Atirar", centro, 152);
        }
    } else {
      stroke(200);
      fill(50, 20, 20);
      rect(xMenu, yMenu1, largura, altura, 10);
      
      fill(240);
      noStroke();
      text("Atirar", centro, 152);
    }
    
    //Botão 2
    if(mouseX >= xMenu && mouseX <= xMenu+largura && mouseY >= yMenu2 && mouseY <= yMenu2+altura){
      if(mouseIsPressed){
        tela = 3
        stroke(230);
        fill(230);
        rect(xMenu, yMenu2, largura, altura, 10);

        fill(0);
        noStroke();
        text("Controles", centro, 212);
      } else {
        stroke(100);
        fill(50, 20, 20);
        rect(xMenu, yMenu2, largura, altura, 10);

        fill(140);
        noStroke();
        text("Controles", centro, 212);
      }
    } else {
      stroke(200);
      fill(50, 20, 20);
      rect(xMenu, yMenu2, largura, altura, 10);

      fill(240);
      noStroke();
      text("Controles", centro, 212);
    }

    //Botão 3
    if(mouseX >= xMenu && mouseX <= xMenu+largura && mouseY >= yMenu3 && mouseY <= yMenu3+altura){      
      if(mouseIsPressed) {
        tela = 4;
        stroke(230);
        fill(230);
        rect(xMenu, yMenu3, largura, altura, 10);

        fill(0);
        noStroke();
        text("Sobre", centro, 272);
      } else {
        stroke(100);
        fill(50, 20, 20);
        rect(xMenu, yMenu3, largura, altura, 10);

        fill(140);
        noStroke();
        text("Sobre", centro, 272);
      }
    } else {
      stroke(200);
      fill(50, 20, 20);
      rect(xMenu, yMenu3, largura, altura, 10);

      fill(240);
      noStroke();
      text("Sobre", centro, 272);
    }
   
  }
  
  //Tela "Fases" - Finalizado
  else if(tela == 2) {
    background(50, 20, 20);
    
    cursor(CROSS);
    textAlign(CENTER, CENTER);
    textSize(60);
    textFont(vt323);
    
    fill(230);
    noStroke();
    text("Fases", centro, 70);
    
    textSize(35)
    fill(0, 200, 0);
    noStroke();
    text("Fácil", centro, 150);
    
    fill(200, 200, 0);
    noStroke();
    text("Médio", centro, 210);
    
    fill(200, 0, 0);
    noStroke();
    text("Difícil", centro, 270);
    
    textSize(26);
    
    //Botão 1
    if(tela == 2 && mouseX >= xMenu-200 && mouseX <= xMenu+largura-200 && mouseY >= yMenu1 && mouseY <= yMenu1+altura){
      if(mouseIsPressed){
        tela = 7
        tempo1 = 30;
        contador1 = 50;
        municao = municao4;
        stroke(230);
        fill(230);
        rect(xMenu-200, yMenu1, largura, altura, 10);

        fill(0);
        noStroke();
        text("Fase 1", centro-200, 152);
        
        alvoX = random(0, 450);
        alvoY = random(60, 250);
      } else {
        stroke(100);
        fill(50, 20, 20);
        rect(xMenu-200, yMenu1, largura, altura, 10);

        fill(140);
        noStroke();
        text("Fase 1", centro-200, 152);
      }
    } else {
      stroke(200);
      fill(50, 20, 20);
      rect(xMenu-200, yMenu1, largura, altura, 10);

      fill(240);
      noStroke();
      text("Fase 1", centro-200, 152);
    }

    
    //Botão 2
    if(mouseX >= xMenu-200 && mouseX <= xMenu+largura-200 && mouseY >= yMenu2 && mouseY <= yMenu2+altura && vitoria >= 1){
      if(mouseIsPressed){
        tela = 8
        tempo2 = 20;
        contador2 = 30;
        municao = municao4;
        stroke(230);
        fill(230);
        rect(xMenu-200, yMenu2, largura, altura, 10);

        fill(0);
        noStroke();
        text("Fase 2", centro-200, 212);
        
        alvoX = random(0, 500);
        alvoY = random(60, 300);
      } else {
        stroke(100);
        fill(50, 20, 20);
        rect(xMenu-200, yMenu2, largura, altura, 10);

        fill(140);
        noStroke();
        text("Fase 2", centro-200, 212);
      }
    }else if(vitoria >= 1) {
      stroke(200);
      fill(50, 20, 20);
      rect(xMenu-200, yMenu2, largura, altura, 10);

      fill(240);
      noStroke();
      text("Fase 2", centro-200, 212);
    }else {
      stroke(200);
      fill(200);
      rect(xMenu-200, yMenu2, largura, altura, 10);

      fill(0);
      noStroke();
      text("Fase 2", centro-200, 212);
    }

    //Botão 3
    if(mouseX >= xMenu-200 && mouseX <= xMenu+largura-200 && mouseY >= yMenu3 && mouseY <= yMenu3+altura && vitoria >= 2){      
      if(mouseIsPressed) {
        tela = 9;
        tempo3 = 10;
        contador3 = 10;
        municao = municao4;
        stroke(230);
        fill(230);
        rect(xMenu-200, yMenu3, largura, altura, 10);

        fill(0);
        noStroke();
        text("Fase 3", centro-200, 272);
        alvoX = random(0, 550);
        alvoY = random(60, 350);
      } else {
        stroke(100);
        fill(50, 20, 20);
        rect(xMenu-200, yMenu3, largura, altura, 10);

        fill(140);
        noStroke();
        text("Fase 3", centro-200, 272);
      }
    }else if(vitoria >= 2) {
      stroke(200);
      fill(50, 20, 20);
      rect(xMenu-200, yMenu3, largura, altura, 10);

      fill(240);
      noStroke();
      text("Fase 3", centro-200, 272);
    }else {
      stroke(200);
      fill(200);
      rect(xMenu-200, yMenu3, largura, altura, 10);

      fill(0);
      noStroke();
      text("Fase 3", centro-200, 272);
    }
    
    
     //Botão Voltar
    textAlign(LEFT, LEFT)
    if(mouseX >= 430 && mouseX <= 580 && mouseY >= 330 && mouseY <= 380){
      if(mouseIsPressed) {
        tela = 1
        stroke(230);
        fill(230);
        rect(430, 330, largura, altura, 10);

        fill(0);
        noStroke();
        text("Voltar", 474, 362);
      } else {
        stroke(100);
        fill(50, 20, 20);
        rect(430, 330, largura, altura, 10);

        fill(140);
        noStroke();
        text("Voltar", 474, 362);
        }
    } else {
      stroke(200);
      fill(50, 20, 20);
      rect(430, 330, largura, altura, 10);
      
      fill(240);
      noStroke();
      text("Voltar", 474, 362);
    }
}
  
  //Tela "Controles" - Finalizado
  else if(tela == 3) {
    background(50, 20, 20);
    
    textAlign(CENTER, CENTER)
    textSize(26);
    textFont(vt323);
    fill(230);
    
    //Título
    text("Controles", centro, 40)
    
    //Controles
    textAlign(LEFT, LEFT)
    text("Movimentar: Mouse", 20, 100);
    image(mouse1, 40, 110, 60, 90);
    text("Atirar: Botão Esquerdo do Mouse", 20, 220);
    image(mouse2, 40, 230, 60, 90);
    
    //Botão Voltar
    textAlign(LEFT, LEFT)
    if(mouseX >= 430 && mouseX <= 580 && mouseY >= 330 && mouseY <= 380){
      if(mouseIsPressed) {
        tela = 1
        stroke(230);
        fill(230);
        rect(430, 330, largura, altura, 10);

        fill(0);
        noStroke();
        text("Início", 474, 362);
      } else {
        stroke(100);
        fill(50, 20, 20);
        rect(430, 330, largura, altura, 10);

        fill(140);
        noStroke();
        text("Início", 474, 362);
        }
    } else {
      stroke(200);
      fill(50, 20, 20);
      rect(430, 330, largura, altura, 10);
      
      fill(240);
      noStroke();
      text("Início", 474, 362);
    }
  }
  
  //Tela "Sobre" - Finalizado
  else if(tela == 4) {
    background(50, 20, 20);
    
    textAlign(LEFT, LEFT)
    textSize(26);
    textFont(vt323);
    fill(230);
    
    text("O Shoot Target é um jogo de tiro, no qual o jogador \ntem o objetivo de derrubar todos alvos de cada fase,\nassim possibilitando que passe de fase. Quanto mais\nlonge o jogador for, mais pontos vai ganhando e mais\ndifícil vai ficando de acertar os alvos.", 20, 50);
    text("O jogo foi desenvolvido pelo aluno Felipe Marques de\nStefano, aluno do primeiro ano do curso de C&T - UFRN\nno ano de 2022 como projeto final para a matéria de\nLógica de Programação.", 20, 220);
    
    //Botão Voltar
    if(mouseX >= 430 && mouseX <= 580 && mouseY >= 330 && mouseY <= 380){
      if(mouseIsPressed) {
        tela = 1
        stroke(230);
        fill(230);
        rect(430, 330, largura, altura, 10);

        fill(0);
        noStroke();
        text("Início", 474, 362);
      } else {
        stroke(100);
        fill(50, 20, 20);
        rect(430, 330, largura, altura, 10);

        fill(140);
        noStroke();
        text("Início", 474, 362);
        }
    } else {
      stroke(200);
      fill(50, 20, 20);
      rect(430, 330, largura, altura, 10);
      
      fill(240);
      noStroke();
      text("Início", 474, 362);
    }
  }
  
  //Tela "Perdeu" - Finalizado
  else if(tela == 5) {
    image(perdeu, 0, 0);
    
    //Botão Voltar
    textAlign(CENTER, CENTER)
    textSize(26);
    textFont(vt323);
    fill(230);
    textAlign(LEFT, LEFT)
    if(mouseX >= 24 && mouseX <= 174 && mouseY >= 330 && mouseY <= 380){
      if(mouseIsPressed) {
        tela = 1
        stroke(230);
        fill(230);
        rect(24, 330, largura, altura, 10);

        fill(0);
        noStroke();
        text("Início", 70, 362);
        
      } else {
        stroke(100);
        fill(50, 20, 20);
        rect(24, 330, largura, altura, 10);

        fill(140);
        noStroke();
        text("Início", 70, 362);
        }
    } else {
      stroke(200);
      fill(50, 20, 20);
      rect(24, 330, largura, altura, 10);
      
      fill(240);
      noStroke();
      text("Início", 70, 362);
    }
  }
  
  //Tela "Ganhou"
  else if(tela == 6) {
  image(ganhou, 0, 0);
    
    //Botão Voltar
    textAlign(CENTER, CENTER)
    textSize(26);
    textFont(vt323);
    fill(230);
    textAlign(LEFT, LEFT)
    if(mouseX >= 24 && mouseX <= 174 && mouseY >= 330 && mouseY <= 380){
      if(mouseIsPressed) {
        tela = 2
        stroke(230);
        fill(230);
        rect(24, 330, largura, altura, 10);

        fill(0);
        noStroke();
        text("Fases", 74, 362);
        
      } else {
        stroke(100);
        fill(50, 20, 20);
        rect(24, 330, largura, altura, 10);

        fill(140);
        noStroke();
        text("Fases", 74, 362);
        }
    } else {
      stroke(200);
      fill(50, 20, 20);
      rect(24, 330, largura, altura, 10);
      
      fill(240);
      noStroke();
      text("Fases", 74, 362);
    }
  }
  
  //Fases
  //Fase 1
  else if(tela == 7) {
    image(fundo_fase, 0, 0); 
    xpos = xpos + xspeed1 * xdirection;
    if (xpos > width - 150 || xpos < 0) {
      xdirection *= -1;
    }
    image(alvo, xpos, ypos, 150, 150);
    image(municao, 10, 10);
    text(contador1, centro-40, 50)
    image(alvo, centro, 20, 40, 40);
    textSize(40);
    text(tempo1, 550, 50)
    if (frameCount % 60 == 0 && tempo1 > 0) { 
      tempo1--;
    }
    if(tempo1 == 0) {
      tela = 5;
    }
    if(contador1 == 0) {
      vitoria=1;
      tela = 6;
    }
  }
  
  //Fase 2
  else if(tela == 8) {
    image(fundo_fase, 0, 0);        
    xpos = xpos + xspeed2 * xdirection;
    ypos = ypos + yspeed2 * ydirection;
    if (xpos > width - 100 || xpos < 0) {
      xdirection *= -1;
    }
    if (ypos > height - 100 || ypos < 0) {
      ydirection *= -1;
    }
    image(alvo, xpos, ypos, 100, 100);
    image(municao, 10, 10);
    text(contador2, centro-40, 50)
    image(alvo, centro, 20, 40, 40);
    textSize(40);
    text(tempo2, 550, 50)
    if (frameCount % 60 == 0 && tempo2 > 0) { 
      tempo2--;
    }
    if(tempo2 == 0) {
      tela = 5;
    }
    if(contador2 == 0) {
      vitoria=2;
      tela = 6;
    }
  }
  
  //Fase 3
  else if(tela == 9) {
    image(fundo_fase, 0, 0);        
    xpos = xpos + xspeed3 * xdirection;
    ypos = ypos + yspeed3 * ydirection;
    if (xpos > width - 50 || xpos < 0) {
      xdirection *= -1;
    }
    if (ypos > height - 50 || ypos < 0) {
      ydirection *= -1;
    }
    image(alvo, xpos, ypos, 50, 50);
    image(municao, 10, 10);
    text(contador3, centro-40, 50)
    image(alvo, centro, 20, 40, 40);
    textSize(40);
    text(tempo3, 550, 50)
    if (frameCount % 60 == 0 && tempo3 > 0) { 
      tempo3--;
    }
    if(tempo3 == 0) {
      tela = 5;
    }
    if(contador3 == 0) {
      vitoria=3;
      tela = 10;
    }
  }

  //End Game
  else if(tela == 10) {
    image(zerou, 0, 0);
    
    //Botão Voltar
    textAlign(CENTER, CENTER)
    textSize(26);
    textFont(vt323);
    fill(230);
    textAlign(LEFT, LEFT)
    if(mouseX >= 24 && mouseX <= 174 && mouseY >= 330 && mouseY <= 380){
      if(mouseIsPressed) {
        tela = 11
        stroke(230);
        fill(230);
        rect(14, 330, largura-27, altura, 10);

        fill(0);
        noStroke();
        text("Próximo", 40, 362);
        
      } else {
        stroke(100);
        fill(50, 20, 20);
        rect(14, 330, largura-27, altura, 10);

        fill(140);
        noStroke();
        text("Próximo", 40, 362);
        }
    } else {
      stroke(200);
      fill(50, 20, 20);
      rect(14, 330, largura-27, altura, 10);
      
      fill(240);
      noStroke();
      text("Próximo", 40, 362);
    }
  }
  
  //Tela Educativa
  else if(tela == 11) {
    image(educ, 0, 0);
   
    //Botão Voltar
    textSize(18);
    if(mouseX >= 430 && mouseX <= 580 && mouseY >= 330 && mouseY <= 380){
      if(mouseIsPressed) {
        tela = 1
        
        stroke(230);
        fill(230);
        rect(490, 370, largura-50, altura-30, 10);
        
        fill(0);
        noStroke();
        text("Recomeçar", 507, 384);
        
        //Reconfiguração
        municao = municao4;
        vitoria = 0;
      } else {
        stroke(100);
        fill(50, 20, 20);
        rect(490, 370, largura-50, altura-30, 10);

        fill(140);
        noStroke();
        text("Recomeçar", 507, 384);
        }
    } else {
      stroke(200);
      fill(50, 20, 20);
      rect(490, 370, largura-50, altura-30, 10);
      
      fill(240);
      noStroke();
      text("Recomeçar", 507, 384);
    }
  }
}
