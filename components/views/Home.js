import html from "html-literal";

export default state => html`
  <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3>

  <div id="menu">
    <div id="menu-items">
      <a href="/" class="menu-item">Home</a>
      <a href="/" class="menu-item">House</a>
      <a href="/" class="menu-item">Senate</a>
      <a href="/" class="menu-item">Trade</a>
      <a href="/" class="menu-item">News</a>
      <a href="/" class="menu-item">About</a>
    </div>
  </div>
`;
