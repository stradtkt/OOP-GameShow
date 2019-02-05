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
            const li = document.createElement('li');
            li.textContent = el;
            li.style.zIndex = -1;
            if(el === ' ') {
                li.className = 'hide space';
            } else {
                li.className = `hide letter ${el}`;
            }
            this.squares.push(li);
            target.appendChild(li)
        });

        this.squares.forEach((box) => {
           if(box.classList.contains('letter')) {
               box.classList.remove('hide');
               box.className += 'animated zoomIn';
           }
        });
    }
    
    checkLetter(target) {
        return this.letters.indexOf(target) === -1 ? true : false;
    }

    
}