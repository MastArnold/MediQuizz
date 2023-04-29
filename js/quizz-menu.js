document.querySelectorAll(".categorie").forEach((value)=>{
    value.addEventListener('mouseover', ()=>{
        value.querySelectorAll(".categorie-head")[0].classList.remove("opacity-0");
        value.querySelectorAll(".categorie-head")[1].classList.add("opacity-0");
    });
    value.addEventListener('mouseout', ()=>{
        value.querySelectorAll(".categorie-head")[0].classList.add("opacity-0");
        value.querySelectorAll(".categorie-head")[1].classList.remove("opacity-0");
    });
    value.addEventListener('click', ()=>{
        window.location.href = "quizz-level.html";
    });
});