
let button = document.getElementById('button');


function searchObj(){

    let numInput =document.getElementById('numberInput').value;
    let select=document.getElementById('select').value;    
    const url = `https://swapi.dev/api/${select}/${numInput}`

    const newPromise = new Promise((resolve, reject) => {

if(select !=="" && numInput !=="") 

        fetch(url)
        .then(response => response.json())

        .then(json => {
          resolve(json);

          // теперь свой код я пишу тут???
          
          
        })
        .catch(error => {
          reject(error);
        });
      });




}
button.addEventListener('click', searchObj);

