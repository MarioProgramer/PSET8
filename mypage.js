document.addEventListener('DOMContentLoaded', function() {

    let colors = document.querySelectorAll('.color-button');
    let background = document.querySelector('.background');


    for (let i = 0; i < colors.length; i++)
    {
        colors[i].addEventListener('click', function(){
            if (colors[i].innerText == "RED")
            {
                background.style.backgroundColor = '#AA4A44';
            }
            else if (colors[i].innerText == "GREEN")
            {
                background.style.backgroundColor = '#50C878';
            }
            else
            {
                background.style.backgroundColor = '#89CFF0';
            }
        })
    }
})
