import html from "html-literal";

export default state => html`
  <form id="adagioBlog" method="POST" action="">
    <label for="inputName">Enter Name:</label>
    <input type="text" id="inputName" name="inputName" />
    <div>
      <label for="inputComment">Enter Comment:</label>
      <input type="text" id="inputComment" name="inputComment" />
    </div>
    <input type="submit" name="submit" value="Submit Comment" />
  </form>

  <section id="commentSection">
    <table id="blogTable" class="ctable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        ${state.comments
          .map(blog => {
            return `<tr><td>${blog.name}</td><td>${blog.comment}</tr>`;
          })
          .join("")}
      </tbody>
    </table>
  </section>
`;
