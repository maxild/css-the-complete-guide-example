(function() {
    // page singleton elements
    let backdrop = document.querySelector(".backdrop");
    let modal = document.querySelector(".modal");

    // console.log(backdrop);
    // console.dir(backdrop);

    let choosePlanButtons = document.querySelectorAll(".plan button");

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
        modal.style.display = "none";
        backdrop.style.display = "none";
    };

    modalNoButton.addEventListener("click", closeModal);
    backdrop.addEventListener("click", closeModal);
})();
