(function() {
    let b = document.querySelector(".backdrop");

    // mobile-nav (can only be closed by clicking backdrop...not good)s
    var closeMobileNav = (function(backdrop) {
        let hamburgerButton = document.querySelector(".toggle-button");
        let mobileNav = document.querySelector(".mobile-nav");

        hamburgerButton.addEventListener("click", () => {
            mobileNav.classList.add("is-open");
            backdrop.classList.add("is-open");
        });

        let closeNav = function() {
            mobileNav.classList.remove("is-open");
            backdrop.classList.remove("is-open");
        };

        return closeNav;
    })(b);

    // modal (is only present on main page)
    let closeModal = (function(backdrop) {
        let choosePlanButtons = document.querySelectorAll(".plan button");
        let modal = document.querySelector(".modal");
        let modalNoButton = document.querySelector(
            ".modal__actions > .modal__action--negative"
        );

        for (let i = 0; i < choosePlanButtons.length; i++) {
            choosePlanButtons[i].addEventListener("click", () => {
                modal.classList.add("is-open");
                backdrop.classList.add("is-open");
            });
        }

        let closeModal = function() {
            if (modal) {
                modal.classList.remove("is-open");
            }
            backdrop.classList.remove("is-open");
        };

        if (modalNoButton) {
            modalNoButton.addEventListener("click", closeModal);
        }

        return closeModal;
    })(b);

    b.addEventListener("click", () => {
        closeMobileNav();
        closeModal();
    });
})();
