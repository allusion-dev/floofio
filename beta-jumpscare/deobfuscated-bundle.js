let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");
window.onresize = a => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
};
let bckimg = new Image();
bckimg.src = "./resources/desert.svg";
requestAnimationFrame(drawFrame);
var trailer = document.getElementById("trailer");
let t = 0;
let mx = 0;
let my = 0;
let hovering = false;

function drawFrame(b) {
  if (b === undefined) {
    b;
  }
  t = b - b;
  for (let c = -256; c <= canvas.width; c += 256) {
    for (let d = -256; d - 100 <= canvas.height; d += 256) {
      ctx.drawImage(bckimg, c, d + 100 * Math.sin(t / 2000), 256, 256);
    }
  }
  ctx.font = "bold 60px Ubuntu";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "white";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#6f6f6f";
  ctx.lineWidth = 10;
  ctx.strokeText("floof.cx", canvas.width / 2, 4.5 * canvas.height / 10);
  ctx.fillText("floof.cx", canvas.width / 2, 4.5 * canvas.height / 10);
  ctx.font = "bold 18px Ubuntu";
  ctx.lineWidth = 5;
  ctx.strokeText("Beta, DO NOT LEAK", canvas.width / 2, 5 * canvas.height / 10);
  ctx.fillText("Beta, DO NOT LEAK", canvas.width / 2, 5 * canvas.height / 10);
  ctx.fillStyle = "#1cd128";
  ctx.strokeStyle = "#11981a";
  ctx.lineWidth = 5;
  if (mx > canvas.width / 2 - 90 && mx < canvas.width / 2 + 180 && my > 5.3 * canvas.height / 10 && my < 5.3 * canvas.height / 10 + 40) {
    ctx.fillStyle = "#2ce138";
    ctx.strokeStyle = "#21a82a";
    hovering = true;
  } else {
    hovering = false;
  }
  ctx.beginPath();
  ctx.roundRect(canvas.width / 2 - 90, 5.3 * canvas.height / 10, 180, 40, 5);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
  ctx.fillStyle = "white";
  ctx.strokeStyle = "#6f6f6f";
  ctx.strokeText("Enter Game", canvas.width / 2, 5.3 * canvas.height / 10 + 20);
  ctx.fillText("Enter Game", canvas.width / 2, 5.3 * canvas.height / 10 + 20);
  requestAnimationFrame(drawFrame);
}
document.onmousemove = e => {
  mx = e.pageX;
  my = e.pageY;
};
document.onclick = f => {
  if (hovering) {
    canvas.remove();
    trailer.width = window.innerWidth;
    let g = trailer.clientHeight;
    trailer.style.marginTop = (window.innerHeight - g) / 2 + "px";
    trailer.play();
    setTimeout(() => {
      location.reload();
    }, 1500);
  }
};
