let allProjectButtons = document.querySelectorAll("div.project");

let allTechnologyTitle = document.querySelectorAll('div.tecnologia');

const thereAreDisplayBlockChecker = () => {
    for (const i of allProjectButtons) {
        if (i.lastElementChild.style.display === "block") {
            console.log("Achei!")
            return true;
        }
    }
    return false;
};



window.addEventListener("DOMContentLoaded", () => {

    allProjectButtons.forEach(element => {
        element.addEventListener("click", () => {
            let projectContent = element.lastElementChild;

            if (projectContent.style.display === "block") {

                projectContent.style.display = "none";

                // Não havendo nenhuma imagem expandida, volta ao display row.
                if (!thereAreDisplayBlockChecker()) {
                    document.querySelector(".row").style.flexDirection = "row";
                }              

            } else {

                document.querySelector(".row").style.flexDirection = "column";
                
                projectContent.style.display = "block";

                element.scrollIntoView();
            }
        })
    });
});
