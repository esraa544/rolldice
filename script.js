'use strict';

// dice
let activePlayer = 0;
let dice = Math.trunc((Math.random()*6)+1);
let current = 0;
let playerscore = 0;
const switchPlayer = function() {
   document.getElementById(`current--${activePlayer}`).textContent = current;
   
   document.querySelector('.active').classList.toggle('.hidden');
   document.querySelector('.active').classList.toggle('.hidden');
}
document.querySelector('.roll').addEventListener('click', function() {
   document.querySelector('.image').style.visibility='visible';  
   document.querySelector('.image').src =`img/dice-${dice}.png`;  
   dice = Math.trunc((Math.random()*6)+1);
   document.querySelector('.image').src =`img/dice-${dice}.png`;  
     
   if (dice === 1) {
       switchPlayer ();
       
       }else{
           current = current + dice;
           document.querySelector('.current').textContent = current ;
       }
})


document.querySelector('.hold').addEventListener('click', function() {
   if (dice === 1) {
       
       current = 0;
       document.querySelector('.current').textContent = current ;
       }else{
           playerscore = playerscore + current;
           current = 0;
           document.querySelector('.current').textContent = current ;
           document.querySelector('.score').textContent = playerscore ;
           document.querySelector('.active').classList.toggle('.hidden');
           document.querySelector('.active').classList.toggle('.hidden');            
       };
})

document.querySelector('.newGame').addEventListener('click', function(){
   document.querySelector('.image').style.visibility='hidden';  
   dice = Math.trunc((Math.random()*6)+1);
   current = 0;
   playerscore = 0;
   document.querySelector('.current').textContent = current ;
   document.querySelector('.score').textContent = playerscore ;
   document.querySelector('.image').src =``; 
})
