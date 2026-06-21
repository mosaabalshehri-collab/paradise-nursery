#  Paradise Nursery

**Where Green Meets Serenity**

A React-based e-commerce front-end for a houseplant nursery, built as a final project for the Coursera **Developing Front-End Apps with React** course (IBM Skills Network).

---

##  Project Overview

Paradise Nursery is a single-page application that lets users browse a curated collection of houseplants, add them to a shopping cart, and manage their cart before checkout. The app demonstrates core React concepts including component composition, state management with Redux Toolkit, and dynamic UI updates.

##  Features

### Landing Page
- Background image with a welcoming hero section
- Company name and tagline
- "About Us" paragraph describing the company mission
- **Get Started** button that navigates to the product listing

### Product Listing Page
- Displays **24 unique plants** organized into **4 categories**:
  - Air Purifying Plants
  - Aromatic Fragrant Plants
  - Insect Repellent Plants
  - Medicinal Plants
- Each plant card shows a thumbnail, name, price, description, and **Add to Cart** button
- The button is **disabled** after a plant is added (re-enabled when removed from cart)
- A persistent header (navbar) with company logo, navigation links, and a dynamic cart icon

### Shopping Cart Page
- Total cart amount displayed at the top
- Each plant in the cart shows thumbnail, name, unit price, quantity controls, subtotal, and delete button
- **Increment / Decrement** buttons adjust quantity (decrementing to 0 removes the item)
- **Delete** button removes the item entirely
- **Continue Shopping** button returns to the product listing
- **Checkout** button shows a "Coming Soon" alert

### Header / Navbar
- Displays on both the Product Listing and Shopping Cart pages
- Cart icon dynamically shows the total number of items
- Navigation links: Home, Plants, Cart

##  Tech Stack

- **React 18** — UI library
- **Redux Toolkit** — State management for the shopping cart
- **React Redux** — React bindings for Redux
- **CSS3** — Styling (no external UI libraries)
- **Create React App** — Build tooling

##  Project Structure

```
paradise-nursery/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx              # Landing page + routing logic
│   ├── App.css              # Landing page styles (background image)
│   ├── AboutUs.jsx          # Company description
│   ├── AboutUs.css
│   ├── ProductList.jsx      # Plants listing + header
│   ├── ProductList.css
│   ├── CartItem.jsx         # Shopping cart page
│   ├── CartItem.css
│   ├── CartSlice.jsx        # Redux slice for cart state
│   ├── store.js             # Redux store configuration
│   ├── index.js             # App entry point
│   └── index.css
└── package.json
```

##  Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/paradise-nursery.git
cd paradise-nursery

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

1. Add your repository URL to `package.json`:
   ```json
   "homepage": "https://<your-username>.github.io/paradise-nursery"
   ```
2. Run the deploy script:
   ```bash
   npm run deploy
   ```

##  Evaluation Criteria Covered

| Requirement | Status |
|---|---|
| Landing page with background image, company name, paragraph, Get Started button | ✅ |
| Product listing with 6+ plants in 3+ categories | ✅ (24 plants, 4 categories) |
| Add to Cart functionality | ✅ |
| Disable button after adding to cart | ✅ |
| Dynamic cart icon counter | ✅ |
| Header with navigation on both pages | ✅ |
| Shopping cart with thumbnail, name, price, quantity controls | ✅ |
| Increment / Decrement / Delete buttons | ✅ |
| Total cart amount and per-item subtotal | ✅ |
| Continue Shopping and Checkout buttons | ✅ |
| Redux state management | ✅ |

##  Author

**Mosaab Alshehri** — Software Engineering, University of Jeddah

## 📄 License

This project is for educational purposes as part of the Coursera React course.
