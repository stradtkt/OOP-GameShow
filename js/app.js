/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 const overlay = document.getElementById('overlay');
 const startBtn = document.querySelector('#overlay #btn__reset');
 const phrase = document.querySelector('#phrase ul');
 const keys = document.querySelectorAll('.key');

 let game;

 startBtn.addEventListener('click', () => {
     resetGame();
     game = new Game();
     game.startGame(phrase);
     resetDisplay();
     return game;
 });