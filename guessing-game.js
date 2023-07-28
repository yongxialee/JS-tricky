function guessingGame() {

    let randomNum = Math.floor(Math.random()*100);
    console.log(randomNum)
    let numGuess =0;
    let isOver = false;
    return function guess(num){
        if(isOver) return "The game is over, you already won!";

        if(num ===randomNum){
           
            isOver=true
            console.log(`You won! you found ${num} in ${numGuess}`)
    
        }else if(num>randomNum){
            console.log(`${num} is too high!`)
            
        }
        else{
            console.log(`${num} is too low!`)
            
        }
        numGuess++

    }
    
    
    

}

module.exports = { guessingGame };
