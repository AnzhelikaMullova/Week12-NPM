
let button = document.getElementById('button');


function searchObj(){

    let numInput =document.getElementById('numberInput').value;
    let select=document.getElementById('select').value;    
    const url = `https://swapi.dev/api/${select}/${numInput}`





if( select !=="" && numInput!==""){ 


    const newPromise = new Promise((resolve, reject) => {

    fetch(url)
    .then(response => response.json())
    .then(json => {

    let results = json.results;
    console.log(results);

results.forEach(element => {
console.log(element.name)
});

})//скобки для закрытия then

.catch(error => {
    reject(error);

});

    })
}
}

button.addEventListener('click', searchObj);

