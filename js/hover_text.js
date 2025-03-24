document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("hover-btn");
    btn.addEventListener("mouseenter", () => {
        btn.innerText = btn.getAttribute("data-hover");
    });
    btn.addEventListener("mouseleave", () => {
        btn.innerText = btn.getAttribute("data-default");
    });
});