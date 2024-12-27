let button = document.getElementsByTagName("button")[0];

button.addEventListener("mousedown", () => {
  let first = Math.floor(Math.random() * 6) + 1;
  let second = Math.floor(Math.random() * 6) + 1;
  let [image1, image2] = document.getElementsByClassName("dice-image");
  let h1 = button.getElementsByTagName("h1")[0];
  let firstDiv = document.getElementsByClassName("first-player")[0];
  let secondDiv = document.getElementsByClassName("second-player")[0];

  image1.setAttribute("src", "./images/Player 1 dice images/dice-" + first + ".png");
  image2.setAttribute("src", "./images/Player 2 dice images/dice-" + second + ".png");

  if (first > second) {
    h1.textContent = "Player 1 won!!";
    firstDiv.getElementsByTagName("p")[0].classList.add("black");
    secondDiv.getElementsByTagName("p")[0].classList.remove("red");
  }
  else if (first < second) {
    h1.textContent = "Player 2 won!!";
    firstDiv.getElementsByTagName("p")[0].classList.remove("black");
    secondDiv.getElementsByTagName("p")[0].classList.add("red");
  }
  else {
    h1.textContent = "Draw!!";
    firstDiv.getElementsByTagName("p")[0].classList.remove("black");
    secondDiv.getElementsByTagName("p")[0].classList.remove("red");
  }
})