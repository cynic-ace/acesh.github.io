const ham = document.querySelector(".ham");
const navlist = document.querySelector(".navlist");

ham.addEventListener("click", () => {
  ham.classList.toggle("active");
  navlist.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    ham.classList.remove("active");
    navlist.classList.remove("active");
  })
);

document.querySelectorAll("a[href^=#]").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(
      this.getAttribute("href").scrollIntoView({
        behaviour: "smooth",
      })
    );
  });
});
