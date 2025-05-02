document.addEventListener("DOMContentLoaded", function () {
    const swipeBtn = document.querySelector(".swipe-up");
    const portfolioContent = document.getElementById("portfolio-content");
    const dashboardToggle = document.querySelector(".dashboard-toggle");
    const dashboard = document.querySelector(".dashboard");

    let isPortfolioVisible = false;
    let isDashboardOpen = false;

    // Swipe Button Click Handler
    swipeBtn.addEventListener("click", function () {
        const span = swipeBtn.querySelector("span");

        if (!isPortfolioVisible) {
            // Show portfolio with complex animation
            portfolioContent.style.display = "block";
            portfolioContent.style.animation = "zoomIn 0.8s ease-out, fadeIn 0.5s ease-out";
            portfolioContent.scrollIntoView({ behavior: "smooth" });

            // Change button icon to down arrow
            span.textContent = "⬇";
        } else {
            // Play swipe down animation and then hide
            portfolioContent.style.animation = "zoomOut 0.8s ease-in, fadeOut 0.5s ease-in";
            setTimeout(() => {
                portfolioContent.style.display = "none";
            }, 800);

            // Change button icon back to up arrow
            span.textContent = "⬆";
        }

        isPortfolioVisible = !isPortfolioVisible;
    });

    // Dashboard Toggle
    dashboardToggle.addEventListener("click", () => {
        dashboard.classList.toggle('open');
        isDashboardOpen = !isDashboardOpen;
    });

    const expandButtons = document.querySelectorAll(".expand-btn");

    expandButtons.forEach(button => {
        button.addEventListener("click", () => {
            const expandableText = button.nextElementSibling;

            if (expandableText.classList.contains("hidden")) {
                expandableText.classList.remove("hidden", "hide");
                expandableText.classList.add("show");
                button.textContent = "Show Less";
            } else {
                expandableText.classList.remove("show");
                expandableText.classList.add("hide");
                setTimeout(() => {
                    expandableText.classList.add("hidden");
                }, 500); // Match the animation duration
                button.textContent = "Show More";
            }
        });
    });

    function triggerExplosion() {
        const swipeUp = document.querySelector('.swipe-up');
        swipeUp.classList.add('explosive');

        // Reset the animation after it completes
        setTimeout(() => {
            swipeUp.classList.remove('explosive');
        }, 600); // Match the duration of the animation
    }
});
