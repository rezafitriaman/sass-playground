import _ from "lodash";
import './style.sass';
import Icon from "./icon.png";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "reza"], " ");
  element.classList.add("hello");

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

	//element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
