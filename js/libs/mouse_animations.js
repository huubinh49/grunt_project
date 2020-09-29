document.addEventListener("DOMContentLoaded", ()=>{
    const pointer_element = document.querySelector(".pointer_element");
    const learnmore_btns = Array.from(document.querySelectorAll('.learn_more'))
    for(let i = 0; i<learnmore_btns.length;i++){
        learnmore_btns[i].onmouseenter = (event)=>{
            pointer_element.classList.add("hovering")
        }
        learnmore_btns[i].onmouseleave = (event)=>{
            pointer_element.classList.remove("hovering")
        }
    }
    document.onmousemove = (event)=>{
        hovering = false
        pointer_element.style.top = `${event.clientY}px`
        pointer_element.style.left = `${event.clientX}px`  
    }

    const btn_collapse = document.querySelector(".btn_collapse");

    btn_collapse.onclick = ()=>{
        btn_collapse.classList.toggle('active');
    }
    
})