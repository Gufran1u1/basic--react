import { useState } from "react";
import PropTypes from "prop-types";
import Item from "./Item";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={() => onBuyButton(item)}
        ></Item>
      ))}
    </ul>
  );
};

FoodItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FoodItems;
