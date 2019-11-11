function getRandomNumber (){
    return Math.floor(Math.random() * 11) + 1;
}

function playerDrawCard (){
    drawnCard = getRandomNumber();
    playerHand += drawnCard;
    console.log("Player draws " + drawnCard + " and now have: " + playerHand);    
}

function dealerDrawCard (){
    drawnCard = getRandomNumber();
    dealerHand += drawnCard;
    console.log("\t\t\t\t\t\tDealer draws " + drawnCard + " and now have: " + dealerHand);
}

function calculateResult() {
    if (dealerHand > playerHand) {
        dealerWin();
    } else if (dealerHand < playerHand) {
        playerWin();
    } else if (dealerHand === playerHand){
        console.log("Draw. " + dealerHand + " - " + playerHand + ".");
    }
    reset();
}

function reset() {
    dealerHand = 0;
    playerHand = 0;
}

function dealerWin() {
    alert("Dealer wins!\n\nDealer: " + dealerHand + "\nPlayer: " + playerHand);
    console.log("Press 'D' to start again!")
    reset();
}

function playerWin() {
    alert("Player wins!\n\nPlayer: " + playerHand + "\nDealer: " + dealerHand);
    console.log("Press 'D' to start again!")
    reset();
}

let drawnCard = 0;
var playerHand = 0;
var dealerHand = 0;



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