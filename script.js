
let btns = document.querySelectorAll('.btns button')
let imgBox = document.querySelector('.img-box')
let userchoice = document.querySelector('.your-choice p')
let compChoice = document.querySelector('.comp-choice p')
let result = document.querySelector('.result p')


function compchoice(){
    
    const compList = ['rock','paper','scissor']
    
    let randomNum = Math.floor(Math.random() *3)
    
    compChoice.innerHTML = compList[randomNum]
    return compChoice

}

function imageChangUser(userchoice){
    
   if (userchoice === 'Rock'){
    document.querySelector('.img1').src = 'images/rock.png'
   }

   else if (userchoice === 'Paper'){
    document.querySelector('.img1').src = 'images/paper.png'
   }
   else{
    document.querySelector('.img1').src = 'images/scissor.png'
   }
}

function imageChangcomp(compvalue){
    
    if (compvalue === 'rock'){
     document.querySelector('.img2').src = 'images/rock.png'
    }
 
    else if (compvalue === 'paper'){
     document.querySelector('.img2').src = 'images/paper.png'
    }
    else{
     document.querySelector('.img2').src = 'images/scissor.png'
    }
 }

function showWinner (userWin){
    
    if(userWin){
        result.innerHTML = 'You Win 🤩'
        result.style.color = '#00f900'
    }

    else{
        result.innerHTML = 'You loss 🙁'
        result.style.color = 'red'
    }
}

function results (userchoice){
    
    let computer = compchoice().textContent
    let user = userchoice.toLowerCase()
    
    
    if (user === computer){

        result.innerHTML = 'Match draw !..try again'
        result.style.color = 'rgb(0 255 247)'
    }

    else{
        
        let userWin = true
        if (user === 'rock'){

            userWin = computer === 'paper' ? false : true ;
            
        }
        else if (user === 'paper'){

            userWin = computer === 'scissor' ? false : true ;
           
        }
        else{
            userWin = computer === 'rock' ? false : true;
        }

        showWinner(userWin)
        
    }
    imageChangcomp(computer)
}


btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{

        
        imgBox.classList.add('active')

        userchoice.innerHTML = btn.children[1].innerHTML

        imageChangcomp()
        imageChangUser(userchoice.innerHTML)
        results(userchoice.innerHTML)

        
    })
})