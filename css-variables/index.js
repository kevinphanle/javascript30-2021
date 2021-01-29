const inputs = document.querySelectorAll(".controls input");
const inputArr = [...inputs];

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
  console.log(this.name);
}

inputs.forEach((input) => {
  input.addEventListener("change", handleUpdate);
  input.addEventListener("mouseover", handleUpdate);
});
