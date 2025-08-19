let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

function updateDisplay() {
  const timerElement = document.getElementById("timer");
  const min = minutes.toString().padStart(2, "0");
  const sec = seconds.toString().padStart(2, "0");
  timerElement.innerText = `${min}:${sec}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
          alert("Time's up! Take a break 🎉");
          return;
        }
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
      updateDisplay();
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  minutes = 25;
  seconds = 0;
  isRunning = false;
  updateDisplay();
}

// Initialize display
window.onload = updateDisplay;
