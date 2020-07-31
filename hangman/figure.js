
var figureParts = document.getElementsByClassName('figure-part');
console.log(typeof(figureParts));

var guessWords = new Set();
var wrongWords = new Set();




function compare() {
    document.addEventListener('keypress' , function(event) {

    var alreadyGuessed = document.getElementById('already-guessed');
    document.body.appendChild(alreadyGuessed);

        
        if( Array.from(guessWords).includes(event.key)) {
            
            console.log(alreadyGuessed);
            alreadyGuessed.style.display = 'block';
            alreadyGuessed.innerHTML = event.key +" has already been guessed";
            
        } else {
            alreadyGuessed.style.display = 'none';
            guessWords.add(event.key);
             
            if (randomWord.includes(event.key)) {
                    for (var j=0; j < randomWord.length; j++) {
                    
                        if (event.key == randomWord[j]) {
                            displayRightGuess(event.key , j);
                        
                        
                        }
                    } 
            }else {
                wrongWords.add(event.key);
                displayWrongGuess(wrongWords);
                
            } 
    
        }
    
    });
}
compare();
//rightguesscall


function displayRightGuess(value, index) {
    
    const letterContainer = document.getElementById('letter-container').children[index];
    letterContainer.innerHTML = value;
    
}
window.onload = function() {
   Array.from(figureParts).forEach((value) => {
        value.style.visibility = 'hidden';
   });
   
};
//wrongguesscall

function displayWrongGuess(wrongWords) {

    var wrongLetterContainerr = document.getElementById('wrong-letter-container');
    wrongLetterContainerr.innerHTML = "Wrong Guess" +' :'+ Array.from(wrongWords).join(',');
    document.body.appendChild(wrongLetterContainerr);
    
     displayFigureParts();
    gameover();

   
}

// To display the figure parts
// figurepart vanya array ho
var k = 0;
function displayFigureParts() {
    console.log(figureParts[k]);
    figureParts[k].style.visibility = 'visible';
    k++;
}
//win
function gameWin(){
    var gameWin = document.getElementById('you-win');
    var btn = document.getElementById('game-win-btn');
    if(Array.from(displayRightGuess).length=== Count){
        gameWin.innerHTML='you-win';
        btn.innerHTML='play again';
        document.body.appendChild(gameWin);
        gameWin.style.display='block';
        btn.addEventListener('click',function(){
            window.location.reload();
        });
    }
}
//over

function gameover() {
    var gameOver = document.getElementById('game-over');
    var playAgainBtn = document.getElementById('game-over-btn');

    if(Array.from(wrongWords).length === figureParts.length) {

        gameOver.innerHTML = 'Game Over!!!';
        playAgainBtn.innerHTML = 'Play Again';

        document.body.appendChild(gameOver);
        gameOver.appendChild(playAgainBtn);
        gameOver.style.display = 'block';

        // Reload the browser window on button click
        playAgainBtn.addEventListener('click' , function(){
            window.location.reload();
            // gameOver.style.display = 'none';
        });

    } else {
        gameOver.style.display = 'none';
    }
}

     
 
  