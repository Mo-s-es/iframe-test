const screenDiv = document.querySelector(".screen")
const iframe = document.createElement("iframe");

iframe.src = url;
iframe.width = "100%";
iframe.height = "100%";
iframe.style.border = "none";

screenDiv.appendChild(iframe);
