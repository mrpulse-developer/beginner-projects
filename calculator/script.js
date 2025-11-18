const buttons = document.querySelectorAll("button");
const input = document.getElementById("input");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.innerText;

    if (value === "AC") {
      input.value = "0";
    } else if (value === "DEL") {
      input.value = input.value.length === 1 ? "0" : input.value.slice(0, -1);
    } else if (value === "=") {
      try {
        input.value = eval(input.value);
      } catch {
        input.value = "Error";
      }
    } else {
      if (input.value === "0") {
        input.value = value;
      } else {
        input.value += value;
      }
    }
  });
});
