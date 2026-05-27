console.log("Code running.");

const bar = document.getElementById("bar");
const screen = document.querySelector(".screen");

function run_url() {
  const iframe = document.createElement("iframe");

  iframe.src = bar.value;
  iframe.width = "100%";
  iframe.height = "100%";
  iframe.style.border = "none";

  screen.appendChild(iframe);
}
