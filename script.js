let allProjectButtons = document.querySelectorAll("div.project");

console.log(allProjectButtons);

window.addEventListener("DOMContentLoaded", () => {

    allProjectButtons.forEach(element => {
        console.log(element.children);
        element.addEventListener("click", () => {
            
            let projectContent = element.lastElementChild;

            if (projectContent.style.display === "block") {


                // document.querySelector(".row").style.flexDirection = "column";

                projectContent.style.display = "none";

            } else {

                // document.querySelector(".row").style.flexDirection = "row";

                projectContent.style.display = "block";


            }
        })
    });

});
