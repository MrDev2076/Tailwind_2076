const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up");

    if(this.scrolly >= 250){
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    }else{
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
}
window.addEventListener('scroll',scrollUp);


