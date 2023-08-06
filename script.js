const screen = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let screenValue = "";

buttons.forEach((item) => {
  item.addEventListener("click", (e) => {
    const buttonText = e.target.innerText;

    if (buttonText === "C") {
      screenValue = "";
    } else if (buttonText === "=") {
      let result;
      try {
        result = eval(screenValue);
      } catch (error) {
        result = "Expression error";
      }
      screenValue = result;
    } else {
      screenValue += buttonText;
    }
    screen.value = screenValue;
  });
});