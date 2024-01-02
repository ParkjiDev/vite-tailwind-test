import { insertLast } from "/src/lib/dom/insert.js";
import { getNode } from "/src/lib/dom/getNode.js";

const body = getNode("body");
const template = /*html*/ `
  <h1 class='text-pink-400'>테스트1</h1>
  <h1 class='addClass'>js class 할당</h1>
  <h1 class='text-yellow-400'>주석 사용</h1>
  <h1 class='text-green-400'>hidden 사용</h1>
  <h1 class='text-blue-400'>safelist 사용</h1>
  <h1 class='text-purple-300'>safelist 사용</h1>
`;

insertLast(body, template);

getNode(".addClass").classList.add("text-red-400");

/* -------------------------------------------------------------------------- */

const a = getNode("a");

function handlePopup() {
  window.open(
    "/src/pages/productReview/",
    "productReview",
    "width=793, height=630"
  );
}

a.addEventListener("click", handlePopup);
