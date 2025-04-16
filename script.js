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
            // Show portfolio with swipe up animation
            portfolioContent.style.display = "block";
            portfolioContent.style.animation = "swipeUp 0.6s ease-out";
            portfolioContent.scrollIntoView({ behavior: "smooth" });

            // Change button icon to down arrow
            span.textContent = "⬇";
        } else {
            // Play swipe down animation and then hide
            portfolioContent.style.animation = "swipeDown 0.5s ease-in";
            setTimeout(() => {
                portfolioContent.style.display = "none";
            }, 500);

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
});
