const header = document.querySelector('.header');
for(var i = 0; i<=100; i++){
    const blocks = document.createElement('div');
    blocks.classList.add('block');
    header.appendChild(blocks);
}
function animateBlocks(){
    anime({
        targets: '.block',
        translateX: function(){
            return anime.random(-700,700)
        },
         translateY: function(){
            return anime.random(-700,700)
        },
          scale: function(){
            return anime.random(1,5)
        },
        easing: 'linear',
        duration: 3000,
        delay: anime.stagger(10),
        complete: animateBlocks
    })
}
animateBlocks();


// scroll button
mybutton = document.getElementById('myBtn');

//when the user scroll down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = 'block';
    } else {
        mybutton.style.display = 'none';
    }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

//when the user click on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; //for safari
    document.documentElement.scrollTop = 0; //for chrome, firefox, IE and opera
}


//counter section
const counters = document.querySelectorAll('.counter__number');
// console.log(counters);
function runCounter(){
    counters.forEach(counter => {
        counter.innerText =0;
        let target = +counter.dataset.count;
        let step = target / 100;
        // console.log(target);
        let countIt = function(){
            let displayedCount = +counter.innerText;
            if(displayedCount < target){
                counter.innerText = Math.ceil(displayedCount + step);
                setTimeout(countIt, 30)
            }else{
                counter.innerText = target
            }
        }
        countIt()
    })
}


let counterSection = document.querySelector('.counter');
let options = {
    rootMargin : '0px 0px -200px 0px'
}
const sectionObserver = new IntersectionObserver(function(entries){
    if(entries[0].isIntersecting){
        runCounter();
    }
   
},options)
 sectionObserver.observe(counterSection)