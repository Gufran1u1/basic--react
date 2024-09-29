/*import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};
export default FoodItems;*/

/*! update formate*/
import PropTypes from "prop-types";
import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};

FoodItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FoodItems;
