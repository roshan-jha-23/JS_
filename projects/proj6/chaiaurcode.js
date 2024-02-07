//generate a random color;
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
const startButton = document.querySelector("#start");
const endButton = document.querySelector("#stop");
let intervalId;
const startChangingColor = () => {
  const bgcolor = () => {
    document.body.style.backgroundColor = randomColor();
  };
  if (!intervalId) {
    intervalId = setInterval(bgcolor, 1000);
  }
};
const endChangingColor = () => {
  clearInterval(intervalId);
  intervalId = null;
};

startButton.addEventListener("click", startChangingColor);
endButton.addEventListener("click", endChangingColor);
