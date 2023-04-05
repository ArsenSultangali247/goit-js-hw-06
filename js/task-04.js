let counterValue  = 0;


const counter = document.getElementById('value')


function decrementFoo (){
    
    counter.textContent = counterValue -=1 ;  
}


function incrementFoo (){
    
    counter.textContent = counterValue +=1 ;  
}

const decFoo = document.querySelector('button[data-action="decrement"]');
decFoo.addEventListener('click', decrementFoo)

const incFoo = document.querySelector('button[data-action="increment"]');
incFoo.addEventListener('click', incrementFoo)