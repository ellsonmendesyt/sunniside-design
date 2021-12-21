const hambuergerBtn=document.querySelector(".hamburger-button");
const menu=document.querySelector(".navbar-menu");


console.log(menu)



hambuergerBtn.addEventListener("click", ()=>{
    menu.classList.toggle('open');
   
})


window.addEventListener('resize',()=>{
    if(menu && menu.classList.contains('open')){
        menu.classList.remove('open');
    }else{
        console.log('sem classe')
    }
})