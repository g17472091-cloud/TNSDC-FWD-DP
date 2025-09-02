let train = document.querySelector(".train");

let button = document.getElementById("startStopBtn");

let isMoving = false;

let position = 0;

let speed = 2;

let interval;

button.addEventListener("click", () => {

  if (!isMoving) {

    button.textContent = "Stop Train";

    isMoving = true;

    interval = setInterval(() => {

      position += speed;

      train.style.left = position + "px";

      if (position > window.innerWidth) {

        position = -200; // reset train when it goes off screen

      }

    }, 20);

  } else {

    button.textContent = "Start Train";

    isMoving = false;

    clearInterval(interval);

  }

});

// Also allow SPACEBAR to start/stop

document.addEventListener("keydown", (e) => {

  if (e.code === "Space") {

    button.click();

  }

});