const mostrar = (data) => {
  return `
<div> 
<img src="${data.Poster}">
</div>
<div>
<h4>${data.Title}</h4>
<p>Country : ${data.Country}</p>
<p>Year : ${data.Year}  </p>
<p>Director : ${data.Director}</p>
<p>${data.Plot}</p>
</div>
`
};

const lordOfRings = [
  'tt0120737',
  'tt0167261',
  'tt0167260',
  'tt0903624',
  'tt1170358',
  'tt2310332'
];
function showMoviesLOR() {
  lordOfRings.map(function(title) {
    fetch('https://www.omdbapi.com/?i=' + title + '&apikey=f9e34039')
      .then(movie => movie.json())
      .then(data => {
        document.getElementById('probando').innerHTML += mostrar(data);
      })
    })
  }

const  