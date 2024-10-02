/*import PropTypes from 'prop-types';
const Container = (props) => {
  return <div>{props.children}</div>;
};

Container.propTypes = {
    foodItem: PropTypes.string.isRequired,
  };

export default Container;*/

import PropTypes from "prop-types";
import styles from "./Container.module.css";

const Container = (props) => {
  return <div className={styles.Container}>{props.children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
