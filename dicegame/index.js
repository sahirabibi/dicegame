
// get a random number between 1 - 6
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
// change image src for each image based on random number, ig:images/dice1.png - images/dice2.png
document.querySelector('.img1').setAttribute('src', 'images/dice' + (randomNumber1) + '.png');
document.querySelector('.img2').setAttribute('src', 'images/dice' + (randomNumber2) + '.png');

// check which randomNumber (dice image) is greater and declare winner
if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = 'Player 1 Wins!';
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector('h1').innerHTML = 'Player 2 Wins!';
}

else {
  document.querySelector('h1').innerHTML = 'Draw!';
}
