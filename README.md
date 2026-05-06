# Customer Rewards App

A React JS application that calculates customer reward points based on transactions over a three-month period.

---

# Features

- Display all customers dynamically
- Reward points calculation based on transaction amount
- Monthly and total reward summary
- Month and year filtering
- Transaction level reward details
- Mock API simulation using local JSON
- Loading and error handling
- Pagination ready structure
- Logging using Pino
- Unit test cases using Jest
- Functional components with React Hooks
- PropTypes validation
- Simple responsive UI

---

# Reward Calculation Logic

The retailer rewards customers based on the following rules:

- 2 points for every dollar spent above $100
- 1 point for every dollar spent between $50 and $100

## Example

Transaction Amount = $120

- Amount above $100 = $20 → 20 × 2 = 40 points
- Amount between $50 and $100 = $50 → 50 × 1 = 50 points

Total Reward Points = 90

---

# Tech Stack

- React JS
- JavaScript
- Styled Components / CSS
- Pino Logger
- Jest & React Testing Library

---

# Project Structure

```text
customer-rewards-app/
│
├── public/
│   └── data/
│       └── transactions.json
│
├── src/
│   ├── api/
│   ├── components/
│   ├── constants/
│   ├── services/
│   ├── tests/
│   ├── utils/
│   ├── logger.js
│   ├── App.js
│   └── App.css
│
├── package.json
└── README.md
```

---

# Installation Steps

## 1. Clone Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/customer-rewards-app.git
```

---

## 2. Navigate To Project Folder

```bash
cd customer-rewards-app
```

---

## 3. Install Dependencies

```bash
npm install
```

---

# Run Application

Start the React application using:

```bash
npm start
```

Application runs on:

```text
http://localhost:3000
```

---

# Run Test Cases

Execute unit test cases using:

```bash
npm test
```

---

# Test Cases Covered

The application includes positive and negative unit test cases for reward calculation logic.

## Positive Test Cases

- Reward calculation above $100
- Reward calculation between $50 and $100
- Exact boundary value testing

## Negative Test Cases

- Negative transaction amount
- Zero transaction amount
- Amount below reward threshold

## Fractional Value Test Case

- Decimal transaction amount handling

---

# Logging

Pino logger is used for application logging.

## Logger File

```text
src/logger.js
```

## Example Logs

- API fetch started
- API fetch success
- API fetch failure
- Error logging

---

# API Simulation

The application uses local mock JSON data and simulates asynchronous API calls using `setTimeout()`.

## Mock Data Location

```text
public/data/transactions.json
```

---

# Filters Available

## Month Filter

- JAN to DEC
- Default displays recent 3 months data

## Year Filter

- 2025
- 2024
- 2023
- 2022
- 2021

---

# No Transactions Handling

If no data exists for selected month/year filters, application displays:

```text
No transactions
```

---

# Coding Standards Followed

- Functional Components
- React Hooks
- Component Reusability
- PropTypes Validation
- Code Splitting
- Clean Folder Structure
- Dynamic Data Handling
- Minimal Re-renders using React.memo and useMemo

---

# Screenshots To Add

Add below screenshots before submission:

- Application Home Screen
- Customer Selection
- Month/Year Filter
- Reward Summary
- Transaction Table
- No Transactions Screen
- Successful Test Cases
- GitHub Repository

---

# Future Improvements

- Add charts for reward analytics
- Add sorting functionality
- Add search functionality
- Add pagination enhancement
- Add responsive mobile design

---

