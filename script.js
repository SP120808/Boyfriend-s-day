let currentPage = 0;
let pages = [];

document.addEventListener("DOMContentLoaded", function () {

    pages = document.querySelectorAll(".page");

    // Make sure only Page 1 is active
    pages.forEach(function (page) {
        page.classList.remove("active");
    });

    if (pages.length > 0) {
        pages[0].classList.add("active");
    }

    // Make every NEXT button work
    const nextButtons = document.querySelectorAll(".next");

    nextButtons.forEach(function (button) {
        button.addEventListener("click", nextPage);
    });

});


function nextPage(event) {

    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    if (currentPage < pages.length - 1) {

        pages[currentPage].classList.remove("active");

        currentPage++;

        pages[currentPage].classList.add("active");

    }

}


function openCoupon() {

    const envelope = document.querySelector(".envelope");

    if (envelope) {
        envelope.classList.toggle("open");
    }

}


function restart() {

    if (pages.length === 0) {
        return;
    }

    pages[currentPage].classList.remove("active");

    currentPage = 0;

    pages[currentPage].classList.add("active");

    const envelope = document.querySelector(".envelope");

    if (envelope) {
        envelope.classList.remove("open");
    }

}
