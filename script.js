'use strict';

dice
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

