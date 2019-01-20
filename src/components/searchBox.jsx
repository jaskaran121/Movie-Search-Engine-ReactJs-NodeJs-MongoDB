import React, { Component } from "react";
import Input from "./common/input";
class SearchBox extends Component {
  state = {
    data: {},
    errors: {}
  };

  render() {
    const { value, onChange } = this.props;
    //const { data, errors } = this.state;
    return (
      <div>
        <input
          name="query"
          placeholder="Search"
          onChange={e => onChange(e.currentTarget.value)}
          value={value}
          type="text"
          className="form-control my-3"
        />
      </div>
    );
  }
}

export default SearchBox;
