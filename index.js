// Получаем кнопку по ее ID
let button = document.getElementById('button');

// Функция которая будет вызываться при нажатии на кнопку
function searchObj(){
//Получаем DOM элементы ввода номера и выбора результатов
let container =document.getElementById('container');
let numInput =document.getElementById('numberInput').value;
let select=document.getElementById('select').value;    
//Создаем url на основе выбора и номера
const url = `https://swapi.dev/api/${select}/${numInput}`;


//Проверяем условие что  категория и номер введены
if(select !=="" && numInput !=="") {
//Делаем http запрос к API
  fetch(url)
  .then((response )=> {
    //Проверяем если ответ не успешный, то выбрасываем ошибку
  if(!response.ok){
    throw new Error(`ошибка: ${response.statusText}`);
  }
  //Преобразовываем ответ в JSON
  return response.json();
  })
  .then((json)=>{
    //Если выбрали фильмы то используем свойство title, в противном случае name
    const displayText =select === "films" ? json.title : json.name;
    //ВСтавляем текст в контейнер на странице
    container.innerHTML =`<p>${displayText}</p>`;
  })
  .catch((error)=>{
    container.innerHTML =`<p>${error}(</p>`;
  })
}
}
//Добавляем обработчик события на кнопку
button/addEventListener("click",searchObj);










