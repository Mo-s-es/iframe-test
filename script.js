console.log("Code running.");

const body = document.body;
const top = document.getElementById("top");
const bar = document.getElementById("bar");
const theme_button = document.getElementById("theme");
const screen = document.getElementById("screen");

function run_url() {
  let new_url = bar.value;
  
  if (!new_url.startsWith("https://") && !new_url.startsWith("http://")) {
    if (new_url == "") {
      new_url = "https://example.com";
    } else {
      new_url = "https://" + new_url;
    };
  };
  
  screen.innerHTML = "";
  
  const iframe = document.createElement("iframe");
  
  iframe.src = new_url;

  screen.appendChild(iframe);

  return new_url;
};

let url = run_url();
let theme = "dark";

bar.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    console.log("URL (" + url + ") entered");
    url = run_url();
  };
});

theme_button.addEventListener("click", function() {
  if (theme == "dark") {
    theme = "light";
    body.style.backgroundColor = "#ffffff";
    top.style.backgroundColor = "#ffffff";
    screen.style.backgroundColor = "#ffffff";
    console.log("Theme changed to light.")
  } else if (theme == "light") {
    theme = "dark";
    body.style.backgroundColor = "#000000";
    top.style.backgroundColor = "#000000";
    screen.style.backgroundColor = "#000000";
    console.log("Theme changed to dark.")
  };
});
