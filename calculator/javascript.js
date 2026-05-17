let name = prompt('What is your name?')
document.getElementById('user').textContent = "Welcome " + name +" to our calculator"
const screen = document.getElementById('screen')
const buttons = document.querySelectorAll('.num-btn')

buttons.forEach(button => {
    button.addEventListener( 'click' , () =>
    {
        screen.value += button.innerHTML
    }
    )
    
});
add = document.getElementById('plus')
add.addEventListener(
    'click', () => 
        screen.value += '+'
)

negetive = document.getElementById('munis')
negetive.addEventListener(
    'click', () => 
        screen.value += '-'
)

mult = document.getElementById('multyply')
mult.addEventListener(
    'click', () => 
        screen.value += '*'
)
divi = document.getElementById('division')
divi.addEventListener(
    'click', () => 
        screen.value += '/'
)

cal = document.getElementById('cal')
cal.addEventListener(
    'click', () => 
       {
            const result =  eval(screen.value );
            screen.value =  result 
       } 

)
clear = document.getElementById('clear')
clear.addEventListener(
    'click' , () =>
    {
        screen.value =""
    }
)


