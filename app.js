(function pageSwitch() {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            //Button click active
            
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");

            //sections active
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

})();