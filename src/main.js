
  const showData = (objeto) => {
    return  `<div class="card-container mx-auto mt-5">
    <div class="cards card-front">
      <div class="card-body">
      <img class="card-img-top img-fluid" src=${objeto.Poster} alt="${objeto.Title}">
      <p class="card-title-center text-white">${objeto.Title}</p>
      </div>
    </div>
   
        <div class="cards card-back">
         <div class="card-body bg-dark">
         <p class="text-white">${objeto.Title}</p>
        <p class="text-white">Sinopsis: ${objeto.Plot}</p>
        <p class="text-white">Actores: ${objeto.Actors}</p>
        <p class="text-white">Tiempo de duración: ${objeto.Runtime}</p>
        <p class="text-white">Director: ${objeto.Director}</p>
          </div>
        </div>
        </div>
    `
  }
  


 
let movie = [];
  document.getElementById('potterImage').addEventListener('click',()=>{
    for(let i=0; i< hp.length;i++){
      getData(hp[i]);
    }
    document.getElementById('potterImage').classList.toggle('ocultar');
    document.getElementById('anilloImage').classList.toggle('ocultar');
    });
    
    
    document.getElementById('anilloImage').addEventListener('click',()=>{
      for(let i=0; i< lotr.length;i++){
        getData(lotr[i]);
      }
      document.getElementById('potterImage').classList.toggle('ocultar');
      document.getElementById('anilloImage').classList.toggle('ocultar');
    });

  document.getElementById('home').addEventListener('click', ()=>{
    document.getElementById('probando').classList.add('ocultar');
    document.getElementById('potterImage').classList.toggle('ocultar');
    document.getElementById('anilloImage').classList.toggle('ocultar');
  }
  )