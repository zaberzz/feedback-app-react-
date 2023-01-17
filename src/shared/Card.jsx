import React from "react";
import PropTypes from "prop-types";

function Card({ children, reverse }) {
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
}

export default Card;

Card.defaultProps = {
  reverse: false,
};
Card.prototype = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};
