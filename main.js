const hambuergerBtn=document.querySelector(".hamburger-button");
const mobmenu=document.querySelector(".mobile-menu");


console.log(mobmenu)



hambuergerBtn.addEventListener("click", ()=>{
    mobmenu.classList.toggle('open');
   
})


window.addEventListener('resize',()=>{
    if(mobmenu && mobmenu.classList.contains('open')){
        mobmenu.classList.remove('open');
    }else{
        console.log('sem classe')
    }
})