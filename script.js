// ===============================
// TEXT ANIMATION
// ===============================

let words = document.querySelectorAll(".word");

if (words.length > 0) {

    words.forEach((word) => {

        let letters = word.textContent.split("");

        word.textContent = "";

        letters.forEach((letter) => {

            let span = document.createElement("span");

            span.textContent = letter;

            span.className = "letter";

            word.appendChild(span);

        });

    });


    let currentWordIndex = 0;

    let maxWordIndex = words.length - 1;


    words[currentWordIndex].style.opacity = "1";


    function changeText() {

        let currentWord = words[currentWordIndex];

        let nextWord =
            currentWordIndex === maxWordIndex
                ? words[0]
                : words[currentWordIndex + 1];


        Array.from(currentWord.children).forEach((letter, index) => {

            setTimeout(() => {

                letter.className = "letter out";

            }, index * 80);

        });



        nextWord.style.opacity = "1";


        Array.from(nextWord.children).forEach((letter, index) => {

            letter.className = "letter behind";


            setTimeout(() => {

                letter.className = "letter in";

            }, 340 + index * 80);


        });



        currentWordIndex =
            currentWordIndex === maxWordIndex
                ? 0
                : currentWordIndex + 1;


    }


    setInterval(changeText, 3000);

}





// ===============================
// MOBILE MENU
// ===============================


const menuIcon = document.querySelector("#menu-icon");

const navList = document.querySelector(".navlist");


if (menuIcon) {

    menuIcon.onclick = function () {

        menuIcon.classList.toggle("bx-x");

        navList.classList.toggle("open");

    }

}



// tutup menu ketika klik link

document.querySelectorAll(".navlist a").forEach(link => {

    link.onclick = function () {

        navList.classList.remove("open");

        menuIcon.classList.remove("bx-x");

    }

});







// ===============================
// CONTACT POPUP
// ===============================


const contactForm = document.getElementById("contactForm");

const popupAlert = document.getElementById("popupAlert");

const closePopupBtn = document.getElementById("closePopupBtn");



if (contactForm && popupAlert) {


    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();


        popupAlert.classList.add("active");


        contactForm.reset();


    });


}



if (closePopupBtn) {

    closePopupBtn.onclick = function () {

        popupAlert.classList.remove("active");

    }

}








// ===============================
// MIXITUP GALLERY
// ===============================


if (document.querySelector(".portfolio-gallery")) {


    if (typeof mixitup !== "undefined") {


        let mixer = mixitup(".portfolio-gallery");


    }


}








// ===============================
// ACTIVE NAVBAR
// ===============================


const menuLinks = document.querySelectorAll(".navlist a");

const sections = document.querySelectorAll("section");



function activeMenu() {


    let scrollPosition = window.scrollY + 150;



    sections.forEach(section => {


        let top = section.offsetTop;

        let height = section.offsetHeight;

        let id = section.getAttribute("id");



        if (
            scrollPosition >= top &&
            scrollPosition < top + height
        ) {


            menuLinks.forEach(link => {

                link.classList.remove("active");

            });


            let activeLink =
                document.querySelector(
                    '.navlist a[href="#' + id + '"]'
                );


            if (activeLink) {

                activeLink.classList.add("active");

            }


        }


    });


}



window.addEventListener(
    "scroll",
    activeMenu
);


activeMenu();

// ===============================
// HEADER BACKGROUND SAAT SCROLL
// ===============================


const header = document.querySelector("header");


window.addEventListener("scroll", () => {


    if (window.scrollY > 50) {

        header.classList.add("sticky");

    }

    else {

        header.classList.remove("sticky");

    }


});
