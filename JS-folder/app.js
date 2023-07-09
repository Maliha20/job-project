const slides = document.querySelectorAll(".slide")
let counter = 0 

//

slides.forEach(
    (slide, index)=>{
        slide.style.left = `${index * 100}%`
    }
)

const goPrev = ()=>{
    counter --
    slideImage()
}

const goNext = ()=>{
    counter ++
    if (counter > 3) {
        counter = 3;
      }
    slideImage()
}


const slideImage = () =>{
    slides.forEach(
        (slide) =>{
            slide.style.transform = `translateX( -${counter * 100}%)`
        }
    )

}

//feature section


  