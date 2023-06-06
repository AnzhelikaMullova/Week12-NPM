
let button = document.getElementById('button');


function searchObj(){

    let numInput =document.getElementById('numberInput').value;
    let select=document.getElementById('select').value;    
    const url = `https://swapi.dev/api/${select}/${numInput}`





if( select !=="" ){ 

    fetch('https://swapi.dev/api/')
    .then(response => response.json())
    .then(json => {

     let results = json.results;
     console.log(results);

results.forEach(element => {
console.log(element.name)
});



    })//скобки для закрытия then


}
}

button.addEventListener('click', searchObj);


// let people = document.getElementById('people').value;
// let planets = document.getElementById('planets').value;
// let films = document.getElementById('films').value;