var MORA0198 = {
    init: function () {
        let z = document.createElement("div");
        z.className = "box";
        z.textContent = "Mora0198";

        let box = document.getElementById("boxes").appendChild(z);

        z.addEventListener("click", function () {
            z.style.borderColor = "blue";
            z.style.backgroundColor = "orange";
        });
        z.addEventListener("mouseover", function () {
            z.classList.toggle("highlight");
        });
        z.addEventListener("mouseout", function () {
            z.removeAttribute("style");
            z.classList.toggle("highlight");
        });
    }

}



