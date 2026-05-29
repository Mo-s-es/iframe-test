console.log("Code running.");

const body = document.body;
const top = document.getElementById(".top");
const bar = document.getElementById("bar");
const theme = document.getElementById("theme");
const screen = document.querySelector(".screen");

function run_url(url) {
  url = bar.value;
  
  if (!url.startsWith("https://") && !url.startsWith("http://")) {
    if (url == "") {
      url = "https://example.com";
    } else {
      url = "https://" + url;
    };
  };

  screen.innerHTML = "";
  
  const iframe = document.createElement("iframe");
  
  iframe.src = url;
  iframe.width = "100%";
  iframe.height = "100%";
  iframe.style.border = "none";

  screen.appendChild(iframe);
};

let url = "";
let theme = "dark";

run_url(url);

bar.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    console.log("URL (" + url + ") entered");
    run_url();
  };
});

theme.addEventListener("click", function() {
  if (theme == "dark") {
    theme = "light";
    document.body.style.backgroundColor = #ffffff;
    document.top.style.backgroundColor = #ffffff;
    document.screen.style.backgroundColor = #ffffff;
  } elif (theme == "light") {
    theme = "dark";
    document.body.style.backgroundColor = #000000;
    document.top.style.backgroundColor = #000000;
    document.screen.style.backgroundColor = #000000;
  };
});
