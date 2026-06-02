//approach
// 

// let h1=document.querySelector("h1")
// window.addEventListener("keydown",function(dets){
//     if (dets.key ===" "){
//         h1.textContent="SPC";
//     }else{
//         h1.textContent=dets.key;
//     }
// })

let h1 = document.querySelector("h1");
window.addEventListener("keydown",function(dets){
    if (dets.key===" "){
        h1.textContent="spc";
    }else{
        h1.textContent=dets.key;
    }
}) 