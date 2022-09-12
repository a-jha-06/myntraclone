import React from "react";

const Filters = ({ setFilter, fliter }) => {
  return (
    <div className="filter-holder">
      <div>
        <label htmlFor="gender">
          <strong>Gender</strong>
        </label>
        <div>
          <label htmlFor="male">
            <strong>Male</strong>
          </label>
          <input
            type="radio"
            name="gender"
            value="M"
            onChange={(e) => setFilter({ ...fliter, gender: e.target.value })}
            defaultChecked
          />
        </div>
        <div>
          <label htmlFor="female">
            <strong>Female</strong>
          </label>
          <input
            type="radio"
            name="gender"
            value="F"
            onChange={(e) => setFilter({ ...fliter, gender: e.target.value })}
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="white">
            <strong>White</strong>
          </label>
          <input
            type="checkbox"
            name="white"
            value="white"
            onChange={(e) => setFilter({ ...fliter, color: e.target.checked })}
          />
        </div>
      </div>
      <div>
        <label htmlFor="Categories">
          <strong>Categories</strong>
        </label>
        <div>
          <label htmlFor="sleeves">
            <strong>Folded Sleeves</strong>
          </label>
          <input
            type="checkbox"
            name="sleves"
            value="folded"
            onChange={(e) =>
              setFilter({ ...fliter, category: e.target.checked })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
