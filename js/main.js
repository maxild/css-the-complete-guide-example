// on page load pseudo handler
(function() {
    // page singleton elements
    let backdrop = document.querySelector(".backdrop");
    let modal = document.querySelector(".modal");

    // console.log(backdrop);
    // console.dir(backdrop);

    let choosePlanButtons = document.querySelectorAll(".plan button");

    let hamburgerButton = document.querySelector(".toggle-button");
    let mobileNav = document.querySelector(".mobile-nav");

    for (let i = 0; i < choosePlanButtons.length; i++) {
        // arrow function does not work in IE
        choosePlanButtons[i].addEventListener("click", () => {
            modal.style.display = "block";
            backdrop.style.display = "block";
        });
    }

    let modalNoButton = document.querySelector(
        ".modal__actions > .modal__action--negative"
    );

    // const requires IE11
    const closeModal = function() {
        // spaghetti code...we just hide every modal and the backdrop
        modal.style.display = "none";
        backdrop.style.display = "none";
        mobileNav.style.display = "none";
    };

    modalNoButton.addEventListener("click", closeModal);

    backdrop.addEventListener("click", closeModal);

    hamburgerButton.addEventListener("click", function() {
        mobileNav.style.display = "block";
        backdrop.style.display = "block";
    });
})();
