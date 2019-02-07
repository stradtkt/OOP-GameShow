/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
        this.letters = [...this.phrase];
        this.squares = [];
    }

    addToDisplay(target) {
        this.letters.forEach((el) => {
            const letterLi = document.createElement('li');
            letterLi.textContent = el;
            letterLi.style.zIndex = -1;
            if(el === ' ') {
                letterLi.className = 'hide space';
            } else {
                letterLi.className = `hide letter ${el}`;
            }
            this.squares.push(letterLi);
            target.appendChild(letterLi)
        });

        this.squares.forEach((box) => {
           if(box.classList.contains('letter')) {
               box.classList.remove('hide');
               box.className += ' animated zoomIn';
           }
        });
    }
    
    checkLetter(target) {
        return this.letters.indexOf(target) === -1 ? true : false;
    }

    showMatchedLetter(target) {
        const lettersToShow = this.squares.filter((letter) => letter.classList.contains(target));

        lettersToShow.forEach((letter) => {
            letter.classList.remove('hide');
            letter.classList.add('show');
        });
    }
}