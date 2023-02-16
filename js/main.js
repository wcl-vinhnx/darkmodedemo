(function (){
    'use strict'
    
    const callback = (entries) => {
        
        entries.forEach(
            (entry) => {
                
                if (entry.isIntersecting) {
                    const ar = ['animate__animated', 'animate__fadeInUp', 'animate__delay-800ms'];
                    entry.target.classList.add(...ar);
                } 
            }
        );
    }
    let observer = new IntersectionObserver(callback);
    const animationItems = document.querySelectorAll('section');
    animationItems.forEach((item) => {
        observer.observe(item)
    })
})()