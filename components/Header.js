import html from "html-literal";
import links from "../store/Links.js";

export default state => html`
  <header>
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

  <script>
    document.addEventListener("DOMContentLoaded", function() {
      var header = document.querySelector("header");

      // Set the scroll threshold (in pixels) to reveal the header
      var scrollThreshold = 100; // Change this value to your desired scroll amount

      window.addEventListener("scroll", function() {
        if (window.scrollY >= scrollThreshold) {
          header.style.display = "block";
        } else {
          header.style.display = "none";
        }
      });
    });
  </script>
`;
