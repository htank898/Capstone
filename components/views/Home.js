import html from "html-literal";

export default state => html`
  <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3>
  <div>
    Trade like the 1%
    <div></div>
  </div>
`;
