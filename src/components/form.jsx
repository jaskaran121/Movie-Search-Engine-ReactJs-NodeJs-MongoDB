import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "../components/common/input";
import Select from "./common/select";
class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const abort = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, abort);
    if (!result.error) return null;
    const errors = {};
    result.error.details.forEach(item => {
      errors[item.path[0]] = item.message;
    });
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: {} || errors });
    if (errors !== null) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        onChange={this.handleChange}
        value={data[name]}
        error={errors[name]}
        type={type}
      />
    );
  };

  renderButton = label => {
    return (
      <button
        disabled={this.validate()}
        className="btn-primary primary btn-lg"
        style={{ marginLeft: "1%" }}
      >
        {label}
      </button>
    );
  };

  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
