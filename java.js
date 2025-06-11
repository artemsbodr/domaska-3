const slider = document.querySelector('.slider__input');
const img = document.querySelector('.slider__image');

slider.addEventListener('input', () => {
let w = `${slider.value}px`
img.style.width = w ;
let h = `${slider.value-100}px`
img.style.height = h;
console.log(h)
});
//2

const throttleMouseMove =  _.throttle(onMouseMove, 200)
const box = document.querySelector('#box')
let w = 50
window.addEventListener('mousemove', throttleMouseMove);
function onMouseMove (event){
    w= w + 5
    box.style.width = `${w}px`;
    console.log(w)
    
}
