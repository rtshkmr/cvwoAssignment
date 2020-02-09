import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// import helper functions:
import {
  isEmptyObject,
  validateTask,
  formatDate,
  text_to_comma_separated_array,
  create_tag_object
} from "./../helpers/helpers";

// Pickaday datepicker
import Pikaday from "pikaday";
import "pikaday/css/pikaday.css";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    // give the form some state:
    this.state = {
      task: props.task,
      errors: {} // using an errors property to handle input checking
    };

    // bind class methods in constructor!
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.dateInput = React.createRef();
  }

  // ==============================    HOOKS    ===============================
  componentDidMount() {
    new Pikaday({
      field: this.dateInput.current,
      toString: date => formatDate(date),
      onSelect: date => {
        const formattedDate = formatDate(date);
        this.dateInput.current.value = formattedDate;
        this.updateTask("deadline", formattedDate);
      }
    });
  }

  componentWillReceiveProps({ task }) {
    this.setState({ task });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { task } = this.state;
    const errors = validateTask(task);
    if (!isEmptyObject(errors)) {
      this.setState({ errors });
    } else {
      const { onSubmit } = this.props;
      onSubmit(task);
      console.log(
        " [TaskForm.js]: | handleSubmit function | form has been been submitted, this was the object passed:",
        task
      );
    }
  }

  updateTask(key, value) {
    // convert value for the key tags to a string array:
    if (key === "tags") {
      value = text_to_comma_separated_array(value);
    }

    this.setState(prevState => ({
      task: {
        ...prevState.task,
        [key]: value
      }
    }));
    console.log(
      "[TaskForm.js]: |updateTask method| task updated to: ",
      this.state
    );
  }

  handleInputChange(task) {
    const { target } = task;
    const { name } = target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.updateTask(name, value);
    console.log(
      "[TaskForm.js]: |handleInputChange method| task updated to: ",
      this.state
    );
  }

  renderErrors() {
    console.log("[TaskForm.js]: rendering errors in form submission...");
    const { errors } = this.state;

    if (isEmptyObject(errors)) {
      return null;
    }

    return (
      <div className="errors">
        <h3> The following errors prohibited the task from being saved: </h3>{" "}
        <ul>
          {" "}
          {Object.values(errors).map(error => (
            <li key={error}> {error} </li>
          ))}{" "}
        </ul>{" "}
      </div>
    );
  }

  render() {
    // capture relevant consts:
    const { task } = this.state; // create state to fill in existing fields
    const cancelURL = task.id ? `/tasks/${task.id}` : "/tasks";
    const title = task.id ? `${task.deadline} - ${task.title}` : "New Task"; // refers to the view's title thing that we going to put

    return (
      <div>
        <h2> {title} </h2> {this.renderErrors()}{" "}
        <form className="taskForm" onSubmit={this.handleSubmit}>
          {" "}
          {/* ============  TITLE  ======================= */}{" "}
          <div>
            <label htmlFor="title">
              <strong> Title: </strong>{" "}
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.handleInputChange}
                value={task.title}
              />{" "}
            </label>{" "}
          </div>{" "}
          {/* =============== BODY ===================== */}{" "}
          <div>
            <label htmlFor="body">
              <strong> Body: </strong>{" "}
              <input
                type="text"
                id="body"
                name="body"
                onChange={this.handleInputChange}
                value={task.body}
              />{" "}
            </label>{" "}
          </div>{" "}
          <div>
            {" "}
            {/* ========== DEADLINE ===================== */}{" "}
            <label htmlFor="deadline">
              <strong> Deadline: </strong>{" "}
              <input
                type="text"
                id="deadline"
                // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                // CREATING A REF ON THE INPUT SO WE CAN REFERENCE IT ELSEWHERE IN THE CODE
                ref={this.dateInput}
                autoComplete="off"
                value={task.deadline}
                onChange={this.handleInputChange}
              />{" "}
            </label>{" "}
          </div>{" "}
          {/*===================== TAG FIELD =========================*/}{" "}
          <div>
            <label htmlFor="tags">
              <strong> Tags: </strong>{" "}
              <input
                type="text"
                id="tags"
                name="tags"
                onChange={this.handleInputChange}
                value={task.tags}
              />{" "}
            </label>{" "}
          </div>{" "}
          {/* ============= COMPLETED STATUS============== */}{" "}
          <div>
            <label htmlFor="completed">
              <strong> Completed ? : </strong>{" "}
              <input
                type="checkbox"
                id="completed"
                name="completed"
                onChange={this.handleInputChange}
                value={task.completed}
              />{" "}
            </label>{" "}
          </div>{" "}
          {/* ============= FORM ACTIONS ============== */}{" "}
          <div className="form-actions">
            <button type="submit"> Save Task </button>{" "}
            <Link to={cancelURL}> Cancel </Link>{" "}
          </div>{" "}
        </form>{" "}
      </div>
    );
  }
}

// type checking and defaults:
TaskForm.propTypes = {
  task: PropTypes.shape(),
  onSubmit: PropTypes.func.isRequired
};

TaskForm.defaultProps = {
  task: {
    title: "",
    body: "",
    deadline: "",
    completed: false,
    tags: []
  }
};

export default TaskForm;
