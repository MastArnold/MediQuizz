document.querySelectorAll(".menu .menu-item").forEach((value)=>{
    value.addEventListener('mouseover', ()=>{
        value.querySelectorAll(".menu-item-head")[0].classList.remove("opacity-0");
        value.querySelectorAll(".menu-item-head")[1].classList.add("opacity-0");
    });
    value.addEventListener('mouseout', ()=>{
        value.querySelectorAll(".menu-item-head")[0].classList.add("opacity-0");
        value.querySelectorAll(".menu-item-head")[1].classList.remove("opacity-0");
    });
    value.addEventListener('click', ()=>{
        window.location.href = "quizz-menu.html";
    });
});