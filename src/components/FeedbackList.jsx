// import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>no feedback yet</p>;
  }
  return (
    <div className="feedback-list">
      {/* <AnimatePresence> */}
      {feedback.map((item) => (
        // <motion.div
        //   key={item.id}
        //   initial={{ opacity: 0 }}
        //   animate={{ opacity: 1 }}
        //   exit={{ opacity: 0 }}
        //   layout
        // >
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        // </motion.div>
      ))}
      {/* </AnimatePresence> */}
    </div>
  );
}

export default FeedbackList;
FeedbackList.propTypes = { feedback: PropTypes.array };
