// First locate the image elements
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

// A variable to track whether the game has started
let gameStarted = false;

// Create function for setting the default images
function setDefaultImg() {
  img1.setAttribute("src", "/images/dice1.png");
  img2.setAttribute("src", "/images/dice1.png");
  document.querySelector("h1").innerHTML = "Let's Find The Winner🏆";
  document.querySelector(".player-1").innerHTML = "Player 1👊🏽";
  document.querySelector(".player-2").innerHTML = "Player 2💪🏽";

  // This allows the Roll button to be clickable on page load
  gameStarted = true;
}

// Create function which finds winner and updates images
function updateImgAndWinner() {
  // Check if the game has started
  if (gameStarted) {
    // Generate random numbers (1-6) within the function to always update when we call the function
    const randomNum1 = Math.floor(Math.random() * 6 + 1);
    const randomNum2 = Math.floor(Math.random() * 6 + 1);

    // Let's update images based on the random number generated for both images
    img1.setAttribute("src", "/images/dice" + randomNum1 + ".png");
    img2.setAttribute("src", "/images/dice" + randomNum2 + ".png");

    if (randomNum1 > randomNum2) {
      document.querySelector("h1").innerHTML = "Player 1 Wins 🚩";
      document.querySelector(".lead").innerHTML =
        "Yay! It's settled, Player 1 takes the trophy 🏆 home!!";

      // Update player 1 name
      document.querySelector(".player-1").innerHTML = "Player 1 Won 👏🎉🥳";
    } else if (randomNum2 > randomNum1) {
      document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
      document.querySelector(".lead").innerHTML =
        "Yay! It's settled, Player 2 takes the trophy 🏆 home!!";

      // Update player 2 name
      document.querySelector(".player-2").innerHTML = "Player 2 Won 👏🎉🥳";
    } else if (randomNum1 == randomNum2) {
      document.querySelector("h1").innerHTML = "It's a draw ⛔️";
      document.querySelector(".lead").innerHTML =
        "Oh it's a tie, please roll the dice 🎲 again 🔁!";
    }

    // Set gameStarted to false after the first roll
    gameStarted = false;
  }
}

setDefaultImg();

// Now let's locate our buttons
const btn1 = document.querySelector(".button-1");
const btn2 = document.querySelector(".button-2");

// Let's set what happens when you click the ROLL button
btn1.addEventListener("click", function () {
  updateImgAndWinner();
});

// Let's set what happens when you click the RESET button
btn2.addEventListener("click", function () {
  setDefaultImg();
  document.querySelector("p").innerHTML =
    "Dice Royale: Roll, Win, Repeat! A friendly two-player dice challenge. Click, roll, and find out who's the reigning champ! Ready to roll the good times?";
  // document.querySelector("h1").innerHTML = "Let's Find the Winner";
});
