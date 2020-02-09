import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

// import css styling:
import "./../../assets/stylesheets/application.css";

// import Children components:
import Editor from "./Editor";
import Tag from "./Tag";

const App = () => (
  <div>
    {" "}
    <Switch>
      <Route path="/tasks/:id?" component={Editor} />{" "}
      <Switch>
        <Route path="/tags/:id?" component={Tag} />
        {/* <Route path="/tags/:id?" component={Editor} /> */}
      </Switch>
    </Switch>{" "}
    {/* <Route path="/tags/:id?" component={Editor} />  */}
    {/* #Debug */}
    {console.log(
      "[App.js]: has a Route to Editor component if the path is: /tasks/:id? hence either app component or editor component is rendered"
    )}{" "}
    {console.log(
      "[App.js] :  has a route to Editor component if the path is /tags/:id? hence either app component or editor component is rendered"
    )}
    {console.log(
      "[App.js]: app/javascript/components/App.js should now render app/javascript/components/Editor.js"
    )}{" "}
  </div>
);

export default App;
