document.addEventListener('DOMContentLoaded', function() {

    let index = document.querySelector('select');
    let submit = document.querySelector('#submit');
    let reply = document.querySelector('.reply');

    submit.addEventListener('click', function(){
        let selected = index.selectedIndex;
        let value = index.options[selected];
        if (value.innerHTML == "Coffee Making")
        {
            reply.innerHTML = "Correct! I make myself coffee each day!"
            reply.style.backgroundColor = 'green';
        }
        else
        {
            reply.innerHTML = "Incorrect!"
            reply.style.backgroundColor = 'red';
        }
        })

})
