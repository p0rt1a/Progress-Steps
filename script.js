const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const steps = document.querySelectorAll(".circle");
const bar = document.getElementById("progress-bar");

let activeStep = 1;
let barLength = 0;

nextButton.addEventListener("click", () => {
  activeStep++;
  if (prevButton.disabled) {
    prevButton.disabled = false;
  }
  if (activeStep >= steps.length) {
    activeStep = steps.length;
    nextButton.disabled = true;
  }

  //Update step count
  steps[activeStep - 1].classList.add("active");

  //Update step bar
  barLength += 33.3;
  bar.style.width = barLength + "%";
});

prevButton.addEventListener("click", () => {
  activeStep--;
  if (nextButton.disabled) {
    nextButton.disabled = false;
  }
  if (activeStep <= 1) {
    activeStep = 1;
    prevButton.disabled = true;
  }

  //Update step count
  steps[activeStep].classList.remove("active");
  //Update step bar
  barLength -= 33.3;
  bar.style.width = barLength + "%";
});
