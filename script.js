console.log("Code running.");

const bar = document.getElementById("bar");
const screen = document.querySelector(".screen");

function run_url() {
  let url = bar.value;
  
  if (!url.startsWith("https://") && !url.startsWith("http://")) {
    url = "https://" + url;
  }

  screen.innerHTML = "";
  
  const iframe = document.createElement("iframe");
  
  iframe.src = url;
  iframe.width = "100%";
  iframe.height = "100%";
  iframe.style.border = "none";

  screen.appendChild(iframe);
}

bar.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    run_url();
  }
});
