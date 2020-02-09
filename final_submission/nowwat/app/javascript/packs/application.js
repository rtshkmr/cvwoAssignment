// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// importing libraries and functions
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

// importing components:
import App from "../components/App";

// require("@rails/ujs").start()
// require("turbolinks").start()
// require("@rails/activestorage").start()
// require("channels")

document.addEventListener("DOMContentLoaded", () => {
  render(
    <BrowserRouter>
      {" "}
      {console.log("[Application.js]: target: the div with the class name root in the index.html.erb view")} <App />{" "}
      {console.log(
        "[Application.js]: application.js has had App.js component rendered via the < BrowserRouter > component"
      )}{" "}
      {/* {console.log("the App.js component should be rendered by now")} */}{" "}
      {/* {console.log("attempting to render app.js component via a BrowserRouter component"      )} */}{" "}
    </BrowserRouter>,
    document.querySelector("#root")
  );
});

// console.log(  "javascript pack: app/javascript/packs/application.js is now mounted / loaded ");

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
