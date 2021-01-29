const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const date = new Date();

  const seconds = date.getSeconds();
  const secondDegs = (seconds / 60) * 360;

  const mins = date.getMinutes();
  const minDegs = (mins / 60) * 360;

  const hour = date.getHours();
  const hourDegs = (hour / 12) * 360;

  secondHand.style.transform = `rotate(${secondDegs + 90}deg)`;

  minHand.style.transform = `rotate(${minDegs + 90}deg)`;

  hourHand.style.transform = `rotate(${hourDegs + 90}deg)`;

  console.log(hour, mins, seconds);
}

setInterval(setDate, 1000);
