const showData = (objeto) => {
    return `<div class="card">
                        <img class="card-img-top img-fluid" src=${objeto.Poster} alt="${objeto.Title}">
                        <p class="card-title-center">${objeto.Title}</p>
                      </div>`
}

// showData = (objeto) => {
//   return  `
//     <img class="rounded mx-auto d-block" src=${objeto.Poster} alt="${objeto.Title}">
//     <div class ="text-center">
//     <p class="">${objeto.Title}</p>
//     <p class="">Sinopsis: ${objeto.Plot}</p>
//     <p class="">Actores: ${objeto.Actors}</p>
//     <p class="">Tiempo de duración: ${objeto.Runtime}</p>
//     <p class="">Director: ${objeto.Director}</p>
//     <p class="">Escritor: ${objeto.Writer}</p>
//     <p class="">País: ${objeto.Country}</p>
//     <p class="">Año: ${objeto.Year}</p>
//     <p class=""> Género: ${objeto.Genre}</p>
//     </div>`
// }

//buscador
const form = document.querySelector('#form');
const button = document.querySelector('#button');
const result = document.querySelector('#probando');
const filter = (data) => {
    result.innerHTML = '';
    console.log(form.value);
    const text = form.value.toLowerCase();
    for (let pelicula of data) {
        let title = pelicula.Title.toLowerCase();
        if (title.indexOf(text) !== -1) {
            result.innerHTML += `
         <li>${pelicula.Title} - Image:${pelicula.Post}</li>
        `
        }
    }
    if (result.innerHTML === '') {
        result.innerHTML += `
<li>pelicula no encontrada...</li>`
    }
}
button.addEventListener('click', filter)
form.addEventListener('keyup', filter)
filter();


document.getElementById('potterImage').addEventListener('click', () => {
    for (let i = 0; i < hp.length; i++) {
        getData(hp[i]);
    }
    document.getElementById('carousel').classList.toggle('ocultar');
    document.getElementById('potterImage').classList.toggle('ocultar');
    document.getElementById('anilloImage').classList.toggle('ocultar');
});

document.getElementById('anilloImage').addEventListener('click', () => {
    for (let i = 0; i < lotr.length; i++) {
        getData(lotr[i]);
    }
    document.getElementById('carousel').classList.toggle('ocultar');
    document.getElementById('potterImage').classList.toggle('ocultar');
    document.getElementById('anilloImage').classList.toggle('ocultar');

});

document.getElementById('pelis').addEventListener('click', () => {
    document.getElementById('potterImage').classList.toggle('ocultar');
    document.getElementById('anilloImage').classList.toggle('ocultar');
    document.getElementById('probando').classList.toggle('mostrar');


})
