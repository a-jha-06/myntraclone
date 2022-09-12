import React, { useEffect, useState } from "react";
import Card from "./card";
import Filters from "./Filters";
import Sort from "./Sort";

const Content = ({ data }) => {
  const [content, setContent] = useState(data);
  const [fliter, setFilter] = useState({
    gender: "M",
    color: false,
    category: false,
  });
  const [sort, setSort] = useState("What's New");

  useEffect(() => {
    let sortedContent = content;
    if (sort === "Price low to high") {
      sortedContent = sortedContent.sort(
        (a, b) => Number(a.finalPrice) - Number(b.finalPrice)
      );
      setContent(sortedContent);
    } else if (sort === "Better Discount") {
      sortedContent = sortedContent.sort(
        (a, b) => Number(a.discount) - Number(b.discount)
      );
      setContent(sortedContent);
    } else {
      sortedContent = content;
      setContent(sortedContent);
    }
    sortedContent.map((e, i) => console.log(e));
  }, [sort]);

  useEffect(() => {
    let filteredData = data.filter((ele) =>
      ele.gender === fliter.gender ? ele : null
    );
    if (fliter.color) {
      filteredData = filteredData.filter((ele) =>
        ele.link.includes(fliter.color ? "white" : "") ? ele : null
      );
    }
    if (fliter.category) {
      filteredData = filteredData.filter((ele) =>
        ele.folded === (fliter.category ? "Y" : "") ? ele : null
      );
    }
    setContent(filteredData);
  }, [fliter]);
  return (
    <div className="content">
      <div className="sortFilter">
        <Sort setSort={setSort} />
      </div>
      <div className="mainDisplay">
        <div className="sideBar">
          <Filters setFilter={setFilter} fliter={fliter} />
        </div>
        <div className="product-tile-holder">
          {content.map((ele, i) => (
            <Card key={i} {...ele} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
