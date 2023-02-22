document.addEventListener('DOMContentLoaded', function() {


    let button = document.querySelector('.ok');

    button.addEventListener('click', function(){
        let name = document.querySelector('#name');
        alert("Thank you for your message " + name.value);
    })

})
