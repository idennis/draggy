
function allowDrop(event) {
  event.target.classList.add("ableDrop");
  event.preventDefault();
  
}

function drag(dragEvent) {
  dragEvent.dataTransfer.setData("text", dragEvent.target.id);
}

function drop(dropEvent) {
  dropEvent.preventDefault();
  var data = dropEvent.dataTransfer.getData("text");
  console.log("data is: ", data);
  var toBeDropped = document.getElementById(data);
  var droppedOnField = dropEvent.target;
  droppedOnField.appendChild(toBeDropped);
  
  extractTargetMetadata(droppedOnField);
  
  
}

function dragFinishes(event) {
  console.log("Drag finishes ", event);
  if (event.target.parentNode != null
    && event.target.parentNode.classList.contains("ableDrop")) {
      event.target.parentNode.classList.remove("ableDrop");
    }
  event.target.classList.remove("ableDrop");
}

function dragLeaves(event) {
  event.target.classList.remove("ableDrop");
}


function extractTargetMetadata(target) {
  console.log("extract!" , target);
}
