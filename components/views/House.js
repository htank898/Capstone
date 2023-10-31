import html from "html-literal";

export default state => html`
  <section id="House">
    <table id="Reps">
      <tr>
        <th>Name</th>
        <th>Contributor</th>
        <th>Amount Contributed</th>
        <th>Year</th>
      </tr>

      ${state.reps
        .map(contributions => {
          return `<tr><td>${contributions.response.contributors["@attributes"].cand_name}</td><td>${contributions.response.contributors.contributor[0]["@attributes"].org_name}</td>`;
        })
        .join("")}
    </table>
  </section>
`;



// map through each legislator with getLegislators method
// loop

