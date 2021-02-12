const slides = document.querySelectorAll('.slide');

function slideShow(){
    const active = document.querySelector('.active');
    active.classList.remove('active')
    if(active.nextElementSibling){
        active.nextElementSibling.classList.add('active')
    } else {
        slides[0].classList.add('active')
    }

    setTimeout('slideShow()', 3000)
}

window.onload = slideShow;