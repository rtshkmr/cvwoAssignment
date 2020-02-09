import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { formatDate } from "./../helpers/helpers";

class TaskList extends React.Component {
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
    const { id, published, created_at, updated_at, ...rest } = obj;
    const { searchTerm } = this.state;

    return Object.values(rest).some(
      value =>
        value
          .toString()
          .toLowerCase()
          .indexOf(searchTerm.toLowerCase()) > -1
    );
  }

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
          {task.deadline} {":"} {task.title}{" "}
        </Link>{" "}
      </li>
    ));
  }

  render() {
    console.log("[TaskList.js]: the TaskList component is now rendering...");
    console.log("[TaskList.js]: Props received: ", this.props.tasks);

    return (
      <section className="taskList">
        <h2>
          All Tasks
          <p>
            <Link to="/tasks/new"> Add New Task </Link>{" "}
          </p>
        </h2>
        {/*-------------------- Search Input ------------------ */}
        <input
          className="search"
          placeholder="Search Tasks"
          type="text"
          // ref to reference it within the same component:
          ref={this.searchInput}
          onKeyUp={this.updateSearchTerm}
        />
        <ul> {this.renderTasks()} </ul>{" "}
      </section>
    );
  }
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object)
};

TaskList.defaultProps = {
  tasks: []
};

export default TaskList;
