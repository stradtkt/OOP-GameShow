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


 function resetDisplay() {
     overlay.classList.value = 'start animated slideOutUp';
 }

 function markButton(target, key) {
     target.setAttribute('disabled', 'true');
     target.classList.value += ' chosen';
     game.handleInteraction(key);
 }

 keys.forEach((key) => {
    key.addEventListener('click', (event) => {
      if (game.started) {
        eventHandler(event.type, event.target);
      };
    }, false);
  });
  document.addEventListener('keypress', (event) => {
    if (game.started) {
      eventHandler(event.type, event);
    };
  }, false);
  
  // Event handler function for the click and keypress event
  function eventHandler(eventType, targetOrObject) {
    switch (eventType) {
      case 'click': {
        if (targetOrObject.classList.contains('key')) {
          const letter = targetOrObject.textContent;
          markButton(targetOrObject, letter);
        }
        break;
      }
      case 'keypress': {
        const keycode = targetOrObject.key;
        const keyboardKey = [...keys];
        const keyToDisable = keyboardKey.filter((key) => key.textContent === keycode);
        markButton(...keyToDisable, keycode);
        break;
      }
    }
  };
  
  // Function to reset the game
  function resetGame() {
    const squares = document.querySelectorAll('#phrase ul li');
    const hearts = document.querySelectorAll('#scoreboard ol li');
  
    squares.forEach((box) => phrase.removeChild(box));
    hearts.forEach((heart) => heart.className= 'tries');
  
    startBtn.textContent = '';
  
    keys.forEach((key) => {
      key.removeAttribute('disabled');
      key.classList.remove('chosen');
    });
  
    game = undefined;
  }
