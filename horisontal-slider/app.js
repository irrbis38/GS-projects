const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const container = document.querySelector(".container");
const slides = Array.from(document.querySelectorAll(".slide"));
const indexIndication = document.querySelector(".counter span:nth-child(1)");
let index = 0;

function negation() {
    gsap.to(container, {
        keyframes: [
            { duration: 0.1, x: -4 },
            { duration: 0.1, x: 4 },
            { duration: 0.1, x: -4 },
            { duration: 0.1, x: 0 },
        ],
    });
}

function animRight() {
    const TLRight = gsap.timeline();

    TLRight.set(indexIndication, { innerText: index + 1 }).to(slides[index], {
        duration: 0.6,
        x: 0,
    });
}

function animLeft() {
    const TLLeft = gsap.timeline();

    TLLeft.set(indexIndication, { innerText: index }).to(slides[index], {
        duration: 0.6,
        x: "-100%",
    });
}

function handleDuration(duration) {
    if (duration === "next") {
        if (index === slides.length - 1) {
            negation();
            return;
        }
        index++;
        animRight();
    } else if (duration === "prev") {
        if (index === 0) {
            negation();
            return;
        }
        animLeft();
        index--;
    }
}

btnNext.addEventListener("click", () => {
    handleDuration("next");
});

btnPrev.addEventListener("click", () => {
    handleDuration("prev");
});
