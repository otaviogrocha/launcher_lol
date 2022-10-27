const inputs = document.querySelectorAll('.input')
const button = document.querySelector('.login_button');
const video = document.querySelector('.back_video')
const mute = document.querySelector('.mute-button')
const img = document.querySelector('.img-button');


const focusAnimation = (event) => {
    const span = event.target.previousElementSibling;
    span.classList.add('span-active');
}


const focusAnimationOut = (event) => {
    if (event.target.value == "") {
        const span = event.target.previousElementSibling;
        span.classList.remove('span-active');
    }
}

const charVerify = () => {
    const [username, password] = inputs;
    if (username.value && password.value.length >= 1) {
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', '')
    }

}

const videoStart = () => {
    // video.muted = false; 
    video.volume = 0.2;       
    video.play();
}

inputs.forEach((input) => input.addEventListener('focus', focusAnimation));
inputs.forEach((input) => input.addEventListener('focusout', focusAnimationOut));
inputs.forEach((input) => input.addEventListener('input', charVerify));

mute.addEventListener('click', ()=>{
    
    if (img.classList.contains('active')) {
        img.classList.remove('active')
        console.log(img)
        video.muted = false; 
        video.volume = 0.2;  
        mute.firstElementChild.src = './src/img/soundup.png'
    }
    else{
        video.muted = true;        
        img.classList.add('active')
        mute.firstElementChild.src = './src/img/mute.png'
    }

});

window.addEventListener('load', videoStart);
