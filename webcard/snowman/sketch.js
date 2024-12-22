// 전역변수 global
let faceType = 1;
let faceX = 200;
let faceY = 150;
let faceScale = 0.5;

let snow1;
let snow2;
let snow1Y = 0;
let snow2Y = 0;

function preload() {
  snow1 = loadImage("snow1.png");
  snow2 = loadImage("snow2.png");
}

// 프로젝트가 처음 실행될 때 1번 호출되는 함수
function setup() {
  createCanvas(400, 600);
  getParam();
}

// 프로젝트가 실행되는 동안 일정한 빈도로 계속 호출되는 함수
function draw() { // frameCount는 draw 안에서만 적용됨
  background(220);
  
  noStroke();
  fill(235);
  ellipse(200, 390, 200, 200);
  fill(245);
  ellipse(200, 265, 150, 150);
  face(faceX, faceY, faceType);
  // face(mouseX, mouseY); // 마우스와의 인터랙션
  
  snow();
}

function snow() {
  // 눈 인터랙션
  // snow1Y = snow1Y + 1;
  // if (snow1Y > height) {
  //   snow1Y = 0;
  // }
  // image(snow1, 0, snow1Y-height, 400, 600);
  // image(snow1, 0, snow1Y, 400, 600);
  
  // 눈 인터랙션 - 모듈러
  snow1Y = (snow1Y + 0.5)%height;
  
  image(snow1, 0, snow1Y-height, 400, 600);
  image(snow1, 0, snow1Y, 400, 600);
  
  snow2Y = (snow2Y + 1)%height;
  
  image(snow2, 0, snow2Y-height, 400, 600);
  image(snow2, 0, snow2Y, 400, 600);
  
}

// 마우스를 클릭했을 때 호출되는 함수
function mouseClicked() {
  let d = dist(faceX, faceY, mouseX, mouseY);
  if (d < 125*faceScale) {
    faceType = faceType + 1;
    if (faceType > 2) {
      faceType = 1;
    }
    setParam();

  }
  
}

// 주소 넣는 함수 (주고 바뀌게 할 때 필요)
function setParam() {
  let url = new URL(location.href); // 주소 가져오기
  url.searchParams.set("faceType", faceType); // 주소에 값 넣기
  history.pushState({}, null, url); // 주소창에 반영
}

// 주소 가져오는 함수 (공유할 때 필요)
function getParam() {
  let url = new URL(location.href);
  faceType = url.searchParams.get("faceType");
  if (faceType == null) {
    faceType == 1;
  }
}

function face(x, y, type) {
  let d = dist(x, y, mouseX, mouseY);
  
  push();
    // translate(width/2, height/2);
    translate(x, y);
    scale(faceScale, 0.5);
  
    // face
    strokeWeight(0);
    if (d < 125*faceScale) {
        fill("pink")
    }
    else {
      fill("white")
    }
    ellipse(0, 0, 250, 250);
    
  
    push();
      translate(40, -30);
  
  
      // eyes1
      if (type == 1) {
        push();
          fill("black");
          ellipse(-40, 0, 22, 24);
          ellipse(35, 0, 22, 24);
        pop();
      }  
  
      // eyes2
      if (type == 2) {
        push();
          fill("black");
          ellipse(-40, 0, 25, 25);
          ellipse(35, 0, 25, 18);
        pop();
      }
  
  
      // nose1
      if (type == 1) {
        push();
          strokeWeight(0);
          fill("orange")
          translate(-10, 30);
          triangle(
            90, 0,
            0, -15,
            0, 15
          );
        pop();
      }      

      // nose2
      if (type == 2) {
        push();
          strokeWeight(0);
          fill("red");
          ellipse(0, 35, 45, 45);
        pop();
      }
  
      

  
      // mouth2
      if (type == 2) {
        push();
          strokeWeight(0);
          fill("black")
          rectMode(CENTER);
          rect(
            -30, 100, 40, 60,
            3);
        pop();
      }
  
      // mouth1
      if (type == 1) {
        strokeWeight(7);
        stroke("black");
        noFill();
        // 호도법 또는 radians
        // arc(0, 0, 200, 200, 0, PI); // 호도법: 0~2파이(0~3.14*2)
        arc(-10, 20, 110, 100, radians(60), radians(120)); // radians(각도)
      }
      
    pop();

  pop();

  // line(x, y, mouseX, mouseY);
  // let d = dist(x, y, mouseX, mouseY);
  // text(d, mouseX, mouseY);
}