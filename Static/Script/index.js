let x = document.getElementById("my-video");
let b = document.getElementById("skip");
const adURL = new URL("/Assets/ads.mp4", "http://127.0.0.1:5500");
const mainURL = new URL("/Assets/main.mp4", "http://127.0.0.1:5500");
let xd = 4;
x.src = adURL;
x.addEventListener("play", () => {
  if (x.src === adURL.href) {
    console.log("played");
    b.style.visibility = "visible";

    x.removeAttribute("controls");

    let interval = setInterval(() => {
      b.innerHTML = "Skip in " + xd + " sec";
      xd--;
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      b.innerHTML = "Skip AD";
      b.removeAttribute("disabled");
    }, 5000);
  } else {
    b.style.visibility = "hidden";
    x.setAttribute("controls", "controls");
  }
});

x.addEventListener("ended", () => {
  b.disabled = "disabled";
  xd = 4;
  if (x.src === adURL.href) {
    x.src = mainURL;
    x.play();
    console.log("if");
  } else {
    x.src = adURL;
  }
});

b.addEventListener("click", (e) => {
  x.src = mainURL;
  x.play();
});
