// dataTransfer.getData(format);
function allowDrop(event) {
  console.log("it works", event);
  event.target.classList.add("ableDrop");
  event.preventDefault();
  
}

function drag(dragevent) {
  dragevent.dataTransfer.setData("text/plain", "This is the text to drag");
}
