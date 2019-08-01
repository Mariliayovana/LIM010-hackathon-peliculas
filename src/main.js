const showData = (data) => {
  let allData = '';
  data.forEach(objeto => { 
    return allData += `
      <img class="" src=${objeto.Poster} alt="">
      <p class="">${objeto.Title}</p>
      <p class="">Sinopsis: ${objeto.Plot}</p>
      <p class="">Actores: ${objeto.Actors}</p>
      <p class="">Tiempo de duración: ${objeto.Runtime}</p>
      <p class="">Director: ${objeto.Director}</p>
      <p class="">Escritor: ${objeto.Writer}</p>
      <p class="">País: ${objeto.Country}</p>
      <p class="">Año: ${objeto.Year}</p>
      <p class=""> Género: ${objeto.Genre}</p>`
  });
    document.getElementById('probando').innerHTML += allData;
};