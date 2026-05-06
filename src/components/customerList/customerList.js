import React from "react";
import PropTypes from "prop-types";

function CustomerList({
  transactions,
  selectedCustomer,
  setSelectedCustomer,
}) {
  const uniqueCustomers = [...new Set(transactions.map((t) => t.customerId))];

  return (
    <div>
      <label>Select Customer: </label>

      <select
        value={selectedCustomer || ""}
        onChange={(event) => setSelectedCustomer(Number(event.target.value))}
      >
        {uniqueCustomers.map((customerId) => (
          <option key={customerId} value={customerId}>
            Customer {customerId}
          </option>
        ))}
      </select>
    </div>
  );
}

CustomerList.propTypes = {
  transactions: PropTypes.array.isRequired,
  selectedCustomer: PropTypes.number,
  setSelectedCustomer: PropTypes.func.isRequired,
};

export default React.memo(CustomerList);