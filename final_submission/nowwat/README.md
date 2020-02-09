# Ritesh Kumar A0201829H 

This README outlines what has been done for http://nowwat.herokuapp.com. The actual repository is at  https://github.com/rtshkmr/nowwat















# Progress for Task Model

Fri Jan 10 09:49:33 +08 2020

1. Task model set up with fields title:string body:text deadline:date completed:boolean
   - used responders gem and namespaced tasks_controller.rb under API so that API calls
     can be responded with json. This works
2. configed webpacker gem
3. added a site_controller and an index view under views/site/index.html.erb
4. Set up basic scaffolding for the components
5. Installed axios via yarn to handle HTTP request and tasks fetching from the backend
6. started using eslint, configed to airbnb rules
7. Displaying Tasks: the Task.js component:

   - add the react router
   - add external routes to ruby router, pointing to the site_controller's index action

8. Created the <PropsRoute> component, to allow parent components to pass props to children components:

   ```javascript
   // app/javascript/components/PropsRoute.js
   import React from "react";
   import { Route } from "react-router-dom";
   import PropTypes from "prop-types";

   const renderMergedProps = (component, ...rest) => {
     const finalProps = Object.assign({}, ...rest);
     return React.createElement(component, finalProps);
   };

   const PropsRoute = ({ component, ...rest }) => (
     <Route
       {...rest}
       render={routeProps => renderMergedProps(component, routeProps, rest)}
     />
   );

   PropsRoute.propTypes = {
     component: PropTypes.func.isRequired
   };

   export default PropsRoute;
   ```

9. god bless I almost wanted to cry and the bug was a simple routing issue because of a prop passed in was wrong
   along the way there were so many other bugs. Like using Proptypes is best practice so you don't get type errors, but i kind of
   didn't set the proper default props, a `undefined` vs `{}` empty object problem

10. added some basic styling based of some tutorial, will look into it later. For now, the styling (App.css is in app/javascript/components/App.css) and is imported into App.js component
    BUG: heroku prcommpiling will fail. so have to put under assets.
    ANOTHER BUG: the relative file path should be `./../../assets/stylesheets/application.css` and not `../../assets/stylesheets/application.css`.

css styling stuff: https://www.w3schools.com/css/css_background.asp

11. created the form component. Console logged to check if it renders locally. Form component is really complicated.
    HEROKU HAS ISSUES PRECOMPILING THE FORM WHAT THE HECK.

    **_possible solution is to run this_**: `$ rails assets:precompile`
    I'm gonna try put the logic in the form first.

    - protip: the submission function, let it render console logs on the object created first! then handle the API side of things
    - abstracted things into helper functions, hope it doesn't mess up the precompilation :(

12. using Pickaday for datepicker.

    - add via yarn
    - do the import from the form itself
    - ew but the thing is so disgusting

13. callback function for the submission (making the API request)

- callback is made in the context of the parent component, and passed in the form component
- submission works

14. Delete action"

    - declare callback method in editor component and pass to the task component (child) in a similar way
    - settle axios call and subsequent redirects

15. Update Action

- the routing order is v impt, spent ages trying to fix bug, ended up just putting it in order. See routing "table" in Editor.js
- there has to be a switch around new/update/delete

https://react-bootstrap.github.io/getting-started/introduction/

16. FormActions: cancel button added

- encapsulate your cancel URL in a const
- using a link to helper

17. Added a search feature for tasks

- idea:

  - your tasks are all kept in the TaskList component's state, so use that to good effect...
  - put an input field in the relevant component add a reference to the input field so that you can put search terms into component state
  - see how to exclude database fields from the ajax call using the spread notation and capturing desired fields within `rest`. The rest of the code is just copy-paste boilerplate

  ```jsx
    constructor(props) {
      super(props);
      this.state = {
        searchTerm: ""
      };

      //  bind class methods for TaskList component:
      this.searchInput = React.createRef();
      this.updateSearchTerm = this.updateSearchTerm.bind(this);
    }

    updateSearchTerm() {
      this.setState({ searchTerm: this.searchInput.current.value });
    }

  matchSearchTerm(obj) {
      const {
        id, published, created_at, updated_at, ...rest
      } = obj;
      const { searchTerm } = this.state;

      return Object.values(rest).some(
        value => value.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1,
      );
  }

  ```

  ```jsx
    // filters based on search input field
    renderTasks() {
      const { activeId, tasks } = this.props;

      const filteredTasks = tasks
        .filter(el => this.matchSearchTerm(el))
        .sort((a, b) => new Date(b.deadline) - new Date(a.deadline));

      return filteredTasks.map(task => (
        <li key={task.id}>
          <Link
            to={`/tasks/${task.id}`}
            className={activeId === task.id ? "active" : ""}
          >
            {task.deadline}
            {" - "}
            {task.title}
          </Link>
        </li>
      ));
    }

  ```

