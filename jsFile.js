// let gameSeq = [];
// let userSeq = [];

// let started = false;
// let level = 0;
// let btns = ["red", "yellow", "green", "blue"];

// let para = document.querySelector(".p");
// document.addEventListener( "keypress", () => {
        
//     if( started == false ) {
//         console.log("Game has been Started");
//         started = true;       
//         levelUp();         
//     }      
// });
//     function gameFlash(btn) {
//        btn.classList.add("flash");
//         setTimeout(function() {
//             btn.classList.remove("flash");
//         },250);
//     }
//     function userFlash(btn) {
//         btn.classList.add("userflash");
//          setTimeout(function() {
//              btn.classList.remove("userflash");
//          },250);
//      }

// function levelUp() {
//     userSeq = [];
//     level++;      
//     para.innerText = `Level ${level}`;

//     let randIdx = Math.floor(Math.random()*3);
//     let randColor = btns[randIdx];
//     let randBtn = document.querySelector(`.${randColor}`); 
//     gameSeq.push(randColor);
//     console.log(gameSeq);
//     gameFlash(randBtn);   
// }
//     function checkAns (idx) {
//         // console.log("Current level : ",level);
    
//         if( userSeq[idx] === gameSeq[idx] ){
//             if( userSeq.length == gameSeq.length) {
//               setTimeout( () => {
//                 levelUp();
//               },1500);
//             }
//             console.log("Same value");
      
//         } else {
//            para.innerHTML = `Game Over! <br> Your score was <b> ${level} </b> <br> Press any key to start`;
//           document.querySelector("body").style.backgroundColor="red";
//           setTimeout( () => {
//             document.querySelector("body").style.backgroundColor="white";
//           },100);
//           reset();
//         }
//     }

//     function checkBtns() {
//        let btn = this;
//        userFlash(btn);     

//        userColor =btn.getAttribute("id");
//        userSeq.push(userColor);
     
//        checkAns(userSeq.length - 1);
//     }

//     let allBtns = document.querySelectorAll(".btn");

//     for(btn of allBtns) {
//         btn.addEventListener( "click", checkBtns);
//     }

//     function reset() {
//         started = false;
//         gameSeq = [];
//         userSeq = [];
//         level = 0;
//     }
let h2 = document.querySelector("h2");
let started = false;
let level = 0;

let userSeq = [];
let gameSeq = [];
let gameScore = [];
let para = document.querySelector("p");


let idx = ["red", "yellow", "green", "blue"];

document.addEventListener( "keypress", () => {
   
    if( started == false ) {
        console.log("Game has been started");
        started = true;
        levelUp();
    }   
});
function levelUp() {
    userSeq = [];
    level++;   
    h2.innerText = ` Level ${level}`;

    let randNum = Math.floor(Math.random()*3);
    let randColor = idx[randNum];
    let randBtn = document.querySelector(`.${randColor}`);   
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);  
}
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash");
    },500);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout( function() {
        btn.classList.remove("userflash");
    },250);
}
     function checkAns(ansIdx) {      
        if( userSeq[ansIdx] === gameSeq[ansIdx]) {
            if( userSeq.length == gameSeq.length ) {
                setTimeout(levelUp, 1000);
            }            
         } else {
             h2.innerHTML = `Game over! Your score is <b> ${level} </b> <br> Press any key to start the game`;     
                document.querySelector("body").style.backgroundColor = "red";            
             setTimeout( function() {
                document.querySelector("body").style.backgroundColor = "white";            
             },240);
            pushScore();
             reset();
         }
     }
     function btnPress() {
         let btn = this;
        userFlash(btn);

        userColor = btn.getAttribute("id");
        userSeq.push(userColor);
        checkAns(userSeq.length-1);
         }
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener( "click",btnPress);
}
function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;    
}
    function comScore() {      
        let max = 0;
         for( let i=0; i<gameScore.length; i++ ) {
            if( gameScore[i]>max ) {
                max = gameScore[i];
            }
         }
        para.innerHTML = ` Highest score : ${max}`;
    }
function pushScore () {
    gameScore.push(level);
    comScore();
}