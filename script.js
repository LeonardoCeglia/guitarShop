


const headerEle = document.querySelector('header')
let lastScrollTop = 0;



window.addEventListener('scroll',()=>{
    let scrollTop = window.pageYOffset 
     
    
    if(scrollTop > lastScrollTop){
        headerEle.classList.add('nav-up')
        headerEle.classList.remove('nav-down')
        
        
    }else{
        headerEle.classList.add('nav-down')
        headerEle.classList.add('sticky-lg-top')
        headerEle.classList.remove('nav-up')
        
    }
    console.log(lastScrollTop,scrollTop)
        
    if(scrollTop === 0){
         headerEle.classList.remove('nav-down')
         headerEle.classList.remove('sticky-lg-top')
         headerEle.classList.remove('nav-up')
         

    }
    lastScrollTop = scrollTop;
})


