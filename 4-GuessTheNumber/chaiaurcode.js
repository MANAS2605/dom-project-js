  let randomNumber=parseInt(Math.random()*100+1);
  const submit=document.querySelector('#subt');
  const userInput=document.querySelector('#guessField');
  const guessSlot=document.querySelector('.guesses');
  const remaining=document.querySelector('.lastResult');
  const lowOrHi=document.querySelector('.lowOrHi');
  const startOver=document.querySelector('.resultParas');
  
  const p=document.createElement('p')
  let prevGuess=[]
  let numGuess=1

  let playGame=true;

  if(playGame){
     submit.addEventListener('click',function(e){
       e.preventDefault();
       const guess=parseInt(userInput.value);
       console.log(guess);
       validateGuess(guess);

     })
  }

  function validateGuess(guess){
    //Guess is valid or not
    if(isNaN(guess)||guess==''){
      alert(`Please enter a valid Number`)
    }
    else if(guess<1){
      alert(`Guess must be greater than or equal to 1`)
    }else if(guess>100){
      alert(`Guess must be less than or equal to 100`)
    }else{
      prevGuess.push(guess)
      if(numGuess===10){
        displayGuess(guess)
        if(guess===randomNumber){
          checkGuess(guess)
        }
        else{
          displayMessage(`Game Over.Random Number was ${randomNumber}`)
        }
        endGame() 
      }else{
        displayGuess(guess)
        checkGuess(guess)
      }
    }
  }

  function checkGuess(guess){
    //checking if guess is right or not
    if(guess===randomNumber){
      displayMessage(`You guessed it Right!!`)
      endGame()
    }else if(guess<randomNumber){
      displayMessage(`Number is TOOO Low!!`)
    }else if(guess>randomNumber){
      displayMessage(`Number is TOOO High!!`)
    }
  }

  function displayGuess(guess){//cleanup guess
    //DOM interaction
    userInput.value=''
    guessSlot.innerHTML+=`${guess}   `
    
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
  }

  function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
  }

  function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h1 id="newGame">Start New Game</h2>`//button hawa m h abhi
    startOver.appendChild(p)//ab add hogya
    playGame=false
    newGame()
  }

  function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
      randomNumber=parseInt(Math.random()*100+1);
      prevGuess=[]
      numGuess=1
      guessSlot.innerHTML=''
      displayMessage('')
      remaining.innerHTML=`${11-numGuess}`
      userInput.removeAttribute('disabled')
      startOver.removeChild(p)
      playGame=true
    })
  }


   

  
