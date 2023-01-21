import React from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import Card from "../shared/Card";
import PropTypes from "prop-types";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
