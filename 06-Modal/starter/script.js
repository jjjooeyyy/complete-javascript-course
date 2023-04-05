'use strict';

const closeModal = document.querySelector('.close-modal');
const showBtn = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// Show popup window when click button 
for(let i=0;i<showBtn.length;i++){
    showBtn[i].addEventListener('click', function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })
}

// Close the window when the close button is clicked 
closeModal.addEventListener('click',function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

// Close window when click overlay
overlay.addEventListener('click', function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

// Click esc to close window
document.addEventListener('keydown', function(e){

    if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    }
})
