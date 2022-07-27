const body = document.body;
body.onload = addElement;

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");
  newDiv.classList.add("container-fluid");
  let newDivStyle = `
  background-color:thistle;
  min-height:100vh;
  `;
  newDiv.setAttribute("style", newDivStyle);
  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("body");
  document.body.insertBefore(newDiv, currentDiv);
}
