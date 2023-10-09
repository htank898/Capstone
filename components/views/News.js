import html from "html-literal";

export default state => html`
  <body>
    <header>
      <a href="index.html">
        <div class="container">
          <img
            src="https://preview.redd.it/9c1nnrvngnob1.jpg?width=148&format=pjpg&auto=webp&s=683c7014c100b0c6efe9d96055b86a2775541e17"
            alt="Adagio Logo"
            width="50"
            height="50"
          />
        </div>
      </a>
    </header>
    <table>
      <tr>
        <th></th>
        Beagles
        <th></th>
        On
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>

      ${state.pizzas
        .map(pizza => {
          return `<tr><td>${pizza.crust}</td><td>${pizza.cheese}</td><td>${
            pizza.sauce
          }</td><td>${pizza.toppings.join(" & ")}</td><td>${
            pizza.customer
          }</td></tr>`;
        })
        .join("")}
    </table>
  </body>
`;
