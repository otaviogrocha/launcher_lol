const inputs = document.querySelectorAll('.input')
const button = document.querySelector('.login_button');
const video = document.querySelector('.back_video')


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


const charVerify = () =>{
    const [username, password] = inputs;
    if (username.value && password.value.length >= 1){
        button.removeAttribute('disabled')
    }else{
        button.setAttribute('disabled', '')
    }

}

const videoStart = ()=>{
    video.volume = 0.1;
    video.removeAttribute(muted);
    video.play();
}

inputs.forEach((input) => input.addEventListener('focus', focusAnimation));
inputs.forEach((input) => input.addEventListener('focusout', focusAnimationOut));
inputs.forEach((input) => input.addEventListener('input', charVerify));

videoStart();