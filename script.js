AOS.init();

const dropdown = document.querySelectorAll(".dropdown");
const responseOfQuestions = document.querySelectorAll(".res");
const states = new Array(dropdown.length).fill(false);

dropdown.forEach((item, i) => {
  item.onclick = () => {
    states[i] = !states[i];

    states[i]
      ? (responseOfQuestions[i].style.display = "flex")
      : (responseOfQuestions[i].style.display = "none");
  };
});
