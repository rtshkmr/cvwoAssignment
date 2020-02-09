import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // to pass existing props to task form when editing
import { tag_list } from "./../helpers/helpers";

const Task = ({ task, onDelete }) => (
  <div className="taskContainer">
    {" "}
    {console.log("[Task.js]: Props Received:", task)}{" "}
    <h2>
      {" "}
      {task.deadline} {" - "} {task.title}{" "}
      <Link to={`/tasks/${task.id}/edit`}> Edit Task </Link>{" "}
      <button
        className="delete"
        type="button"
        onClick={() => onDelete(task.id)}
      >
        Delete Task{" "}
      </button>{" "}
    </h2>{" "}
    <ul>
      <li>
        <strong> Title: </strong> {task.title}{" "}
      </li>{" "}
      <li>
        <strong> Body: </strong> {task.body}{" "}
      </li>{" "}
      <li>
        <strong> Deadline: </strong> {task.deadline}{" "}
      </li>{" "}
      <li>
        <strong> Complete ? </strong> {task.completed ? " yes" : " no"}{" "}
      </li>{" "}
      <li className="tag_list"> {tag_list(task)} </li>{" "}
      {/* <li className="tag_list">
        {(() => {
          if (task.tags.length > 0) {
            tag_list(task);
            console.log("[Task.js]: within weird if block, length:", task.tags.length)
            console.log("[Task.js]: within weird if block", tag_list(task));
          }
        })()}
      </li>{" "} */}
    </ul>{" "}
  </div>
);

Task.propTypes = {
  task: PropTypes.shape(),
  onDelete: PropTypes.func.isRequired
};

Task.defaultProps = {
  task: {}
};

export default Task;
