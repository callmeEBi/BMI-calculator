let $ = document;
let weightRangeInput = $.querySelector("#weight_range");
let heightRangeInput = $.querySelector("#height_range");
let bmiNumberEl = $.querySelector(".bmi_number");
let bmiStatusEl = $.querySelector(".bmi_status");
let digitWeightSpan = $.querySelector(".digit_weight");
let digitHeightSpan = $.querySelector(".digit_height");
weightRangeInput.addEventListener("input", bmiCalculator);
heightRangeInput.addEventListener("input", bmiCalculator);

function bmiCalculator() {
  digitWeightSpan.textContent = weightRangeInput.value;
  digitHeightSpan.textContent = heightRangeInput.value;
  let weight = weightRangeInput.value;
  let height = heightRangeInput.value / 100;
  let bmi = weight / height ** 2;
  bmiNumberEl.textContent = bmi.toFixed(2);
  bmiStatusEl.textContent = checkBmiStatus(bmi)[0];
  bmiStatusEl.style.color = checkBmiStatus(bmi)[1];
}

function checkBmiStatus(bmi) {
  if (bmi >= 40) {
    return ["Obese", "#FF6861"];
  } else if (25 <= bmi && bmi < 40) {
    return ["Overweight", "#FFB54C"];
  } else if (18.5 <= bmi && bmi < 25) {
    return ["Normal", "#8CD47E"];
  } else {
    return ["Underweight", "#FFE189"];
  }
}
