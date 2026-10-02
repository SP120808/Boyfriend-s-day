let currentPage = 0;

const pages = document.querySelectorAll(".page");


function nextPage() {

    if (currentPage < pages.length - 1) {

        pages[currentPage].classList.remove("active");

        currentPage++;

        pages[currentPage].classList.add("active");

    }

}


function openCoupon() {

    const envelope =
        document.querySelector(".envelope");

    envelope.classList.toggle("open");

}


function restart() {

    pages[currentPage].classList.remove("active");

    currentPage = 0;

    pages[currentPage].classList.add("active");

    const envelope =
        document.querySelector(".envelope");

    envelope.classList.remove("open");

}