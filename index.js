var score1 = Math.floor(Math.random() * 6) + 1;
var score2 = Math.floor(Math.random() * 6) + 1;
var h1 = document.getElementsByTagName("h1");
var images = document.getElementsByTagName("img");
var winner = document.createElement("img");
winner.setAttribute("src", "./images/winner.png");
var div = document.getElementsByClassName("flex-item");
var h2 = document.getElementsByTagName("h2");

winner.setAttribute("width", "30%");
images[0].setAttribute("src", "./images/Player 1 dice images/dice-" + score1 + ".png");
images[1].setAttribute("src", "./images/Player 2 dice images/dice-" + score2 + ".png");
if (score1 > score2) {
  h1[0].innerHTML = "Player 1 won!!";
  div[0].insertBefore(winner, h2[0]);
}
else if (score1 < score2) {
  h1[0].innerHTML = "Player 2 won!!";
  div[1].insertBefore(winner, h2[1]);
}
else {
  h1[0].innerHTML = "DRAW!  Refresh Again";
}