import React from "react";
import classes from "./sortInput.module.css";

const SortInput = ({ sortType, sortOrder,  handleSortType, handleSortOrder }) => {
  const sortTypeConfig = {
    lableName: "Sort by",
    options: [
      { value: "name", displayValue: "Name" },
      { value: "price", displayValue: "Price" },
      { value: "rank", displayValue: "Rank" }
    ]
  };

  const sortOrderConfig = {
    lableName: "Sort Order",
    options: [
      { value: "ascending", displayValue: "Ascending" },
      { value: "descending", displayValue: "Descending" }
    ]
  };

  return (
    <div className={classes.sortouterWrapper}>
      <div className={classes.sortInnerWrapper}>
        <label className={classes.sortTypeName}>
          {sortTypeConfig.lableName}
        </label>
        <select value={sortType} onChange={handleSortType}>
          {sortTypeConfig.options.map((element, index) => {
            return (
              <option key={index} value={element.value}>
                {" "}
                {element.displayValue}
              </option>
            );
          })}
        </select>
      </div>
      <div className={classes.sortInnerWrapper}>
        <label className={classes.sortTypeName}>
          {sortOrderConfig.lableName}
        </label>
        <select value={sortOrder} onChange={handleSortOrder}>
          {sortOrderConfig.options.map((element, index) => {
            return (
              <option key={index} value={element.value}>
                {" "}
                {element.displayValue}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default SortInput;
