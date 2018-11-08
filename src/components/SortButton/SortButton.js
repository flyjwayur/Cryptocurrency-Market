import React from "react";

const SortButton = props => {
  return (
    <div class="sort_wrapper">
      <div>
        <input
          type="radio"
          id="ascending_sort"
          name="radio"
          value="ascending_sort"
          checked
        />
        <label for="ascending_sort" class="labelBg">
          Ascending
        </label>
      </div>
      <div>
        <input
          type="radio"
          id="descending_sort"
          name="radio"
          value="descending_sort"
        />
        <label for="descending_sort" class="labelBg">
          descending
        </label>
      </div>
    </div>
  );
};

export default SortButton;
