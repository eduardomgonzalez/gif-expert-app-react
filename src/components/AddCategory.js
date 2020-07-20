import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setcategories }) => {
  const [inputValue, setinputValue] = useState("");

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  // Al hacer Enter en el input
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setcategories((categories) => [inputValue, ...categories]);
      setinputValue("");
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        placeholder="Buscar..."
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setcategories: PropTypes.func.isRequired,
};

export default AddCategory;
