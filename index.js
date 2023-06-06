
let button = document.getElementById('button');
let numInput =document.getElementById('numberInput').value;

let people = document.getElementById('people').value;
let planets = document.getElementById('planets').value;
let films = document.getElementById('films').value;


function searchObj(){


if( people !=="" ){ // если выбрана секция люди, то делаем feech запрос

    fetch('https://swapi.dev/api/people/')
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

