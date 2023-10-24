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
        src="https://packaged-media.redd.it/945f1hpl8fvb1/pb/m2-res_720p.mp4?m=DASHPlaylist.mpd&v=1&e=1698051600&s=4442ecc6cb16695e6e9e1fd1d17fdc217dd109e6#t=0"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </div>

  <div class="hometext">
    Promoting Accountability in a Corrupt World
  </div>

  <button href="../views/senate.js" id="calltoaction">
    Discover
  </button>

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
