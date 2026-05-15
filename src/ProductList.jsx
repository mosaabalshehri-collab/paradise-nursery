import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // إجمالي عدد العناصر في السلة (مجموع الكميات)
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // مزامنة حالة الأزرار مع السلة (لو حُذف عنصر يرجع الزر مفعّل)
  useEffect(() => {
    const updatedAddedToCart = {};
    cartItems.forEach((item) => {
      updatedAddedToCart[item.name] = true;
    });
    setAddedToCart(updatedAddedToCart);
  }, [cartItems]);

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image:
            'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=800&auto=format&fit=crop&q=60',
          description: 'Produces oxygen at night, improving air quality.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image:
            'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=800&auto=format&fit=crop&q=60',
          description: 'Filters formaldehyde and xylene from the air.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image:
            'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=800&auto=format&fit=crop&q=60',
          description: 'Removes mold spores and purifies the air.',
          cost: '$18',
        },
        {
          name: 'Boston Fern',
          image:
            'https://images.unsplash.com/photo-1599598425947-5b4ad97ee47e?w=800&auto=format&fit=crop&q=60',
          description: 'Adds humidity and removes formaldehyde.',
          cost: '$20',
        },
        {
          name: 'Rubber Plant',
          image:
            'https://images.unsplash.com/photo-1602923668104-8f9e03e77e62?w=800&auto=format&fit=crop&q=60',
          description: 'Easy to care for and removes toxins from the air.',
          cost: '$17',
        },
        {
          name: 'Aloe Vera',
          image:
            'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=800&auto=format&fit=crop&q=60',
          description: 'Easy to maintain and great for skin ailments.',
          cost: '$14',
        },
      ],
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        {
          name: 'Lavender',
          image:
            'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?w=800&auto=format&fit=crop&q=60',
          description: 'Calming scent, used in aromatherapy.',
          cost: '$20',
        },
        {
          name: 'Jasmine',
          image:
            'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?w=800&auto=format&fit=crop&q=60',
          description: 'Sweet fragrance, promotes relaxation.',
          cost: '$18',
        },
        {
          name: 'Rosemary',
          image:
            'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=800&auto=format&fit=crop&q=60',
          description: 'Invigorating scent, often used in cooking.',
          cost: '$15',
        },
        {
          name: 'Mint',
          image:
            'https://images.unsplash.com/photo-1628557044797-f21a177c37ec?w=800&auto=format&fit=crop&q=60',
          description: 'Refreshing aroma, used in teas and cooking.',
          cost: '$12',
        },
        {
          name: 'Lemon Balm',
          image:
            'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=800&auto=format&fit=crop&q=60',
          description: 'Citrusy scent, relieves stress and promotes sleep.',
          cost: '$14',
        },
        {
          name: 'Hyacinth',
          image:
            'https://images.unsplash.com/photo-1587316830437-ed3ec70c9f3d?w=800&auto=format&fit=crop&q=60',
          description: 'Beautiful flowering plant with a strong fragrance.',
          cost: '$22',
        },
      ],
    },
    {
      category: 'Insect Repellent Plants',
      plants: [
        {
          name: 'Oregano',
          image:
            'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=800&auto=format&fit=crop&q=60',
          description: 'The oregano plants contains compounds that can deter certain insects.',
          cost: '$10',
        },
        {
          name: 'Marigold',
          image:
            'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=800&auto=format&fit=crop&q=60',
          description: 'Natural insect repellent, also adds color to the garden.',
          cost: '$8',
        },
        {
          name: 'Geraniums',
          image:
            'https://images.unsplash.com/photo-1599598425947-5b4ad97ee47e?w=800&auto=format&fit=crop&q=60',
          description: 'Known for their insect-repelling properties while adding a pleasant scent.',
          cost: '$20',
        },
        {
          name: 'Basil',
          image:
            'https://images.unsplash.com/photo-1538596313828-41d729090199?w=800&auto=format&fit=crop&q=60',
          description: 'Repels flies and mosquitoes, also used in cooking.',
          cost: '$9',
        },
        {
          name: 'Lavender',
          image:
            'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?w=800&auto=format&fit=crop&q=60',
          description: 'Repels mosquitoes and moths. Also has a calming scent.',
          cost: '$20',
        },
        {
          name: 'Catnip',
          image:
            'https://images.unsplash.com/photo-1574027542338-98e75acfd385?w=800&auto=format&fit=crop&q=60',
          description: 'Repels mosquitoes and attracts cats.',
          cost: '$13',
        },
      ],
    },
    {
      category: 'Medicinal Plants',
      plants: [
        {
          name: 'Aloe Vera',
          image:
            'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=800&auto=format&fit=crop&q=60',
          description: 'Soothing gel used for skin ailments.',
          cost: '$14',
        },
        {
          name: 'Echinacea',
          image:
            'https://images.unsplash.com/photo-1597305877032-0668b3c6413b?w=800&auto=format&fit=crop&q=60',
          description: 'Boosts immune system and reduces inflammation.',
          cost: '$16',
        },
        {
          name: 'Peppermint',
          image:
            'https://images.unsplash.com/photo-1628556270448-4d4e4148e1a1?w=800&auto=format&fit=crop&q=60',
          description: 'Relieves digestive issues and headaches.',
          cost: '$13',
        },
        {
          name: 'Lemon Balm',
          image:
            'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=800&auto=format&fit=crop&q=60',
          description: 'Calms nerves and promotes relaxation.',
          cost: '$14',
        },
        {
          name: 'Chamomile',
          image:
            'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=800&auto=format&fit=crop&q=60',
          description: 'Soothes anxiety and promotes sleep.',
          cost: '$15',
        },
        {
          name: 'Calendula',
          image:
            'https://images.unsplash.com/photo-1597305877032-0668b3c6413b?w=800&auto=format&fit=crop&q=60',
          description: 'Heals wounds and soothes skin irritations.',
          cost: '$12',
        },
      ],
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div className="product-list-container">
      {/* الـ Header الموحد */}
      <div className="navbar">
        <div className="navbar-left">
          <div className="logo-container">
            <img
              src="https://cdn-icons-png.flaticon.com/512/628/628324.png"
              alt="Paradise Nursery Logo"
              className="logo"
            />
            <div className="brand">
              <h3>Paradise Nursery</h3>
              <i>Where Green Meets Serenity</i>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" onClick={handleHomeClick} className="nav-link">
            Home
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" onClick={handlePlantsClick} className="nav-link">
            Plants
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" onClick={handleCartClick} className="nav-link">
            Cart
          </a>
        </div>
        <div className="navbar-right">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" onClick={handleCartClick} className="cart-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              width="40"
              height="40"
              fill="white"
            >
              <rect width="156" height="156" fill="none"></rect>
              <circle cx="80" cy="216" r="12"></circle>
              <circle cx="184" cy="216" r="12"></circle>
              <path
                d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></path>
            </svg>
            <span className="cart-count">{totalQuantity}</span>
          </a>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index} className="category-section">
              <h2 className="category-title">{category.category}</h2>
              <div className="plants-grid">
                {category.plants.map((plant, plantIndex) => (
                  <div key={plantIndex} className="plant-card">
                    <div className="sale-badge">SALE</div>
                    <h3 className="plant-name">{plant.name}</h3>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                    />
                    <p className="plant-price">{plant.cost}</p>
                    <p className="plant-description">{plant.description}</p>
                    <button
                      className={`add-to-cart-btn ${
                        addedToCart[plant.name] ? 'added' : ''
                      }`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
