console.log("Code running.");

const body = document.body;
const top = document.getElementById("top");
const bar = document.getElementById("bar");
const theme_button = document.getElementById("theme");
const screen = document.getElementById("screen");

function run_url(url) {
  url = bar.value;
  
  if (!url.startsWith("https://") && !url.startsWith("http://")) {
    if (url == "") {
      url = "https://example.com";
    } else {
      url = "https://" + url;
    };
  };

  return url;
  
  screen.innerHTML = "";
  
  const iframe = document.createElement("iframe");
  
  iframe.src = url;

  screen.appendChild(iframe);
};

let url = "";
let theme = "dark";

run_url(url);

bar.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    console.log("URL (" + url + ") entered");
    run_url(url);
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
