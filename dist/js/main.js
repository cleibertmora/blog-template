var elementsDOM = {
    prevBtn: document.querySelectorAll('.prev'),
    nextBtn: document.querySelectorAll('.next'),
    slideImg: document.querySelector('.showcase-img'),
    slides  : document.querySelectorAll('.slide'),
    author  : document.querySelector('.author'),
    indexSlide: 0,
}

// Events listeners

for (const prev of elementsDOM.prevBtn) {
    prev.addEventListener('click', function(event) {
        changeSlide('prev');
    })
}

for (const next of elementsDOM.nextBtn) {
    next.addEventListener('click', function(event) {
        changeSlide('next');
    })
}

function changeSlide(action){
    // 1. Hide all elements

    [].forEach.call(elementsDOM.slides, function(slide){ 
        slide.style.display = 'none';
        slide.classList.remove('slideInLeft');
        slide.classList.remove('slideInRight');
    });

    // 2. Calculate which element comes after

    var n = parseInt(elementsDOM.indexSlide);

    (action === 'next')? n++ : n--;

    //Set Limits

    if(n > elementsDOM.slides.length - 1){n = 0}
    if(n < 0){ n = 2 }

    //3. Add Classes and display element

    elementsDOM.slides[n].style.display = '';
    if(action === 'next'){
        elementsDOM.slides[n].classList.add('slideInLeft');
    }else{
        elementsDOM.slides[n].classList.add('slideInRight');
    }

    //Grad position

    elementsDOM.indexSlide = n;
}