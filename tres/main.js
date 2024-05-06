const container = document.getElementById("container");
const imageOne = document.querySelector(".header-img");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomNumber(min, max) {
  // Calculate the random number between min and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

btnNo.addEventListener("mouseover", (event) => {
  const containerRect = container.getBoundingClientRect();
  const containerWidth = containerRect.width;
  const containerHeight = containerRect.height;
  const btnRect = btnNo.getBoundingClientRect();
  const btnWidth = btnRect.width;
  const btnHeight = btnRect.height;

  // Definir los nuevos límites para la posición aleatoria
  const minLeft = 0;
  const maxLeft = containerWidth - btnWidth;
  const minTop = 0;
  const maxTop = containerHeight - btnHeight;

  // Generar una posición aleatoria dentro de los nuevos límites
  const newLeft = getRandomNumber(minLeft, maxLeft);
  const newTop = getRandomNumber(minTop, maxTop);

  // Establecer la nueva posición del botón "no."
  btnNo.style.left = newLeft + "px";
  btnNo.style.top = newTop + "px";
});

btnYes.addEventListener("click", (e) => {
  // Oculta los botones y la imagen de cabecera
  btnNo.classList.add("hide");
  btnYes.classList.add("hide");
  imageOne.classList.add("hide");
  
  // Muestra el nuevo contenido
  const newContent = document.getElementById("newContent");
  newContent.classList.remove("hide");
});
