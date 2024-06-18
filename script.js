let allProjectButtons = document.querySelectorAll("div.project");


window.addEventListener("DOMContentLoaded", () => {
    // transformWidth();
    putExploreSVG();
    showOrHideContent();
});



let transformWidth = function () {
    allProjectButtons.forEach(element => {

        element.addEventListener("click", () => {
            element.style.width = "100%";
        })
    })
}


let showOrHideContent = function () {
    allProjectButtons.forEach(element => {

        element.addEventListener("click", () => {

            let buttonProjectAllChildren = element.children;
            let buttonProjectBody = element.children[1];
            let buttonProjectFooter = element.children[buttonProjectAllChildren.length - 1];

            if (buttonProjectBody.style.display === "block") {

                buttonProjectBody.style.display = "none";
                buttonProjectFooter.style.display = "none";

            } else {
                hiddingAllContent()
                buttonProjectBody.style.display = "block";
                buttonProjectFooter.style.display = "block";

                element.scrollIntoView();
            }
        })
    });
}


let hiddingAllContent = function () {

    allProjectButtons.forEach(element => {
        element.children[1].style.display = "none";
        element.children[2].style.display = "none";
    })
}


let putExploreSVG = function () {
    allProjectButtons.forEach(element => {
        // Adiciona icone de "Código" e Ícone no botão
        element.lastElementChild.lastElementChild.getElementsByTagName("a")[0].innerHTML += "<p>Código</p><i class='bx bx-code-alt'></i>"
    })
}