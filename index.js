let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let score = 0;

function homeScoreAdd1() {
  score = parseInt(homeScore.innerText);
  score += 1;
  homeScore.textContent = score;
}

function homeScoreAdd2() {
  score = parseInt(homeScore.innerText);
  score += 2;
  homeScore.textContent = score;
}

function homeScoreAdd3() {
  score = parseInt(homeScore.innerText);
  score += 3;
  homeScore.textContent = score;
}

function guestScoreAdd1() {
  score = parseInt(guestScore.innerText);
  score += 1;
  guestScore.textContent = score;
}

function guestScoreAdd2() {
  score = parseInt(guestScore.innerText);
  score += 2;
  guestScore.textContent = score;
}

function guestScoreAdd3() {
  score = parseInt(guestScore.innerText);
  score += 3;
  guestScore.textContent = score;
}
