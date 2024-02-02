const main_container = document.getElementsByTagName("main")[0]
main_container.style.display = "flex"
main_container.style.flexDirection = "column"



const box_1 = document.createElement ("div")
main_container.appendChild(box_1)
box_1.style.height = "180vh"
box_1.style.width = "100%"
box_1.style.display = "flex"
box_1.style.alignItems = "center"
box_1.style.justifyContent = "center"
box_1.style.flexDirection = "column"
box_1.style.background = "#252B42"
box_1.style.padding = "80px, 0px, 80px, 0px"
box_1.style.gap = "80px"


const box_1_text = document.createElement("div")
box_1.appendChild(box_1_text)
box_1_text.style.width = "47%";
box_1_text.style.display = "flex"
box_1_text.style.alignItems = "center"
box_1_text.style.justifyContent = "center"
box_1_text.style.flexDirection = "column"
box_1_text.style.padding = "0px,0px, 40px, 0px"
box_1_text.style.gap = "80px"
box_1_text.style.paddingTop = "20px"

const welcome = document.createElement("h5")
welcome.textContent = "Welcome"
box_1_text.appendChild(welcome)
welcome.style.fontFamily = "Montserrat"
welcome.style.textAlign = "center"
welcome.style.fontSize = "16px"
welcome.style.fontWeight = "700"
welcome.style.lineHeight = "24px"
welcome.style.color = "#23A6F0"


const selling = document.createElement("h1")
selling.textContent = "Selling on the internet like a pro"
welcome.appendChild(selling)
selling.style.fontFamily = "Montserrat"
selling.style.fontSize = "58px"
selling.style.fontWeight = "700"
selling.style.lineHeight = "80px"
selling.style.color ="#FFFFFF"
selling.style.textAlign = "center"
selling.style.marginTop = "50px"

const large_objects = document.createElement("p")
large_objects.textContent = "We know how large objects will act, but things on a small scale just do not act that way."
box_1_text.appendChild(large_objects)
large_objects.style.width = "80%";
large_objects.style.fontFamily = "Montserrat"
large_objects.style.fontSize = "20px"
large_objects.style.fontWeight = "400"
large_objects.style.lineHeight = "30px"
large_objects.style.color = "#FFFFFF"
large_objects.style.textAlign = "center"



const buttons = document.createElement("div");
box_1_text.appendChild(buttons);
buttons.style.display = "flex";
buttons.style.alignItems = "center"
buttons.style.justifyContent = "center"
buttons.style.gap = "10px";



const get_now = document.createElement("button")
buttons.appendChild(get_now)
get_now.textContent = "Get Quote Now";
get_now.style.borderRadius = "5px";
get_now.style.border = "none";
get_now.style.padding = "15px 37px";
get_now.style.width = "193px";
get_now.style.height = "52px";
get_now.style.fontSize = "14px";
get_now.style.fontWeight = "700";
get_now.style.textAlign = "center";
get_now.style.lineHeight = "22px";
get_now.style.color = "white";
get_now.style.background = "#23A6F0";


const learn_more = document.createElement("button");
buttons.appendChild(learn_more);
learn_more.textContent = "Learn More";
learn_more.style.borderRadius = "5px";
learn_more.style.border = "solid 1px #23A6F0";
learn_more.style.padding = "14px 40px";
learn_more.style.height = "52px";
learn_more.style.fontSize = "14px";
learn_more.style.fontWeight = "700";
learn_more.style.textAlign = "center";
learn_more.style.lineHeight = "22px";
learn_more.style.color = "#23A6F0";
learn_more.style.background = "transparent";


export const cards = document.createElement("div");
box_1.appendChild(cards);
cards.style.display = "flex";
cards.style.justifyContent = "center";
cards.style.gap = "2%";

import { Card } from "./index.js";


Card(
  "images/emoj-img.png",
  "training Courses",
  "#252B42",
  "#E74040",
  "The gradual accumulation of information about atomic and small-scale behaviour...",
  "#737373",
  "white"
);
Card(
  "images/green-img.png",
  "2,769 online courses",
  "#252B42",
  "#E74040",
  "The gradual accumulation of information about atomic and small-scale behaviour...",
  "#737373",
  "white"
);
Card(
  "images/white.png",
  "training Courses",
  "white",
  "white",
  "The gradual accumulation of information about atomic and small-scale behaviour...",
  "white",
  "#23A6F0"
);





const box_2 = document.createElement ("div")
main_container.appendChild(box_2)
box_2.style.height = "80vh"
box_2.style.width = "100%"
box_2.style.display = "flex"
box_2.style.alignItems = "center"
box_2.style.justifyContent = "center"
box_2.style.flexDirection = "column"
box_2.style.background = "white"
box_2.style.padding = "160px, 0px, 160px, 0px"
box_2.style.gap = "80px"




const box_2_text = document.createElement("div")
box_2.appendChild(box_2_text)
box_2_text.style.width = "47%";
box_2_text.style.display = "flex"
box_2_text.style.alignItems = "center"
box_2_text.style.justifyContent = "center"
box_2_text.style.flexDirection = "column"
box_2_text.style.padding = "0px,0px, 40px, 0px"
box_2_text.style.gap = "80px"
box_2_text.style.paddingTop = "180px"



const practice = document.createElement("h5")
practice.textContent = "Practice Advice "
box_2_text.appendChild(practice)
practice.style.fontFamily = "Montserrat"
practice.style.textAlign = "center"
practice.style.fontSize = "16px"
practice.style.fontWeight = "700"
practice.style.lineHeight = "24px"
practice.style.color = "#23A6F0"




const products = document.createElement("h2");
box_2_text.appendChild(products);
products.textContent = "Featured Products";
products.style.fontSize = "40px";
products.style.fontFamily = "Montserrat"
products.style.fontWeight = "700";
products.style.textAlign = "center";
products.style.lineHeight = "50px";
products.style.color = "#252B42";

const problems = document.createElement("p")
problems.textContent = "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
box_2_text.appendChild(problems)
problems.style.width = "80%";
problems.style.fontFamily = "Montserrat"
problems.style.fontSize = "20px"
problems.style.fontWeight = "400"
problems.style.lineHeight = "30px"
problems.style.color = "#737373"
problems.style.textAlign = "center"



const input_holder = document.createElement("form");
box_2.appendChild(input_holder);
input_holder.style.position= "relative";
input_holder.style.width = "40%";
input_holder.style.paddingBottom = "160px"

const input = document.createElement("input");
input_holder.appendChild(input);
input.placeholder = "Your Email";
input.style.width = "100%";
input.style.height = "58px";
input.style.padding = "15px 20px";
input.style.outline = "none";
input.style.borderRadius = "5px";
input.style.border = "1px solid #E6E6E6";
input.style.color = "#737373";
input.style.background = "#F9F9F9";


const subscribe = document.createElement("button");
input_holder.appendChild(subscribe);
subscribe.textContent = "Subscribe";
subscribe.style.position = "absolute";
subscribe.style.right = "0";
subscribe.style.width = "117px";
subscribe.style.height = "58px";
subscribe.style.borderRadius = "0px 5px 5px 0px";
subscribe.style.border = "none";
subscribe.style.padding = "15px 22px";
subscribe.style.fontSize = "14px";
subscribe.style.fontFamily = "Montserrat";
subscribe.style.fontWeight = "400";
subscribe.style.lineHeight = "28px";
subscribe.style.color = "white";
subscribe.style.background = "#23A6F0";