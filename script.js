function goToDate() {

    const music = document.getElementById("backgroundMusic");

    music.play();

    document.querySelector(".main-container").style.display = "none";

    document.getElementById("invitePage").style.display = "block";

}

function acceptDate() {

    document.querySelector(".invite-buttons").style.display = "none";

    document.getElementById("successMessage").style.display = "block";

}

function showDateDetails() {

    document.getElementById("invitePage").style.display = "none";

    document.getElementById("dateDetails").style.display = "block";

}

function showDateDetails() {
    document.getElementById("invitePage").style.display = "none";
    document.getElementById("dateDetails").style.display = "none";
    document.getElementById("memoryPage").style.display = "block";
}

function showCountdown() {

    document.getElementById("memoryPage").style.display = "none";

    document.getElementById("countdownPage").style.display = "block";

    startCountdown();

}

function startCountdown() {

    const targetDate = new Date(2026, 11, 1, 17, 30, 0).getTime();

    const timer = setInterval(function() {

        const now = new Date().getTime();

        const distance = targetDate - now;

        if (distance <= 0) {
            clearInterval(timer);

            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";

            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);

        const minutes = Math.floor((distance / (1000 * 60)) % 60);

        const seconds = Math.floor((distance / 1000) % 60);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

    }, 1000);
}