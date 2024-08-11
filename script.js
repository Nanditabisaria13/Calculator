
function dis(val){
    const display = document.getElementById('inputbox')
    display.value+=val
}

function solve(){
    const display = document.getElementById('inputbox')
    let x=display.value
    let y = eval(x)
    display.value=y
}


function cl(){
    const display = document.getElementById('inputbox');

   display.value = ''
}

function del(){
    const display = document.getElementById('inputbox');
    display.value = display.value.slice(0,-1);

}

function per(){
    const display = document.getElementById('inputbox');
    display.value = display.value/100
}

//change theme 

var dark = document.querySelector('.dark i')
var light = document.querySelector('.light i')
var bg = document.querySelector('.calculator')
var bgbody = document.querySelector('body')
var theme = document.querySelector('.theme')

dark.addEventListener('click',()=>{
     bg.style.background = "#ecf0f3"
     dark.style.display = "none"
     light.style.display= "block"
     theme.style.background = "white"
     theme.style.border=" 2px solid black" 
})

light.addEventListener('click',()=>{
    bg.style.background = "#000"
    dark.style.display = "block"
    light.style.display= "none"
    theme.style.background = "#000"
    theme.style.border="2px solid white"
    bgbody.style.background= "none"
    input.style.color = "black"
   
})