import React, { useMemo } from "react";
import PropTypes from "prop-types";

function TransactionTable({
  transactions,
  selectedMonth,
  selectedYear,
}) {
  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date);

      const month = transactionDate
        .toLocaleString("default", { month: "short" })
        .toUpperCase();

      const year = transactionDate.getFullYear();

      const monthMatch =
        selectedMonth === "ALL" || month === selectedMonth;

      return monthMatch && year === selectedYear;
    });
  }, [transactions, selectedMonth, selectedYear]);

  if (filteredTransactions.length === 0) {
    return <h3>No transactions</h3>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Transaction Id</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Reward Points</th>
        </tr>
      </thead>

      <tbody>
        {filteredTransactions.map((item) => (
          <tr key={item.transactionId}>
            <td>{item.transactionId}</td>
            <td>${item.amount}</td>
            <td>{item.date}</td>
            <td>{item.rewardPoints}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionTable.propTypes = {
  transactions: PropTypes.array.isRequired,
  selectedMonth: PropTypes.string.isRequired,
  selectedYear: PropTypes.number.isRequired,
};

export default React.memo(TransactionTable);