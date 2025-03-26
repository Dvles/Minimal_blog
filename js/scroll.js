document.addEventListener("DOMContentLoaded", function () {
  const articles = document.querySelectorAll(".homepage-item");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("active");
          } else {
              entry.target.classList.remove("active");
          }
      });
  }, { threshold: 0.5 });

  articles.forEach((article) => observer.observe(article));
});
