var MORA1980 = {
    init: function(){
        let e = document.createElement("div");
        e.className = "box";
        e.textContent = "Mora198";
        
        let box = document.getElementById("boxes").appendChild(e);

        e.addEventListener("click", Click);
        e.addEventListener("mouseover", Over);
        e.addEventListener("mouseout", Out);
    }

}
function click() {
    this.style.borderColor = "blue";
    this.style.backgroundColor = "orange";
}
function Over() {
    this.classList.toggle("highlight");
}
function Out() {
    this.removeAttribute("style");
    this.classList.toggle("highlight");
}