# Progress for Tag Model

Sun Jan 12 16:59:56 +08 2020

1. generate Tags and Tagging models first, then settle the controllers under the API namespace. Okay nice settled the relationships in the model's ruby files.
   using rails console, db seems to be properly set up
2. model methods:
   - tag_list: an attribute/method that represents the task's related tags
3. now have to namespace their controllers and render json...

```json
// http://localhost:3000/api/tasks.json

[
  {
    "id": 1,
    "title": "testing db",
    "body": "asdf",
    "deadline": "2020-01-12",
    "completed": true,
    "created_at": "2020-01-12T08:10:43.820Z",
    "updated_at": "2020-01-12T08:10:43.820Z",
    "tags": [
      {
        "id": 2,
        "name": "tagg1test",
        "created_at": "2020-01-12T08:27:43.695Z",
        "updated_at": "2020-01-12T08:27:43.695Z"
      },
      {
        "id": 3,
        "name": "tagg22222test",
        "created_at": "2020-01-12T08:27:51.832Z",
        "updated_at": "2020-01-12T08:27:51.832Z"
      },
      {
        "id": 4,
        "name": "tagg3333333test",
        "created_at": "2020-01-12T08:27:57.447Z",
        "updated_at": "2020-01-12T08:27:57.447Z"
      }
    ]
  },
  {
    "id": 2,
    "title": "why the stylesheet got issues in heroku deployment?? ",
    "body": "aasdfa",
    "deadline": "2020-01-12",
    "completed": false,
    "created_at": "2020-01-12T08:44:05.387Z",
    "updated_at": "2020-01-12T08:44:05.387Z",
    "tags": []
  }
]
```

```json
// http://localhost:3000/api/tasks/1.json
{
  "id": 1,
  "title": "testing db",
  "body": "asdf",
  "deadline": "2020-01-12",
  "completed": true,
  "created_at": "2020-01-12T08:10:43.820Z",
  "updated_at": "2020-01-12T08:10:43.820Z",
  "tags": [
    {
      "id": 2,
      "name": "tagg1test",
      "created_at": "2020-01-12T08:27:43.695Z",
      "updated_at": "2020-01-12T08:27:43.695Z"
    },
    {
      "id": 3,
      "name": "tagg22222test",
      "created_at": "2020-01-12T08:27:51.832Z",
      "updated_at": "2020-01-12T08:27:51.832Z"
    },
    {
      "id": 4,
      "name": "tagg3333333test",
      "created_at": "2020-01-12T08:27:57.447Z",
      "updated_at": "2020-01-12T08:27:57.447Z"
    }
  ]
}
```

```json
// http://localhost:3000/api/tags.json
[
  {
    "id": 4,
    "name": "tagg3333333test",
    "created_at": "2020-01-12T08:27:57.447Z",
    "updated_at": "2020-01-12T08:27:57.447Z",
    "tasks": [
      {
        "id": 1,
        "title": "testing db",
        "body": "asdf",
        "deadline": "2020-01-12",
        "completed": true,
        "created_at": "2020-01-12T08:10:43.820Z",
        "updated_at": "2020-01-12T08:10:43.820Z"
      }
    ]
  },
  {
    "id": 3,
    "name": "tagg22222test",
    "created_at": "2020-01-12T08:27:51.832Z",
    "updated_at": "2020-01-12T08:27:51.832Z",
    "tasks": [
      {
        "id": 1,
        "title": "testing db",
        "body": "asdf",
        "deadline": "2020-01-12",
        "completed": true,
        "created_at": "2020-01-12T08:10:43.820Z",
        "updated_at": "2020-01-12T08:10:43.820Z"
      }
    ]
  },
  {
    "id": 2,
    "name": "tagg1test",
    "created_at": "2020-01-12T08:27:43.695Z",
    "updated_at": "2020-01-12T08:27:43.695Z",
    "tasks": [
      {
        "id": 1,
        "title": "testing db",
        "body": "asdf",
        "deadline": "2020-01-12",
        "completed": true,
        "created_at": "2020-01-12T08:10:43.820Z",
        "updated_at": "2020-01-12T08:10:43.820Z"
      }
    ]
  }
]
```
4. managed to extract tags from API call and put into state. Now have to make a view component for tag to view all the associated

# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

- Ruby version

- System dependencies

- Configuration

- Database creation

- Database initialization

- How to run the test suite

- Services (job queues, cache servers, search engines, etc.)

- Deployment instructions

- ...
