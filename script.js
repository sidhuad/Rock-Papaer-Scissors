// jan/7/2025:: displaying tries at startup is working now, it also now updates with every user click, this worked when tries box was moved after tries-- in if statement under for loop in playGame() function


// creating an array of all the card elements
const cards = document.getElementsByClassName('card');

// logging elements into variables for easy styling.
const stylePlayerBattleCard = document.getElementById('playerCard');
const styleComputerBattleCard = document.getElementById('computerCard');
const alertMessage = document.getElementsByClassName('alert');
const scoreBox = document.getElementsByClassName('scoreCard');
const triesBox = document.getElementsByClassName('tries');

// empty cards at load
styleComputerBattleCard.innerHTML = "";
stylePlayerBattleCard.innerHTML = "";


// variables for score keeping
let winScore = 0;
let tieScore = 0 ;
let losseScore = 0;

// number of tries a player get
let tries = 10;

// displaying tries left at the startup
triesBox[0].children[0].innerHTML = `Tries Left: ${tries}`;



// function for keeping scores
const score = () =>
{
    scoreBox[0].children[0].innerHTML = `Wins: ${winScore}<br> Losses: ${losseScore}<br> Ties: ${tieScore} `;
    scoreBox[0].children[0].style.visibility = "visible";
}
  


// computer choice function that returns a random choice.
const computerChoice = () => 
{
    const choiceArray = ["rock","paper","scissor"];
    const random = Math.floor(Math.random() * choiceArray.length);              

    return choiceArray[random];               
}



// Play game function
const playGame = () =>
{

    // for loop to set a click event on all the cards
    for (let i = 0; i < cards.length;i++) {

        cards[i].addEventListener("click", () => {

            // logging player and computer choice into a variable.
            const playerChoice = cards[i].id;            
            const compChoice = computerChoice();
 
            // console.log(`player choice: ${cards[i].id}`);
            // console.log(`computer choice: ${compChoice}`);

            // adding background image style to the player card and computer card.
            stylePlayerBattleCard.style.backgroundImage = `url("./assets/images/${playerChoice}.jpg")`;
            styleComputerBattleCard.style.backgroundImage = `url("./assets/images/${compChoice}.jpg")`;

                
            if (tries != 0) {
                
                if (compChoice == playerChoice)
                    {
                        ++tieScore;
                        
                        alertMessage[0].children[0].setAttribute('style',"visibility:visible; color:Black");
                        alertMessage[0].children[0].innerHTML = "Its A Tie (⊙_⊙;)";
                        
                    }
                    else if ((compChoice == "rock" && playerChoice == "scissor") ||
                            (compChoice == "scissor" && playerChoice == "paper") ||
                            (compChoice == "paper" && playerChoice == "rock"))
                    {
                        ++losseScore;
                        
                        alertMessage[0].children[0].setAttribute('style',"visibility:visible; color:red; opacity:0.8")
                        alertMessage[0].children[0].innerHTML = "YOU LOOSE ¯\_(ツ)_/¯";                      
                    }
                    else
                    {
                        ++winScore;
                        
                        alertMessage[0].children[0].setAttribute('style',"visibility:visible; color:green");
                        alertMessage[0].children[0].innerHTML = "YOU WON (⌐■_■)";
                    }
                tries--;
                console.log(tries);
                triesBox[0].children[0].innerHTML = `Tries Left: ${tries}`;
            }
            
            // else if condition does not work
            if( tries == 0)
            {
                stylePlayerBattleCard.setAttribute('style',"visibility:hidden;");
                styleComputerBattleCard.setAttribute('style',"visibility:hidden;");
                alertMessage[0].children[0].setAttribute('style',"visibility:visible; color:Black");
                alertMessage[0].children[0].innerHTML = "GAME OVER";
                score();
            }
        })  
    }
}

playGame();