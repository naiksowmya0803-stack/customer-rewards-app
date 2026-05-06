import React, { useEffect, useMemo, useState } from "react";
import { fetchTransactions } from "./api/transactionApi";
import CustomerList from "./components/customerList/customerList";
import RewardSummary from "./components/rewardSummary/rewardSummary";
import TransactionTable from "./components/transactionTable/transactionTable";
import FilterBar from "./components/filters/filterBar";
import Loader from "./components/loader/loader";
import { calculateRewardPoints } from "./services/rewardService";
import logger from "./Logger";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState("ALL");
  const [selectedYear, setSelectedYear] = useState(2025);

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      const data = await fetchTransactions();

      setTransactions(data);

      if (data.length > 0) {
        setSelectedCustomer(data[0].customerId);
      }
    } catch (err) {
      setError("Failed to load transactions");
      logger.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const customerTransactions = useMemo(() => {
    return transactions.filter(
      (item) => item.customerId === selectedCustomer
    );
  }, [transactions, selectedCustomer]);

  const transactionWithRewards = customerTransactions.map((item) => ({
    ...item,
    rewardPoints: calculateRewardPoints(item.amount),
  }));

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="app-container">
      <h1>Customer Rewards Program</h1>

      <CustomerList
        transactions={transactions}
        selectedCustomer={selectedCustomer}
        setSelectedCustomer={setSelectedCustomer}
      />

      <FilterBar
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />

      <RewardSummary transactions={transactionWithRewards} />

      <TransactionTable
        transactions={transactionWithRewards}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
      />
    </div>
  );
}

export default App;