import React from "react";
import PropTypes from "prop-types";

function RewardSummary({ transactions }) {
  const totalRewards = transactions.reduce(
    (sum, item) => sum + item.rewardPoints,
    0
  );

  return (
    <div className="summary-card">
      <h2>Total Reward Points</h2>
      <h3>{totalRewards}</h3>
    </div>
  );
}

RewardSummary.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default RewardSummary;