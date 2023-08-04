let swap_btn = document.getElementById("swap_btn");

swap_btn.addEventListener("mouseover",()=>{
    swap_btn.style.transform = "rotate(180deg)"
})

swap_btn.addEventListener("mouseout",()=>{
    swap_btn.style.transform = "rotate(360deg)"
})