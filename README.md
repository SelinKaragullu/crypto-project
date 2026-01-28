# 🪙 React Crypto Tracker

A real-time cryptocurrency dashboard that tracks market prices, ranks, and trading volumes. Users can browse top cryptocurrencies and click on individual cards to view specific coin details via dynamic routing.

[📈 **Live Demo**](https://crypto-projectt.netlify.app/)


## ✨ Features

* **Real-Time Market Data:** Fetches live data for top 100 cryptocurrencies via CoinGecko API.
* **Dynamic Routing:** Implemented `react-router-dom` to create unique URLs for every coin detail page (e.g., `/coin/bitcoin`).
* **Smart Data Formatting:** Custom utility functions to convert raw numbers into human-readable formats (e.g., `$65.4B` Market Cap or `$0.0023` Precision Prices).
* **Visual Trend Indicators:** Color-coded price changes (Green for profit, Red for loss) to visualize 24h performance instantly.
* **Responsive Cards:** Reusable `CryptoCard` components that adapt to different screen sizes.

## 🛠 Built With

* **React** (Vite Architecture)
* **React Router DOM** (v6+): For handling client-side navigation between the Home feed and Coin Detail pages.
* **Fetch API**: Native JavaScript async/await functions to consume the CoinGecko endpoints.
* **JavaScript (ES6+)**:
    * `Intl.NumberFormat`: For precise currency formatting.
    * Modular file structure (separating `api` logic and `utils`).
* **CSS3**: Custom styling for the dashboard layout.

## 🧠 Challenges & Learnings

Building this project reinforced my skills in React architecture and data handling:

* **Dynamic Page Routing:** I learned how to use `<Route path="/coin/:id" />` and `<Link>` to pass the coin's ID to a detail page, allowing users to bookmark specific coins.
* **Separation of Concerns:** Instead of cluttering components, I extracted logic into helper files:
    * `coinGecko.js`: Handles all API calls (`fetchCryptos`, `fetchCoinData`).
    * `formatter.js`: Handles complex number formatting logic (converting 1,000,000,000 to "1B").
* **Handling Financial Data:** Implemented conditional logic to handle edge cases, such as displaying up to 8 decimal places for low-value coins (like SHIB) while keeping standard currency format for others.
* **Conditional Styling:** Used template literals to dynamically apply `positive` or `negative` CSS classes based on the 24h price change percentage.

## 💻 Installation

To run this project locally:

```bash
# 1. Clone the repository
git clone [https://github.com/YOUR_USERNAME/crypto-tracker.git](https://github.com/YOUR_USERNAME/crypto-tracker.git)

# 2. Navigate to the project directory
cd crypto-tracker

# 3. Install dependencies
npm install

# 4. Start the application
npm run dev
