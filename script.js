// elements
const appImage = document.querySelector(".app-image img"),
  appButtons = document.querySelectorAll(".answers-buttons_button"),
  answerOneBtn = appButtons[0],
  answerTwoBtn = appButtons[1],
  answerThreeBtn = appButtons[2];
// data
const app = {
  images: [
    "coliseum.jpg",
    "golden_gate.jpg",
    "Statue_of_Liberty.jpg",
    "Central_Park.jpg",
    "eiffel_tower.jpg",
  ],
  answerOne: [
    "Coliseum",
    "Brooklyn Bridge",
    "Chrysler Building",
    "Central Park",
    "Triumphal Arch",
  ],
  answerTwo: [
    "Petronas Towers",
    "Ambassador Bridge",
    "Statue of Liberty",
    "Times Square",
    "Eiffel Tower",
  ],
  answerThree: [
    "Louvre",
    "Golden Gate Bridge",
    "Flatiron Building",
    "Fifth Avenue",
    "Musee d'Orsay",
  ],
  //
  //
  buttonClass: [
    "yellowGreen",
    "brightTurquoise",
    "lightWhite",
    "purple",
    "yellowGreen",
  ],
  answers: ["yes", "no"],
};

let idx = 0;

let text = function () {
  answerOneBtn.textContent = app.answerOne[idx];
  answerTwoBtn.textContent = app.answerTwo[idx];
  answerThreeBtn.textContent = app.answerThree[idx];
};

let classes = function () {
  appButtons.forEach((btn) => {
    addClass(btn, app.buttonClass[idx]);
  });
};

let images = function () {
  appImage.src = `images/${app.images[idx]}`;
};

appButtons.forEach((btn) => {
  images();
  text();
  classes();
  btn.addEventListener("click", function () {
    setTimeout(() => {
      removeClass(btn, app.answers[0]);
      removeClass(btn, app.answers[1]);
    }, 1000);
    let num = btn.dataset.num;
    if (idx == 0 && num === "1") {
      correct(btn);
    } else if (idx == 1 && num === "3") {
      correct(btn);
    } else if (idx == 2 && num === "2") {
      correct(btn);
    } else if (idx == 3 && num === "1") {
      correct(btn);
    } else if (idx == 4 && num === "2") {
      appButtons.forEach((btn) => {
        removeClass(btn, app.buttonClass[idx]);
      });    
      addClass(btn, app.answers[0]);
      setTimeout(() => {
        idx = 0;
        images();
        text();
        classes();
      }, 1500);
    } else {
      error(btn);
    }
    console.log(idx);
  });
});

// Вспомогательные

function correct(el) {
  appButtons.forEach((btn) => {
    removeClass(btn, app.buttonClass[idx]);
  });
  addClass(el, app.answers[0]);

  setTimeout(() => {
    idx++;
    images();
    text();
    classes();
  }, 1500);
}

function error(el) {
  addClass(el, app.answers[1]);
}

function addClass(v, cls) {
  v.classList.add(`${cls}`);
}

function removeClass(v, cls) {
  v.classList.remove(`${cls}`);
}
