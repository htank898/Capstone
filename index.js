import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)} ${Nav(store.Links)} ${Main(state)} ${Footer()}`;
  afterRender(state);
  router.updatePageLinks();
}
function afterRender(state) {
  if (state.view === "Legislators") {
    const stateForm = document.getElementById("stateForm");
    stateForm.addEventListener("submit", event => {
      event.preventDefault();
      let id = event.target.elements.states.value;
      axios
        .get(
          `https://www.opensecrets.org/api/?method=getLegislators&id=${id}&output=json&apikey=${process.env.OPEN_SECRETS}`
        )
        .then(response => {
          // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
          console.log("response", response);
          store.Legislators.legislators = response.data.response.legislator.map(
            data => {
              return data["@attributes"];
            }
          );
          console.log(store.Legislators);
          router.navigate("/legislators");
        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
    const nameAnchors = Array.from(
      document.getElementsByClassName("clickName")
    );
    nameAnchors.forEach(anchor => {
      anchor.addEventListener("click", event => {
        event.preventDefault();
        let cid = event.target.dataset.cid;
        console.log(cid);
        axios
          .get(
            `https://www.opensecrets.org/api/?method=candContrib&cid=${cid}&output=json&apikey=${process.env.OPEN_SECRETS}`
          )
          .then(response => {
            console.log("response", response);
            store.Legislators.contributions = response.data.response.contributors.contributor.map(
              data => {
                return data["@attributes"];
              }
            );
            console.log("contributions", store.Legislators.contributions);
            router.navigate("/legislators");
          })
          .catch(error => {
            console.log("IT puked", error);
          });
      });
    });
  }
  if (state.view === "Discussion") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      const blogComment = event.target.elements;
      console.log("commentList", blogComment);
      const requestData = {
        name: blogComment.inputName.value,
        comment: blogComment.inputComment.value
      };
      console.log("request Data", requestData);

      axios
        // Make a POST request to the API to create a new pizza
        .post(`${process.env.COMMENT_API_URL}/comments`, requestData)
        .then(response => {
          //  Then push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          store.Discussion.comments.push(response.data);
          router.navigate("/Discussion");
        })
        // If there is an error log it to the console
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
}

// add menu toggle to bars icon in nav bar
//   document.querySelector(".fa-bars").addEventListener("click", () => {
//     document.querySelector("nav > ul").classList.toggle("hidden--mobile");
//   });
// `GET https://www.opensecrets.org/api/?method=candContrib&cid=N00007360&cycle=2016&apikey=${process.env.OPEN_SECRETS}`;
router.hooks({
  before: (done, params) => {
    // We need to know what view we are on to know what data to fetch
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // case "Legislators":
      //   // New Axios get request utilizing already made environment variable
      //   axios
      //     .get(
      //       `https://www.opensecrets.org/api/?method=getLegislators&id=MO&output=json&apikey=${process.env.OPEN_SECRETS}`
      //     )
      //     .then(response => {
      //       // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
      //       console.log("response", response);
      //       store.Legislators.legislators = response.data;
      //       console.log(store.Legislators);
      //       done();
      //     });
      //   .catch(error => {
      //     console.log("It puked", error);
      //     done();
      //   });
      // break;

      case "House":
        // New Axios get request utilizing already made environment variable
        axios
          .get(
            `https://www.opensecrets.org/api/?method=candContrib&cid=N00007360&cycle=2016&output=json&apikey=${process.env.OPEN_SECRETS}`
          )
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            console.log("response", response);
            console.log("response.data", response.data);
            console.log(
              "response.data",
              response.data.response.contributors["@attributes"].cand_name
            );
            store.House.reps.push(response.data);
            console.log(store.House.reps);
            done();
          })
          .catch(error => {
            console.log("It puked", error);
            done();
          });
        break;
      case "Discussion":
        axios
          // Make a POST request to the API to create a new pizza
          .get(`${process.env.COMMENT_API_URL}/comments`)
          .then(response => {
            //  Then push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
            store.Discussion.comments = response.data;
            done();
          })
          // If there is an error log it to the console
          .catch(error => {
            console.log("It puked", error);
          });
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(store.Home),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();

// first call to get all the candidates
// load candidates into select box with name/id...
// once
