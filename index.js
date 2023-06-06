
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
            console.log(json.name);

        
          
          
        })
        .catch(error => { //Если промис был отклонён
//я вот тут пишу???
          reject(error);

        });
      });

 searchObj.then(json => {
        console.log(json);
    }).catch(function (value) { // Если промис был отклонён
  
    //   /* Здесь параметр value будет хранить то значение,
    //   которое было передано методу reject,
  
      console.log(value + ', нам жаль :(');
    });




}
button.addEventListener('click', searchObj);

