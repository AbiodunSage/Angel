// const text = document.getElementById("text");
// text.innerText = "Does she feel the same way?";
// text.innerHTML = " Sage is <strong> strong </strong>";

const elem = document.querySelector("h3");
elem.innerText = "Does she feel the same way?";

// const list = document.querySelectorAll("li");
// list.forEach((node, index) => {
//   node.innerText = `ANGEL PRAISE GIFT ${index}`;
// });

function addNumbers(greeting, ...numbers) {
  let total = 0;
  for (index in numbers) {
    total = total + numbers[index];
  }

  return `${greeting}: the total is ${total}`;
}

const june = addNumbers("holla", 1, 5, 6, 7);

// window.onload = function () {
//   alert("the site is being loaded");
// };
window.onbeforeunload = function () {
  console.log("before unload");
  return "Are you sure you want to leave?";
};
