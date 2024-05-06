const flutter_p1_gif = 'https://user-images.githubusercontent.com/95550011/194463089-fa489bb5-50ab-4350-923d-75c903e7d880.gif';


let allProjectButtons = document.querySelectorAll("div.project");

console.log(allProjectButtons);

window.addEventListener("DOMContentLoaded", () => {
    allProjectButtons.forEach(element => {
        console.log(element.children);
        element.addEventListener("click", () => {
            
            let projectContent = element.lastElementChild;

            if (projectContent.style.display === "none") {


                document.querySelector(".row").style.flexDirection = "column";

                projectContent.style.display = "block";

            } else {

                document.querySelector(".row").style.flexDirection = "row";

                projectContent.style.display = "none";

                

            }
        })
    });
});
