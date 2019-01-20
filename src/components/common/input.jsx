import React from "react";

const Input = ({ type, name, value, label, error, onChange }) => {
  return (
    <div className="form-group mx-sm-3">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        value={value}
        name={name}
        onChange={onChange}
        id={name}
        type={type}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
