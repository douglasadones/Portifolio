let allProjectButtons = document.querySelectorAll("div.project");


window.addEventListener("DOMContentLoaded", () => {
    // transformWidth();
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