import html from "html-literal";
import links from "../store/Links.js";

export default state => html`
  <header id="header">
    <!-- <h1>${state.header}</h1> -->
    <div class="logo">Adagio</div>
    <div class="hamburger">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <nav class="nav-bar">
      <ul class="hidden--mobile nav-links">
        ${links
          .map(
            link =>
              `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
          )
          .join("")}
      </ul>
    </nav>
  </header>
`;

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    header.style.opacity = "1";
    header.style.backgroundColor = "#000000";
  } else {
    header.style.opacity = "0";
    header.style.backgroundColor = "#000001";
  }
});
