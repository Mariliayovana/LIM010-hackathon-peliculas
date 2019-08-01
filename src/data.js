const lotr = ['0120737','0167261','0167260','0903624','1170358','2310332'];
const hp =['0241527','0295297','0304141','0330373','0373889','0417741','0926084','1201607'];

const getData = (titleId) =>{  
  let data = [];
  console.log(data);
  fetch(`http://www.omdbapi.com/?i=tt${titleId}&apikey=13dc3330`)
  .then(response => response.json())
  .then(output => {
    data.push(output);
    showData(data);
  })
  .catch(err =>console.log(err))  
};
for (let i = 0 ; i< lotr.length ; i++){
  const lotrr = getData(lotr[i]);
}
for (let i = 0 ; i< hp.length ; i++) {
  const hpp = getData(hp[i]);
}
