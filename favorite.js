document.addEventListener('DOMContentLoaded', function() {

let movies = document.querySelectorAll('.movies');

for (let i = 0; i < movies.length; i++)
{
    movies[i].addEventListener('click', function() {
        if (movies[i].value == "correct")
        {
            movies[i].style.backgroundColor = '#50C878';
        }
        else
        {
            movies[i].style.backgroundColor = '#AA4A44';
        }
    })
}

})
