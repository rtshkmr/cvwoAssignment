import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class TagList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };

    //  bind class methods for TagList component:
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
  renderTags() {
    const { activeId, tags } = this.props;

    const filteredTags = tags
      .filter(el => this.matchSearchTerm(el))
      .sort((a, b) => new Date(b.deadline) - new Date(a.deadline));

    return filteredTags.map(tag => (
      <li key={tag.id}>
        <Link
          to={`/tags/${tag.id}`}
          className={activeId === tag.id ? "active" : ""}
        >
          {tag.name}{" "}
        </Link>{" "}
      </li>
    ));
  }

  render() {
    console.log("[TagList.js]: the TagList component is now rendering...");
    console.log("[TagList.js]: Props received: ", this.props.tags);

    return (
      <section className="TagList">
        <h2>All Tags </h2>{" "}
        {/*-------------------- Search Input ------------------ */}{" "}
        <input
          className="search"
          placeholder="Search Tags"
          type="text"
          // ref to reference it within the same component:
          ref={this.searchInput}
          onKeyUp={this.updateSearchTerm}
        />{" "}
        <ul> {this.renderTags()} </ul>{" "}
      </section>
    );
  }
}

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object)
};

TagList.defaultProps = {
  tags: []
};

export default TagList;
