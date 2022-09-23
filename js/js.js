const toolbar = document.querySelector(".js-buttons-container");
const sizeBtn = document.querySelector(".toolbar-button-size");
const colorBtn = document.querySelector(".toolbar-button-color");
const alignBtn = document.querySelector(".toolbar-button-align");
const text = document.querySelector(".text");
const readyBtn = document.querySelector(".ready-button");
const sticker = document.querySelector(".sticker");

const toolbarButtonClick = (evt) => {
  const button = evt.target.closest("button");

  if (!button) {
    return;
  }

  const setting = button.dataset.setting;

  text.classList.toggle(setting);
};

const alignButtonClick = () => {
  let align = alignBtn.value;
  text.style.textAlign = align;
};

const sizeButtonClick = () => {
  let size = sizeBtn.value;
  text.style.fontSize = size;
};

const colorButtonClick = () => {
  let color = colorBtn.value;
  text.style.color = color;
};

const readyButtonClick = () => {
  let textSticker = text.cloneNode();
  textSticker.classList.remove("text");
  textSticker.classList.toggle("readySticker");
  textSticker.setAttribute("readonly", "true");
  sticker.appendChild(textSticker);
};

toolbar.addEventListener("click", toolbarButtonClick);
sizeBtn.addEventListener("change", sizeButtonClick);
alignBtn.addEventListener("change", alignButtonClick);
colorBtn.addEventListener("change", colorButtonClick);
readyBtn.addEventListener("click", readyButtonClick);
