console.log("Welcome to Draw & Hope!\nPress 'D' to Draw a card and start the game.\nPress 'S' to Stay.");

/** 
 * @param number drawnCard - The value of drawn card.
 * @param number playerHand - The sum of the player's cards.
 * @param number dealerHand - The sum of dealer's, that is the computer's, cards.  
 */
let drawnCard = 0;
let playerHand = 0;
let dealerHand = 0;

/** 
 * @desc Generates a random number.
 * @return number - Returns a number from 1 to 11. 
 */
function getRandomNumber (){
    return Math.floor(Math.random() * 11) + 1;
}

/** 
 * @desc Drawn card is logged and added to player's hand, which also is logged.
 */
function playerDrawCard (){
    drawnCard = getRandomNumber();
    playerHand += drawnCard;
    console.log("Player draws " + drawnCard + " and now have: " + playerHand);    
}

/** 
 * @desc Drawn card is logged and added to dealer's hand, which also is logged.
 */
function dealerDrawCard (){
    drawnCard = getRandomNumber();
    dealerHand += drawnCard;
    console.log("\t\t\t\t\t\tDealer draws " + drawnCard + " and now have: " + dealerHand);
}

/** 
 * @desc Evaluate result if neither player nor dealer is busted.
 */
function calculateResult() {
    if (dealerHand > playerHand) {
        dealerWin();
    } else if (dealerHand < playerHand) {
        playerWin();
    } else if (dealerHand === playerHand){
        draw(); 
    }
}

/** 
 * @desc Alerts that dealer has won. Call the reset function.
 */
function dealerWin() {
    alert("Dealer wins!\n\nDealer: " + dealerHand + "\nPlayer: " + playerHand);
    reset();
}

/** 
 * @desc Alerts that player has won. Call the reset function.
 */
function playerWin() {
    alert("Player wins!\n\nPlayer: " + playerHand + "\nDealer: " + dealerHand);
    reset();
}

/** 
 * @desc Alerts that it is a draw. Call the reset function.
 */
function draw() {
    alert("It's a draw!\n\nDealer: " + dealerHand + "\nPlayer: " + playerHand);
    reset();
}

/** 
 * @desc Sets the results to 0.
 */
function reset() {
    dealerHand = 0;
    playerHand = 0;
    console.log("Press 'D' to start again!");
}

/** 
 * @desc If D-key is pressed; deal cards. Checks if it's the first round when dealer should get 2 cards.
 * Evaluate result.
 * If S-key is pressed; give dealer another card if hand < 17. Evaluate result.
 */
window.addEventListener("keydown", function(event){
    if (event.code === 'KeyD') {
        if (playerHand === 0) {
            playerDrawCard();
            dealerDrawCard();
            dealerDrawCard();
            if (dealerHand > 21) {
                playerWin();
            } else if (dealerHand === 21) {
                dealerWin();
            }
        } else {
            playerDrawCard();
            if (playerHand > 21) {
                dealerWin();
            } else if (playerHand === 21) {
                playerWin();
            }
        }
    } else if (event.code === 'KeyS') {
        if (dealerHand < 17 && playerHand !== 0) {
            dealerDrawCard();
            if (dealerHand > 21) {
                playerWin();
            } else if (dealerHand === 21) {
                dealerWin();
            }
        }
        if (dealerHand !== 0 && playerHand !==0){
            calculateResult();
        }
    }
});