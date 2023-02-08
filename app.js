const textLabel = document.querySelector(".text-label");
const inputText = document.querySelector(".input-text");
const time = document.querySelector(".time");
const score = document.querySelector(".score");
const btnTry = document.getElementById("btn_try");
const modal = document.querySelector(".hidden");
const overlay = document.querySelector(".overlay");
const newGame = document.querySelector(".newGame");
const play = document.querySelector(".play");
const select = document.querySelector(".select");
const reslut = document.querySelector(".result");
let timer = 10;
let userScore = 0;
inputText.focus();

// functions
function text() {
  const random = Math.trunc(Math.random() * words.length);
  textLabel.textContent = words[random];
}

function interval() {
  setInterval(() => {
    timer--;
    if (timer >= 0) {
      time.textContent = timer < 10 ? "0" + `${timer}` : timer;

      if (timer <= 2) {
        time.style.color = "red";
      } else if (timer <= 5) {
        time.style.color = "gold";
      }
    }
    if (timer == 0) {
      modal.style.display = "grid";
      overlay.style.display = "block";
      reslut.textContent = "Score:" + score.textContent;
    }
  }, 1000);
}

text();

// eventssss
inputText.addEventListener("input", (e) => {
  if (textLabel.textContent == e.target.value) {
    text();
    inputText.value = "";
    userScore++;
    score.textContent = userScore;
    if (select.value == "Hard") {
      timer += 2;
      time.style.color = "white";
    } else if (select.value == "Easy") {
      timer += 6;
      time.style.color = "white";
    } else if (select.value == "Medium") {
      timer += 4;
      time.style.color = "white";
    }
  }
});

btnTry.addEventListener("click", () => {
  modal.style.display = "none";
  overlay.style.display = "none";
  newGame.style.display = "block";
  overlay.style.display = "block";
});

select.addEventListener("change", (e) => {});

play.addEventListener("click", () => {
  userScore = 0;
  time.style.color = "white";
  newGame.style.display = "block";
  score.textContent = userScore;
  newGame.style.display = "none";
  overlay.style.display = "none";
  text();
  inputText.value = "";
  timer = 10;
});
interval();
