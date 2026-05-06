import logger from "../Logger";

export const fetchTransactions = async () => {
  logger.info("Fetching transaction data");

  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch("/data/transactions.json");

        if (!response.ok) {
          throw new Error("Unable to fetch transactions");
        }

        const data = await response.json();

        logger.info("Transaction data loaded successfully");

        resolve(data);
      } catch (error) {
        logger.error(error.message);
        reject(error);
      }
    }, 1000);
  });
};