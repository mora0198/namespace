var MORA1980 = {
    init: function(main_page){
        let div = document.createElement("div");
        z.className = "box";
        z.textContent = "Mora198";0
        
        let box = document.getElementById("boxes").appendChild(z);

        z.addEventListener("click", Click);
        z.addEventListener("mouseover", mouseOver);
        z.addEventListener("mouseout", mouseOut);
    }

}

function click() {
    this.style.borderColor = "blue";
    this.style.backgroundColor = "orange";
}
function mouseOver() {
    this.classList.toggle("highlight");
}
function mouseOut() {
    this.removeAttribute("style");
    this.classList.toggle("highlight");
}
