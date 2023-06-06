
let button = document.getElementById('button');
let numInput =document.getElementById('numberInput').value;
let select=document.getElementById('select').value;



const url = 'https://swapi.dev/api/${select}/${numInput}'

function searchObj(){

if( select !=="" ){ // если выбрана секция люди, то делаем feech запрос

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