/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, lastDice, winScore;


// winScore = 100;
//winScore = document.getElementById('winScoreInput').value;

init();

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('.dice_left').style.display = 'none';
    document.querySelector('.dice_right').style.display = 'none';
    

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
};

document.querySelector('.btn-roll').addEventListener('click', function() {
    
    winScore = document.getElementById('winScoreInput').value;


    if(gamePlaying) {
        // random number
        
        diceLeft = Math.floor(Math.random() * 6) + 1;
        diceRight = Math.floor(Math.random() * 6) + 1;
              

        //display result
        var diceDOMLeft = document.querySelector('.dice_left');
        diceDOMLeft.style.display = 'block';
        diceDOMLeft.src = 'dice-' + diceLeft + '.png';

        var diceDOMRight = document.querySelector('.dice_right');
        diceDOMRight.style.display = 'block';
        diceDOMRight.src = 'dice-' + diceRight + '.png';
        
        if (diceLeft === 6 && lastDiceLeft === 6) {
           scores[activePlayer] = 0;
           document.querySelector('#score-' + activePlayer).textContent = '0';
           nextPlayer();
        
        } else if (diceRight === 6 && lastDiceRight === 6) {
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
         
        } else if (diceLeft !== 1 && diceRight !== 1) {
            roundScore += (diceLeft + diceRight);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        } 

        lastDiceLeft = diceLeft;
        lastDiceRight = diceRight;
    }    
});



document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {

        // Add current score to global score
        scores[activePlayer] += roundScore
    
        // update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won game
        if (scores[activePlayer] >= winScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice_left').style.display = 'none';
            document.querySelector('.dice_right').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});



function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice_left').style.display = 'none';
    document.querySelector('.dice_right').style.display = 'none';

};


document.querySelector('.btn-new').addEventListener('click', init);



/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/