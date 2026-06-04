const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  let start = 0;
  const end = Number(counter.innerText);

  const update = () => {
    start += Math.ceil(end / 100);

    if (start < end) {
      counter.innerText = start;
      requestAnimationFrame(update);
    } else {
      counter.innerText = end;
    }
  };

  update();
});
