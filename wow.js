let canvas;
let ctx;
let incrementor = 0;
let decrementor = 500;
let speeed = 10;
let big = incrementor + 100;
let iBig = decrementor + 900;
let small = incrementor - 100;
let iSmall = decrementor - 100;
window.onload = function () {
  canvas = document.getElementById("plzwork");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  setInterval(drawBoxxy, 50);
};

function drawBoxxy() {
  iBig = iBig - speeed;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  ctx.fillStyle = "blue";
  ctx.fillRect(incrementor++, 10, 100, 100);
  ctx.fillStyle = "green";
  ctx.fillRect(incrementor--, decrementor--, 250, 250);
  ctx.fillStyle = "red";
  ctx.fillRect(incrementor++, incrementor++, incrementor++, incrementor++);
  ctx.fillStyle = "orange";
  ctx.fillRect(decrementor--, 10, 100, 100);
  ctx.fillStyle = "yellow";
  ctx.fillRect(decrementor--, incrementor--, incrementor++, incrementor++);
  ctx.fillStyle = "purple";
  ctx.fillRect(decrementor--, decrementor, decrementor--, decrementor--);
  ctx.fillStyle = "white";
  ctx.fillRect(iBig--, incrementor++, incrementor--, incrementor--);
  ctx.fillStyle = "cyan";
  ctx.fillRect(iBig--, 300, big++, 100);
  ctx.fillStyle = "cyan";
  ctx.fillRect(300, iBig--, 100, big++);
}
