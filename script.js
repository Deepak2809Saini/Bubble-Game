// function for random bubbles

function makeBubble(){
    let clutter = '';
    for(var i = 0; i <= 111;  i++){
                var random = Math.floor(Math.random()*10);
                clutter += `<div class="bubble">${random}</div>`;
            };

        document.querySelector("#pbtm").innerHTML = clutter ;
}


//Function for timer 

let timer = 60;

function runTimer(){
    let timerint = setInterval(function (){
        if(timer > 0){
            timer--;
            document.querySelector("#timeval").innerHTML = timer; 
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1><br/><h2>Your Score is: ${score}</h2>`;
        }
        
        
    },1000)
}



//function for hit.

let hitrn = 0; 

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn ; 
}



// function for score box 

let score = 0 ; 
function increaseScore (){
    score += 5;
    document.querySelector("#scoreval").innerHTML = score; 

}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});


makeBubble();
runTimer();
getNewHit();