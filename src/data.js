
const getData = (titleId) => {
    let data = [];
    
    fetch(`http://www.omdbapi.com/?i=tt${titleId}&apikey=13dc3330`)
        .then(response => response.json())
        .then(output => {
            data.push(output);
            showData(data);
         })
      
};

document.getElementById('anilloImage').addEventListener('click', () => {
    showMovies()
})

const hp = ['0241527', '0295297', '0304141', '0330373', '0373889', '0417741', '0926084', '1201607'];

showMovies = () => {
    hp.map(getDates = (datos) => {
        fetch(`http://www.omdbapi.com/?i=tt` + datos + `&apikey=13dc3330`)
            .then(response => response.json())
            .then(output => {
                document.getElementById('probando').innerHTML += showData(output);
            })
    })
}

document.getElementById('potterImage').addEventListener('click', () => {
    showMoviesS()
})
const lotr = ['0120737', '0167261', '0167260', '0903624', '1170358', '2310332'];

showMoviesS = () => {
    lotr.map(getDates = (datos) => {
        fetch(`http://www.omdbapi.com/?i=tt` + datos + `&apikey=13dc3330`)
            .then(response => response.json())
            .then(output => {

                document.getElementById('probando').innerHTML += showData(output);
            })

    })
}