//must use ! at the end of the code here to tell typescript there is such element, otherwise show error
const button = document.querySelector("button")!;

function clickHandler(message: string) {
  console.log("Clicked " + message);
}

//here there is not this keyword, so use null instead of this.
button.addEventListener("click", clickHandler.bind(null, "hello"));
