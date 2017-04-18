var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
console.log(computerChoice);
if (computerChoice < 0.25) {
	computerChoice = "rock";
} else if(computerChoice <= 0.50) {
	computerChoice = "paper";
} else if(computerChoice <= 0.75) {
	computerChoice = "scissors";
} 
else{
    computerChoice = "rope";
}

console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2){
    if (userChoice !== "rock" || "paper" || "scissors" || "rope"){
        console.log("Incorrect choice");
        console.log("Please try again!!!");
        Program.restart();
    }
    else if (choice1 === choice2){
        console.log("The result is a tie!");
        Program.restart();
    }
    else if (choice1 === "rock"){
        if (choice2 === "scissors"){
            return "rock wins";
        }
        else if (choice2 === "paper"){
            return "paper wins";
        }
        else{
            return "rope wins";
        }
    }
    else if (choice1 === "paper"){
        if (choice2 === "rock"){
            return "paper wins";
        }
        else if (choice2 === "scissors"){
            return "scissors wins";
        }
        else{
            return "rope wins";
        }
    }
    else if (choice1 === "scissors"){
        if (choice2 === "rock"){
            return "rock wins";
        }
        else if (choice2 === "paper"){
            return "scissors wins";
        }
        else{
            return "scissors wins";
        }
    }
    else{
         if (choice2 === "rock"){
            return "rope wins";
        }
        else if (choice2 === "paper"){
            return "rope wins";
        }
        else{
            return "scissors wins";
        }
    }
};

compare(userChoice, computerChoice);
