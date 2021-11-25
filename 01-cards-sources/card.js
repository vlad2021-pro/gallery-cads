const slides = document.querySelectorAll('.slide')


for (const slide of slides) {
    slide.addEventListener('click', () => {
        slide.classList.add('active')

        clearActiveListner ()
        slide.classList.add('active')
    })
    
}

function clearActiveListner() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })

}