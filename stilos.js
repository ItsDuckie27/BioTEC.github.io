function scrollDown(targetElementId) {
    const targetElement = document.getElementById(targetElementId);
    if (!targetElement) {
        console.error(`Element with ID ${targetElementId} not found.`);
        return;
    }
    
    const targetY = targetElement.getBoundingClientRect().top + window.scrollY;
    const initialY = window.scrollY;
    const duration = 250;
    let startTime = null;

    function step(currentTime) {
        if (!startTime) {
            startTime = currentTime;
        }
        const progress = (currentTime - startTime) / duration;
        window.scrollTo(0, initialY + progress * (targetY - initialY));
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

document.getElementById("Bt_R").addEventListener("click", function() {
    scrollDown("PROGRAMACIÓN-Java");
});








