let val = document.getElementById('val');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let agents = document.getElementById('agents');
let omen = document.getElementById('omen');
let yoru = document.getElementById('yoru');
let sparkle = document.getElementById('sparkle');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    sparkle.style.left = value * 0.25 + 'px';
})

text.style.opacity = 0;

window.onscroll = function() {
    let threshold = document.body.scrollHeight * 0.1;
    let currentPosition = window.pageYOffset;

    if (currentPosition > threshold) {
        text.style.transition = "opacity 1.5s";
        text.style.opacity = 1;
        text.style.position = "fixed";
        text.style.top = "0";
    } else {
        text.style.transition = "opacity 0.3s";
        text.style.opacity = 0;
    }
}
