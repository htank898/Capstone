import html from "html-literal";

export default state => html`
  <!-- <img
    id="hero"
    src="https://images.unsplash.com/photo-1520525003249-2b9cdda513bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXMlMjBjb25ncmVzc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
    alt="hero"
  /> -->
  <div class="hero">
    <video
      aria-hidden="true"
      muted=""
      class=""
      autoplay=""
      loop=""
      playsinline=""
    >
      <source
        src="https://v.ftcdn.net/05/01/80/92/700_F_501809265_H12ltTsyEGXfHPKX6pikfHSueWEIAB17_ST.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </div>

  <div class="hometext">
    Trade like the 1%
  </div>

  <section>
    <h3>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
    </h3>
    <p>Here is some example text</p>
  </section>
  <section class="blue">
    <h1>Nice Curves</h1>
    <p>Here is some example text</p>
    <div class="curve"></div>
  </section>

  <section>
    <h1>Nice Curves</h1>
    <p>Here is some example text</p>
  </section>

  <section class="red">
    <h1>Nice Curves</h1>
    <p>Here is some example text</p>
  </section>

  <section>
    <h1>Nice Curves</h1>
    <p>Here is some example text</p>
  </section>

  <section class="pink">
    <h1>Nice Curves</h1>
    <p>Here is some example text</p>
  </section>

  <section>
    <h1>Nice Curves</h1>
    <p>Here is some example text</p>
  </section>

  <section class="dark">
    <h1>Nice Curves</h1>
    <p>Here is some example text</p>
  </section>
`;
