import { cards } from "./script.js";
export function Card(
  image0,
  card_header1,
  card_header_color0,
  line_color0,
  card_paragraph1,
  card_paragraph_color0,
  backgroundColor
  ) {
 
  const card = document.createElement("div");
  cards.appendChild(card);
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.gap = "20px";
  card.style.width = "24.2%";
  card.style.padding = "35px 40px";
  card.style.backgroundColor = backgroundColor;

  
  const image = document.createElement("img");
  card.appendChild(image);
  image.src = image0;
  image.style.width = "70px"
  image.style.height = "76px"

  
  const card_header = document.createElement("h5");
  card.appendChild(card_header);
  card_header.textContent = card_header1;
  card_header.style.fontSize = "16px";
  card_header.style.fontFamily = "Montserrat";
  card_header.style.fontWeight = "700";
  card_header.style.lineHeight = "24px";
  card_header.style.color = card_header_color0;

  
  const line = document.createElement("div");
  card.appendChild(line);
  line.style.width = "50px";
  line.style.height = "2px";
  line.style.background = line_color0;

  
  const card_paragraph = document.createElement("p");
  card.appendChild(card_paragraph);
  card_paragraph.textContent = card_paragraph1;
  card_paragraph.style.fontSize = "14px";
  card_paragraph.style.fontFamily = "Montserrat";
  card_paragraph.style.fontWeight = "400";
  card_paragraph.style.lineHeight = "20px";
  card_paragraph.style.color = card_paragraph_color0;
}