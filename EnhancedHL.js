//Prompts User for Max Number and check validity 
let valid_input = false;
let num, MaxNum;

while(!valid_input) {
    MaxNum = window.prompt("What would you like the maximum number?");

    num = Number(MaxNum);

    if(num != NaN && num > 0) {
        valid_input = true;
        num = Math.floor()
        document.getElementById("message").innerHTML = "Please Guess A Number Between 1 and " + Math.round(MaxNum) + ".";
    }
}

//Logs random numebr
console.log(Math.round(MaxNum))

//Generates random number
N = MaxNum
result = Math.floor(Math.random() * N) + 1;

console.log(result)

// User guesses random number
function RanNum() {
    // get the message paragraph
    let message = document.getElementById("message");

    //sets guess equal to numeric value 
    let guess = Number(document.getElementById("guess").value);

    console.log(guess)

    //Checks result of the random versus game

    if(isNaN(guess) === false ) { //Tracks guesses if you win. doesn't count invalid guesses
     
        if (guess <= 0 || guess > N) { //Checks for number out of range
            message.innerHTML = "That number is not in range, try again.";
        } else {
            if (Selections.find((e) => e == guess)) { //Checks for repeated guess... if isn't repeated pushes to array
                message.innerHTML = "You've already guessed that number, please try again.";
    } else {
        input = document.getElementById("guess").value;
        Selections.push(input);
        console.log(Selections);
      if (guess == result) { //Displays winner message with number of tries and guesses chosen
        message.innerHTML = "You got it! It took you " + Selections.length + " try/tries and your guesses were " + Selections.join(", ") + ".";
    } else if (guess < result) { //Displays message stating if user needs to guess higher or lower
        message.innerHTML = "No, try a higher number.";
    } else {
        message.innerHTML = "No, try a lower number.";
        }
    }
}
} else {
    message.innerHTML = "That is not a number!"; //If user input isn't a number displays message
}


    
    
}

//Pushes guesses to array
let Selections = []









