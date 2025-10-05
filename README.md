# Paradise Nursery 🌿

E-commerce plant shop built with React, Redux Toolkit, and Tailwind CSS.

## Features

- 🏠 Beautiful landing page with background image
- 🛍️ Product listing with 6 unique houseplants
- 🗂️ Plants organized in 3 categories (Indoor, Outdoor, Succulents)
- 🛒 Shopping cart with Redux state management
- ➕➖ Increment/decrement quantities
- 🗑️ Delete items from cart
- 💰 Real-time total calculation
- 📱 Responsive design with Tailwind CSS

## Technologies Used

- **React** - Frontend framework
- **Redux Toolkit** - State management
- **Tailwind CSS** - Styling
- **Vite** - Build tool

## Installation

```bash
# Clone repository
git clone https://github.com/Dinel52/paradise-nursery.git

# Navigate to project
cd paradise-nursery

# Install dependencies
npm install

# Run development server
npm run dev
```

## Project Structure

```
paradise-nursery/
├── src/
│   ├── components/
│   │   ├── LandingPage.jsx
│   │   ├── Header.jsx
│   │   ├── ProductListingPage.jsx
│   │   └── ShoppingCartPage.jsx
│   ├── redux/
│   │   ├── store.js
│   │   └── cartSlice.js
│   ├── data/
│   │   └── plantsData.js
│   ├── App.jsx
│   └── main.jsx
```

## Redux Store

The application uses Redux Toolkit for state management with the following structure:

- **Cart State**: `items`, `totalQuantity`, `totalAmount`
- **Actions**: `addItem`, `removeItem`, `incrementQuantity`, `decrementQuantity`

## Author

Your Name - [GitHub Profile](https://github.com/Dinel52)

## License

MIT