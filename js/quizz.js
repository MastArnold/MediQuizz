let quizzIndex = 0;
    setTimeout(()=>{
        window.scroll(0, 0);
    }, 100);
    
    document.querySelectorAll(".btn-nav-left").forEach((value)=>{
        value.addEventListener('click', ()=>{
            if(quizzIndex > 0){
                quizzIndex--;
                document.querySelectorAll(".quizz").forEach((item)=>{
                    item.style = "transform: translateX(-"+((window.innerWidth * quizzIndex) - (25 * quizzIndex))+"px);"
                });
            }
        });
    });

    document.querySelectorAll(".btn-nav-right").forEach((value)=>{
        value.addEventListener('click', ()=>{
            if(quizzIndex < (document.querySelectorAll(".quizz").length-1)){
                quizzIndex++;
                document.querySelectorAll(".quizz").forEach((item)=>{
                    item.style = "transform: translateX(-"+((window.innerWidth * quizzIndex) - (25 * quizzIndex))+"px);"
                });
            }
        });
    });

    document.querySelectorAll(".quizz.quizz-checkbox .answer-content .box-checkbox").forEach((value)=>{
        value.addEventListener('click', ()=>{
            value.classList.toggle("selected");
            if(value.classList.contains("selected")){
                value.querySelector(".cyberpunk-checkbox").checked = true;
            }else{
                value.querySelector(".cyberpunk-checkbox").checked = false;
            }
        });
    });

    document.querySelectorAll(".quizz.quizz-checkbox-qcu .answer-content .box-checkbox").forEach((value)=>{
        value.addEventListener('click', ()=>{
            if(document.querySelectorAll(".quizz.quizz-checkbox-qcu .answer-content .box-checkbox.selected").length > 0){
                document.querySelectorAll(".quizz.quizz-checkbox-qcu .answer-content .box-checkbox").forEach((item)=>{
                    item.classList.remove("selected");
                });
                value.classList.add("selected");
            }
        });
    });
