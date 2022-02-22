const msg1 = document.getElementById("message1");
const msg2 = document.getElementById("message2");
const msg3 = document.getElementById("message3");
const answer = Math.floor(Math.random()*100)+ 1;
let number_of_attempts = 0;
let guessed_num = [];
let arr = [1,100];



function play(){
    let user_guesses = document.getElementById("guess").value;
    lowest.innerHTML = arr[0];
    highest.innerHTML= arr[1];
    if (user_guesses < 1 || user_guesses > 100 ){
        alert("Please enter a number between 0 to 100");
    }
    else{
        guessed_num.push(user_guesses);
        number_of_attempts ++;
        if(user_guesses < answer){
            arr[0] = user_guesses;
            msg1.textContent = "--Your Guess Is Too Low--"
            msg2.textContent = "Number of Attempts : " + number_of_attempts;
            msg3.textContent = "Guessed Number Are : " + guessed_num;
            
        }
        else if(user_guesses > answer){
            arr[1] = user_guesses;
            msg1.textContent = "--Your Guess Is Too High--"
            msg2.textContent = "Number of Attempts : " + number_of_attempts;
            msg3.textContent = "Guessed Number Are : " + guessed_num;

        }
        else if(user_guesses == answer){
            msg1.textContent = "--Yess, you won!!!--"
            msg2.textContent = "The number was " + answer;
            msg3.textContent = "You guessed it in " + number_of_attempts +  " guesses";
        }

    }
        

}

    