const generateBtn = document.getElementById("generate-btn");
const colorsContainer = document.getElementsByClassName("colors-container")[0];

const palettes = [
  {
    palette: [
      { color: "#6F57AD" },
      { color: "#866FBC" },
      { color: "#9B8AC9" },
      { color: "#B5A8D9" },
      { color: "#D4C8EC" },
    ],
  },
  {
    palette: [
      { color: "#2F4F8F" },
      { color: "#4D73B8" },
      { color: "#6C95D8" },
      { color: "#9DBBEA" },
      { color: "#D0E1F7" },
    ],
  },
  {
    palette: [
      { color: "#D95D39" },
      { color: "#E98463" },
      { color: "#F2A07B" },
      { color: "#F7C1A8" },
      { color: "#FCE1D6" },
    ],
  },
  {
    palette: [
      { color: "#2E5E4E" },
      { color: "#4B7F69" },
      { color: "#6AA388" },
      { color: "#98C7B0" },
      { color: "#D2E8DC" },
    ],
  },
  {
    palette: [
      { color: "#B84C7D" },
      { color: "#CF6B97" },
      { color: "#E38CB1" },
      { color: "#F0B4CF" },
      { color: "#F9DCE8" },
    ],
  },
  {
    palette: [
      { color: "#B8860B" },
      { color: "#D4A437" },
      { color: "#E8C15D" },
      { color: "#F3D98E" },
      { color: "#FAEDC8" },
    ],
  },
  {
    palette: [
      { color: "#1F2937" },
      { color: "#374151" },
      { color: "#4B5563" },
      { color: "#9CA3AF" },
      { color: "#E5E7EB" },
    ],
  },
  {
    palette: [
      { color: "#0F766E" },
      { color: "#14B8A6" },
      { color: "#5EEAD4" },
      { color: "#99F6E4" },
      { color: "#CCFBF1" },
    ],
  },
  {
    palette: [
      { color: "#7C2D12" },
      { color: "#9A3412" },
      { color: "#C2410C" },
      { color: "#F97316" },
      { color: "#FED7AA" },
    ],
  },
  {
    palette: [
      { color: "#4C1D95" },
      { color: "#6D28D9" },
      { color: "#8B5CF6" },
      { color: "#C4B5FD" },
      { color: "#EDE9FE" },
    ],
  },
];

let index = 0;
const paletteLength = palettes.length;
let currentPalette = palettes[index].palette;
let colorItem;
let colorInfo;
let color;
let copyIcon;
colorsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("copy-btn")) {
    const colorValue = e.target.previousElementSibling.textContent;

    navigator.clipboard.writeText(colorValue);

    console.log("Copied:", colorValue);
  }
});

// console.log(paletteLength);

for (let i = 0; i < currentPalette.length; i++) {
  colorItem = document.createElement("div");
  colorItem.classList.add("color-item");
  colorItem.style.backgroundColor = `${currentPalette[i].color}`;
  colorInfo = document.createElement("div");
  colorInfo.classList.add("color-info");
  color = document.createElement("p");
  color.innerHTML = currentPalette[i].color;
  copyIcon = document.createElement("i");
  copyIcon.classList.add("fa-regular", "fa-copy", "copy-btn");
  colorInfo.appendChild(color);
  colorInfo.appendChild(copyIcon);
  colorItem.appendChild(colorInfo);
  colorsContainer.appendChild(colorItem);
}

generateBtn.addEventListener("click", generatePalette);

function generatePalette() {
  colorsContainer.innerHTML = "";
  index++;
  console.log(index);

  if (index >= paletteLength) {
    index = 0;
  }
  currentPalette = palettes[index].palette;
  for (let i = 0; i < currentPalette.length; i++) {
    colorItem = document.createElement("div");
    colorItem.classList.add("color-item");
    colorItem.style.backgroundColor = `${currentPalette[i].color}`;
    colorInfo = document.createElement("div");
    colorInfo.classList.add("color-info");
    color = document.createElement("p");
    color.innerHTML = currentPalette[i].color;
    copyIcon = document.createElement("i");
    copyIcon.classList.add("fa-regular", "fa-copy", "copy-btn");
    colorInfo.appendChild(color);
    colorInfo.appendChild(copyIcon);
    colorItem.appendChild(colorInfo);
    colorsContainer.appendChild(colorItem);
  }
}
