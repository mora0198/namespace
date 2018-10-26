var MORA0198 = {
    init: function () {
        let z = document.createElement("div");
        z.className = "box";
        z.textContent = "Mora0198";

        let box = document.getElementById("boxes").appendChild(z);

        z.addEventListener("click", clickButton);
        z.addEventListener("mouseover", Over);
        z.addEventListener("mouseout", Out);
    }

    function clickButton() {
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
}
