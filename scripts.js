const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-button");
const unitSpan = document.querySelectorAll("#metric-number");

const feetCalcEl = document.getElementById("feet-calc");
const metersCalcEl = document.getElementById("meters-calc");
const litersCalcEl = document.getElementById("liters-calc");
const gallonsCalcEl = document.getElementById("gallons-calc");
const poundsCalcEl = document.getElementById("pounds-calc");
const kilosCalcEl = document.getElementById("kilos-calc");

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Function to resize input
function resizeInput() {
  // Create a temporary span to measure text width
  const tempSpan = document.createElement("span");
  tempSpan.style.visibility = "hidden";
  tempSpan.style.position = "absolute";
  tempSpan.style.fontSize = window.getComputedStyle(this).fontSize;
  tempSpan.style.fontFamily = window.getComputedStyle(this).fontFamily;
  tempSpan.textContent = this.value;
  document.body.appendChild(tempSpan);

  // Get the width of the text
  const textWidth = tempSpan.offsetWidth;

  // Remove the temporary span
  document.body.removeChild(tempSpan);

  // Set the input width to match the text width, but not less than the minimum
  const minWidth = 150; // Should match the CSS min-width
  this.style.width = Math.max(minWidth, textWidth + 20) + "px"; // Add some padding
}

// Add event listener for input changes
numberInput.addEventListener("input", resizeInput);

console.log(unitSpan);

convertBtn.addEventListener("click", function () {
  let unit = numberInput.value;
  console.log(unit);

  for (let i = 0; i < unitSpan.length; i++) {
    unitSpan[i].textContent = unit;
  }

  let feetCalc = (Number(unit) * 3.281).toFixed(3);
  let metersCalc = (Number(unit) / 3.281).toFixed(3);

  let litersCalc = (Number(unit) * 0.264).toFixed(3);
  let gallonsCalc = (Number(unit) / 0.264).toFixed(3);

  let poundsCalc = (Number(unit) * 2.204).toFixed(3);
  let kilosCalc = (Number(unit) / 2.204).toFixed(3);

  feetCalcEl.textContent = feetCalc;
  metersCalcEl.textContent = metersCalc;
  litersCalcEl.textContent = litersCalc;
  gallonsCalcEl.textContent = gallonsCalc;
  poundsCalcEl.textContent = poundsCalc;
  kilosCalcEl.textContent = kilosCalc;
  console.log(feetCalc);
});

// Initial call to set correct size
resizeInput.call(numberInput);
