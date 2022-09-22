const toolbar = document.querySelector(".js-buttons-container");
const sizeBtn = document.querySelector(".toolbar-button-size");
const colorBtn = document.querySelector(".toolbar-button-color");
const alignBtn = document.querySelector(".toolbar-button-align");
const text = document.querySelector(".text");
const readyBtn = document.querySelector(".ready-button");
const sticker = document.querySelector(".sticker");


let selectText = getSelection().toString();


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
/*   let readySticker = document.createElement("div");
  readySticker.classList.add('readySticker')
  readySticker.textContent = text.value;
  sticker.appendChild(readySticker); */

let test = text.cloneNode()
test.classList.remove('text')
test.classList.toggle('readySticker')
sticker.appendChild(test); 
}

toolbar.addEventListener("click", toolbarButtonClick);
sizeBtn.addEventListener("change", sizeButtonClick);
alignBtn.addEventListener("change", alignButtonClick);
colorBtn.addEventListener("change", colorButtonClick);
readyBtn.addEventListener("click", readyButtonClick);
