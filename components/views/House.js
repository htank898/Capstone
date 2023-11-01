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

      <h2>Search Your Senator</h2>
      <h3>By State</h3>
      <div>
        <label for="State"></label>
        <select id="crust" name="crust">
          <option value="">Select a State</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MO">Michigan</option>
          <option value="MT">Minnesota</option>
          <option value="NE">Mississippi</option>
          <option value="NV">Missouri</option>
          <option value="NH">Montana</option>
          <option value="NJ">Nebraska</option>
          <option value="NM">Nevada</option>
          <option value="NM">New Hampshire</option>
          <option value="NC">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
      </div>

      ${state.reps
        .map(contributions => {
          return `<tr><td>${contributions.response.contributors["@attributes"].cand_name}</td><td>${contributions.response.contributors.contributor[0]["@attributes"].org_name}</td></tr>`;
        })
        .join("")}
    </table>
  </section>
`;

// map through each legislator with getLegislators method
// loop
