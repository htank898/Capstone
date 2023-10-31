import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)} ${Nav(store.Links)} ${Main(state)} ${Footer()}`;
  afterRender();
  router.updatePageLinks();
}
function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  //   document.querySelector(".fa-bars").addEventListener("click", () => {
  //     document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  //   });
}
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
      case "Senate":
        // New Axios get request utilizing already made environment variable
        axios
          .get(`${process.env.PRO_PUBLICA}/proPublica`)
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
            console.log("response", response);
            store.Senate.senators = response.data;
            console.log(store.Senate);
            done();
          })
          .catch(error => {
            console.log("It puked", error);
            done();
          });
        break;
      default:
        done();
    }
    switch (view) {
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
