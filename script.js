let allProjectButtons = document.querySelectorAll("div.project");


window.addEventListener("DOMContentLoaded", () => {
    showOrHideContent();
});

let showOrHideContent = function () {

    allProjectButtons.forEach(element => {
        let buttonProjectAllChildren = element.children;
        let buttonProjectHeader = element.children[0];
        let buttonProjectBody = element.children[1];
        let buttonProjectFooter = element.children[buttonProjectAllChildren.length - 1];

        buttonProjectHeader.addEventListener("click", () => {
            if (buttonProjectBody.style.display === "block") {
                buttonProjectBody.style.display = "none";
                buttonProjectFooter.style.display = "none";
            } else {
                hiddingAllContent()
                buttonProjectBody.style.display = "block";
                buttonProjectFooter.style.display = "flex";
                element.scrollIntoView();
            }
        })

        buttonProjectBody.addEventListener("click", () => {
            if (buttonProjectBody.style.display === "block") {
                buttonProjectBody.style.display = "none";
                buttonProjectFooter.style.display = "none";
            } else {
                hiddingAllContent()
                buttonProjectBody.style.display = "block";
                buttonProjectFooter.style.display = "flex";
                element.scrollIntoView();
            }
        })
    });
}


let hiddingAllContent = function () {
    allProjectButtons.forEach(element => {
        // content
        element.children[1].style.display = "none";

        // footer
        element.children[2].style.display = "none";
    })
}