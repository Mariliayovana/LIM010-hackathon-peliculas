const showData = (objeto) => {
    return `<div class="card">
                        <img class="card-img-top img-fluid" src=${objeto.Poster} alt="${objeto.Title}">
                        <p class="card-title-center">${objeto.Title}</p>
                      </div>`
}


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
