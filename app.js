const div = document.getElementById('salida');
const color = document.getElementById('color');

//Events
document.addEventListener('DOMContentLoaded', showColors());

color.addEventListener('input', () => {
    const value = color.value;
    
    div.style.background = value;
    div.innerHTML = `
    ${value}
    `
    addColors(value);
    showColors();
});

//Métodos
function deleteColor(pos){
    const colors =  getColors();
    let filtrado = colors.filter((color, index) => index !== pos);
    
    localStorage.setItem('colors', JSON.stringify(filtrado));
    showColors();
}

function getColors(){
    let colors;
    let data = localStorage.getItem('colors');

    if(!data){
        colors = [];
    }else{
        colors =  JSON.parse(data)
    }
    return colors;
}


function addColors(color){
    const colors = getColors();
    colors.push(color);
    console.log(colors)

    localStorage.setItem('colors', JSON.stringify(colors));
}




function showColors(){
    const colors = getColors();
    const card = document.getElementById('card');
    let div = '';

    colors.forEach((color, index) => {
        div += `
        <div class="col">
        <div class="card h-100">
        <div class="card-body">
        <button  onclick="deleteColor(${index})" class="btn" style = "background-color: ${color}">${color}</button>
        </div>
        </div>  
        </div>
        `;
    });

    card.innerHTML = div;
    
}
