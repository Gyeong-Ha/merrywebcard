let message = "해 피 뉴  이  어 ";

// UI
let input;

function setup() {
  createCanvas(400, 600);
  
  input = createInput();
  input.input(typing);
  
  textFont("Gasoek One");

  getParam();
}

function typing() {
  message = input.value();
  setParam();
}

// 주소 넣는 함수 (주고 바뀌게 할 때 필요)
function setParam() {
  let url = new URL(location.href); // 주소 가져오기
  url.searchParams.set("message", message); // 주소에 값 넣기
  history.pushState({}, null, url); // 주소창에 반영
}

// 주소 가져오는 함수 (공유할 때 필요)
function getParam() {
  let url = new URL(location.href);
  message = url.searchParams.get("message");
  if (message == null) {
    message = "해 피 뉴  이  어 ";
  }
}

function draw() {
  background("rgb(39,58,101)");
  
  rectMode(CENTER);
  textSize(40);
  textAlign(CENTER, CENTER);
  
  // 1번째 줄
  let tongueMove = 0;
  if (frameCount%60>30) {
    tongueMove = -10;
  }
  fill("rgb(198,99,116)")
  rect(75+tongueMove, 120, 30, 10);
  fill("rgb(129,172,220)")
  arc(125, 125, 100, 100, radians(180), radians(270), PIE);
  fill("black")
  ellipse(110, 110, 11, 11);
  
  fill("rgb(129,172,220)")
  rect(150, 100, 50, 50);
  rect(200, 100, 50, 50);
  rect(250, 100, 50, 50);
  arc(275, 125, 100, 100, radians(-90), radians(0), PIE);
  fill("white")
  text(message[0], 150, 100);
  text(message[1], 200, 100);
  text(message[2], 250, 100);
  
  fill("rgb(129,172,220)")
  rect(300, 150, 50, 50);
  
  // 2번째 줄
  arc(125, 225, 100, 100, radians(180), radians(270), PIE);
  rect(150, 200, 50, 50);
  rect(200, 200, 50, 50);
  rect(250, 200, 50, 50);
  arc(275, 175, 100, 100, radians(0), radians(90), PIE);
  fill("white")
  text(message[3], 150, 200);
  text(message[4], 200, 200);
  text(message[5], 250, 200);
  
  fill("rgb(129,172,220)")
  rect(100, 250, 50, 50);
  
  // 3번째 줄
  arc(125, 275, 100, 100, radians(90), radians(180), PIE);
  rect(150, 300, 50, 50);
  rect(200, 300, 50, 50);
  rect(250, 300, 50, 50);
  arc(275, 325, 100, 100, radians(-90), radians(0), PIE);
  fill("white")
  text(message[6], 150, 300);
  text(message[7], 200, 300);
  text(message[8], 250, 300);
  
  fill("rgb(129,172,220)")
  rect(300, 350, 50, 50);
  
  // 4번째 줄
  arc(125, 425, 100, 100, radians(180), radians(270), PIE);
  rect(150, 400, 50, 50);
  rect(200, 400, 50, 50);
  rect(250, 400, 50, 50);
  arc(275, 375, 100, 100, radians(0), radians(90), PIE);
  fill("white")
  text(message[9], 150, 400);
  text(message[10], 200, 400);
  text(message[11], 250, 400);
  
  textSize(90);
  text(2025, 200, 500);
}