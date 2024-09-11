
    // Set the date of the wedding
    const weddingDate = new Date("November 22, 2024 00:00:00").getTime();

    // Update the countdown every second
    const countdownFunction = setInterval(function() {

        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the wedding date
        const distance = weddingDate - now;

        // Time calculations for days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the respective elements
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // If the countdown is finished, write some text
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("timer").innerHTML = "The Wedding Day is Here!";
        }
    }, 1000);

