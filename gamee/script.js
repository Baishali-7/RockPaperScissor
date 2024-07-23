let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const generate = () =>{
    let options = ["rock","paper","scissor"]
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
}


const msg = document.querySelector("#msg");

const user = document.querySelector("#user");

const computer = document.querySelector('#computer');

const you = document.querySelector('.you');

const comp = document.querySelector('.comp')

const pop = document.querySelector('.pop-container');

const win = document.querySelector('#win')

const refreshBtn = document.getElementById("btnRefresh");

const uscore = document.querySelector('.uscore');

const cscore = document.querySelector('.cscore');

// const move = () =>{
//     setTimeout(userChoice,3000);
//     you.innerHTML='<img src="images/rock.png">'
//     console.log("image was changed")

// }
//const rock = comp.innerHTML='<img src="images/rock.png">'
 
// const paper = comp.innerHTML = '<img src="images/paper.png">'

// const scissor = comp.innerHTML = '<img src="images/scissors.jpeg">'



function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);


const drawGame = () =>{
    msg.innerText = "Drawwwww"
    
}

const ucount = (uwin) =>{
    if (uwin){
        userScore++;
        user.innerText= userScore ;
        if (userScore == 3){
            console.log("hiiii")
            pop.classList.remove("p");
            // uscore.innerHTML = "You won!!!"
    //         uscore.innerText = `Your Score: ${userScore}`;
    // cscore.innerText = `Computer Score: ${compScore}`;
        }
    }
    else{
        compScore++;
        computer.innerText = compScore ;
        if (compScore == 3){
            console.log("bye")
            pop.classList.remove("p");
            
            // uscore.innerText = `Your Score: ${userScore}`;
            // cscore.innerText = `Computer Score: ${compScore}`;
        }
        
        
        
    }
    
    uscore.innerText = `Your Score: ${userScore}`;
    cscore.innerText = `Computer Score: ${compScore}`;
};



const showWinner = (uwin,userChoice,compChoice) =>{
    if (uwin){
       
        msg.innerText = `You win! Computer chose ${compChoice}`;
        console.log("you win")
    }else{
       
        msg.innerText = `You loseee! Computer chose ${compChoice}`
        console.log("you lose")
    }

};
const playGame = (userChoice) =>{
    console.log("userChoice=",userChoice);
    const compChoice = generate();
    console.log("compChoice=",compChoice);

    if (userChoice===compChoice){
        if(userChoice==="rock"){
            
            you.innerHTML = '<img src="images/rock.png">';
           
            comp.innerHTML='<img src="images/rock1png.png">';
        }else if(userChoice==="paper"){
            you.innerHTML = '<img src="images/paper.png">';
            comp.innerHTML = '<img src="images/paper1.png">'
        }else{
            you.innerHTML = '<img src="images/scissors2.png">';
            comp.innerHTML = '<img src="images/scissors1.png">'
        }
        drawGame();
       
        

       
    }
    else{
        let uwin;
        if (userChoice === "rock"){
            uwin=compChoice === "paper" ? false: true;
            you.innerHTML = '<img src="images/rock.png">';

            
        }else if(userChoice ==="paper"){
        uwin= compChoice ===" scissors" ? false :true;
        you.innerHTML = '<img src="images/paper.png">';
        } 
        else{
            you.innerHTML = '<img src="images/scissors2.png">';
            uwin = compChoice ==="rock"?false:true;
        }
        showWinner(uwin,userChoice,compChoice);
        disC(compChoice);
        ucount(uwin);

    }


};

const disC =(compChoice) =>{
    console.log("compChoice=",compChoice);
    if (compChoice ==="rock"){
        comp.innerHTML='<img src="images/rock1png.png">'
        console.log('rock was chosen');
    }

    else if(compChoice === "paper"){
        comp.innerHTML = '<img src="images/paper1.png">'
    }

    else{
        comp.innerHTML = '<img src="images/scissors1.png">'
    }
}

console.log(choices);
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice= choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
       you.innerHTML='<img src="images/rock.png">'
       comp.innerHTML='<img src="images/rock1png.png">'
        you.classList.add("animation");
        comp.classList.add("animation");
        setTimeout(() =>{
            you.classList.remove('animation');
            comp.classList.remove('animation');
            playGame(userChoice);
        },2000);


    }
);
});

