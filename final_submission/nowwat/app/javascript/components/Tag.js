import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom"; // to pass existing props to tag form when editing
import { tag_list } from "./../helpers/helpers";
import { task_list } from "./../helpers/helpers";

class Tag extends React.Component {
  constructor(props) {
    // init the state:
    super(props);
    this.state = {
      tags: null
    };

    // bind class methods here:
    console.log(
      "[Tag.js]: |constructor method| Tag component has been constructred"
    );
  }

  // didMount hook: API fetching:
  componentDidMount() {
    console.log(
      "[Tag.js] |componentDidMount Hook|componentDidMount hook is now running after the Tag component has been mounted..."
    );
    axios
      .get("/api/tags.json")
      .then(response => {
        this.setState({ tags: response.data });
        // console.log("axios response for get /api/tags.json", response.data);
      })
      .catch(error => {
        console.log(error);
      });
    console.log(
      "[Tag.js]: |Axios API fetching| API for all tags has been pulled by Tag.js"
    );
    console.log(
      "[Tag.js]: |Axios API fetching| current state:",
      this.state.tags
    );
  }

  // render method:
  render() {
    // encapsulate:
    //  - tags
    //  - match
    const { tags } = this.state;
    const { match } = this.props;
    console.log("[Tag.js] |render method| URL related: {match}:", match);
    console.log(
      "[Tag.js] |render method| from within Tag.js, const {tags} holds:",
      tags
    );
    console.log("[Tag.js] : URL params in match.params.id", match.params);
    const tagId = match.params.id;
    console.log("[Tag.js]: this is tagId: ", tagId);
    console.log(
      "[Tag.js]: this is what is in this.state.tags:",
      this.state.tags
    );

    // do a nullcheck to avoid error:
    if (tags === null) return null;
    // i'm trying to extract out the correct tag here:
    const correctTagObject = tags.find(e => e.id === Number(tagId));
    console.log("[Tag.js]: extracted tag object: ", correctTagObject);

    // return <div>testing tag.js now just need to figure out how to extract out the correct tasks that's aldy in state...</div>;
    return (
      <div>
        <h1> Tasks Associated With This Tag: </h1>
        <li className="task_list">{task_list(correctTagObject)}</li>
      </div>
    );
  }
}

Tag.propTypes = {
  tag: PropTypes.shape()
  // history: PropTypes.shape({ push: PropTypes.func }).isRequired
};

Tag.defaultProps = {
  tag: {}
};

export default Tag;
