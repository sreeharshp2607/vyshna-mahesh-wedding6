/* =========================================
   WEDDING INVITATION JAVASCRIPT
========================================= */


/* =========================================
   WEDDING MUSIC
========================================= */

const weddingMusic = new Audio("music/wedding.mp3");

weddingMusic.loop = true;
weddingMusic.volume = 0.35;


/* =========================================
   OPEN INVITATION
========================================= */

function openInvitation() {
    createFlowerShower();

    const openingScreen =
        document.getElementById("openingScreen");

    const mainWebsite =
        document.getElementById("mainWebsite");

    /* Start music */

    weddingMusic.play().then(() => {

        document
            .getElementById("musicControl")
            .classList.add("playing");

    }).catch(() => {

        console.log(
            "Music playback was blocked by the browser."
        );

    });


    /* Fade opening screen */

    openingScreen.classList.add("opening-hide");


    /* Reveal website */

    setTimeout(() => {

        mainWebsite.classList.add("website-show");

    }, 500);

}


/* =========================================
   PLAY / PAUSE MUSIC
========================================= */

function toggleMusic() {

    const musicIcon =
        document.getElementById("musicIcon");

    const musicControl =
        document.getElementById("musicControl");


    if (weddingMusic.paused) {

        weddingMusic.play();

        musicIcon.innerHTML = "♫";

        musicControl.classList.add("playing");

    } else {

        weddingMusic.pause();

        musicIcon.innerHTML = "🔇";

        musicControl.classList.remove("playing");

    }

}


/* =========================================
   COUNTDOWN
========================================= */

function updateCountdown() {

    const weddingDate =
        new Date("November 15, 2026 11:30:00").getTime();

    const now =
        new Date().getTime();

    const difference =
        weddingDate - now;


    if (difference <= 0) {

        document.getElementById("days").innerText = "00";

        document.getElementById("hours").innerText = "00";

        document.getElementById("minutes").innerText = "00";

        document.getElementById("seconds").innerText = "00";

        return;
    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
            (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
            (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");

}


/* =========================================
   START COUNTDOWN
========================================= */

updateCountdown();

setInterval(updateCountdown, 1000);
/* =========================================
   FLOWER SHOWER EFFECT
========================================= */

function createFlowerShower() {

    const container =
        document.getElementById("flowerContainer");

    const flowers = [
        "🌸",
        "🌺",
        "🌼",
        "🌷",
        "✿",
        "❀"
    ];

    /* Create 45 petals */

    for (let i = 0; i < 45; i++) {

        const petal =
            document.createElement("span");

        petal.classList.add("flower-petal");

        petal.innerHTML =
            flowers[
                Math.floor(
                    Math.random() * flowers.length
                )
            ];

        /* Random horizontal position */

        petal.style.left =
            Math.random() * 100 + "%";


        /* Random size */

        petal.style.fontSize =
            (14 + Math.random() * 16) + "px";


        /* Random falling speed */

        petal.style.animationDuration =
            (3 + Math.random() * 3) + "s";


        /* Random delay */

        petal.style.animationDelay =
            (Math.random() * 0.8) + "s";


        container.appendChild(petal);


        /* Remove after animation */

        setTimeout(() => {

            petal.remove();

        }, 6500);

    }

}