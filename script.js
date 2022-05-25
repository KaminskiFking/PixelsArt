
// COLORS PALETS



let colors = document.querySelectorAll('.color');




let box = document.querySelector('#color-palette')



    function colorsbox(){

        colors[0].style.backgroundColor = 'black';
        colors[1].style.backgroundColor = 'green';
        colors[2].style.backgroundColor = 'grey';
        colors[3].style.backgroundColor = 'rgb(0,100,0)';

        

    }

    colorsbox();


// COLORS PALETS


// CREATE 25 PIXELS


let acessPixelBoard = document.getElementById('pixel-board');


function pixelsCreate(){

for(let i = 0; i < 25; i++){

    let childPixelBoard = document.createElement('div');
    childPixelBoard.className = "pixel"
    acessPixelBoard.appendChild(childPixelBoard);
}

}

pixelsCreate()



let firstColor = colors[0]
firstColor.className = 'color selected'
let secondColor = colors[1]
let threeColor = colors[2]
let fourColor = colors [3]


    
function secondColorEvent (){

        if(secondColor.className !== 'color selected' ){
            firstColor.className = 'color'
            secondColor.className = 'color selected'
        }
}

secondColor.addEventListener('click', secondColorEvent);

function threeColorEvent (){

    if(threeColor.className !== 'color selected'){
        firstColor.className = 'color'
        secondColor.className = 'color'
        threeColor.className = 'color selected'
    }
}

threeColor.addEventListener('click', threeColorEvent);

function fourColorEvent (){
    if(fourColor.className !== 'color selected'){
        firstColor.className = 'color'
        secondColor.className = 'color'
        threeColor.className = 'color'
        fourColor.className = 'color selected'
    }
}

fourColor.addEventListener('click', fourColorEvent);


function firstColorEvent(){
    if(firstColor.className !== 'color selected'){
        secondColor.className = 'color'
        threeColor.className = 'color'
        fourColor.className = 'color'
        firstColor.className = 'color selected'
    }
}

firstColor.addEventListener('click', firstColorEvent)

console.log(colors)








