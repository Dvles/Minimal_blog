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

document.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;

  document.querySelectorAll(".homepage-item").forEach((item) => {
      let image = item.querySelector(".homepage-image-container img");
      let title = item.querySelector(".hero-title");
      let excerpt = item.querySelector(".hero-p");

      if (image) {
          image.style.transform = `translateY(${scrollTop * 0.2}px)`; 
      }

      if (title) {
          title.style.transform = `translateY(${scrollTop * 0.4}px)`; 
      }

      if (excerpt) {
          excerpt.style.transform = `translateY(${scrollTop * 0.6}px)`; 
      }
  });
});
