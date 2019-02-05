/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            'once in a blue moon',
            'speak of the devil',
            'cut to the chase',
            'act of god',
            'barking up the wrong tree',
            'word for word'
        ];
        this.phrase = {};
        this.started = false;
    }

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    newPhrase(phrase) {
        return new Phrase(phrase);
    }

    startGame(target) {
        const randomPhrase = this.getRandomPhrase();
        this.phrase = this.newPhrase(randomPhrase);
        this.phrase.addToDisplay(target);
        this.started = true;
    }

    handleInteraction(guess) {
        if(!this.phrase.checkLetter(guess)) {
            this.phrase.showMatchedLetter(guess);
            if(this.checkForWin()) {
                this.gameOver('win');
            }
        } else {
            this.missed = this.missed + 1;
            this.removeLife();
        }
    }

    removeLife() {
        const hearts = document.querySelectorAll('#scoreboard ol li');
        hearts[hearts.length - this.missed].className = 'tries animated bounceOutDown';
        if(this.missed === 5) {
            this.gameOver('lost');
        }
    }

    checkForWin() {
        const letters = this.phrase.squares.filter((square) => square.classList.contains('letter'));
        const selected = letters.filter((letter) => letter.classList.contains('show'));
        return selected.length === letters.length ? true : false;
    }

    gameOver(condition) {
        const overlay = document.getElementById('overlay');
        const button = document.getElementById('btn__reset');
        const message = document.getElementById('game-over-message');
        button.textContent = 'Play Again';
        this.started = false;
    }
}