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

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

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
            'https://www.thesill.com/cdn/shop/files/The-Sill_Large-Snake-Laurentii_gallery_all_all_02.jpg?v=1775168192&width=1445',
          description: 'Produces oxygen at night, improving air quality.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image:
            'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
          description: 'Filters formaldehyde and xylene from the air.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image:
            'https://cdn.shopify.com/s/files/1/0852/6482/6664/files/bloomscape_peace-lily6_md_detail-scaled.jpg?v=1718654386',
          description: 'Removes mold spores and purifies the air.',
          cost: '$18',
        },
        {
          name: 'Boston Fern',
          image:
            'https://www.houseplant.co.uk/cdn/shop/files/Boston_Fern_Tropical_Houseplant_1.jpg?v=1763376985&width=1946',
          description: 'Adds humidity and removes formaldehyde.',
          cost: '$20',
        },
        {
          name: 'Rubber Plant',
          image:
            'https://www.ohiotropics.com/wp-content/uploads/2020/02/resized-Depositphotos_111178990_s-2019.jpg',
          description: 'Easy to care for and removes toxins from the air.',
          cost: '$17',
        },
        {
          name: 'Aloe Vera',
          image:
            'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
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
            'https://t4.ftcdn.net/jpg/05/96/99/21/360_F_596992129_GGSaFMIWjMrc1zdEOBjf4VZZvpTiKdVN.jpg',
          description: 'Invigorating scent, often used in cooking.',
          cost: '$15',
        },
        {
          name: 'Mint',
          image:
            'https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg',
          description: 'Refreshing aroma, used in teas and cooking.',
          cost: '$12',
        },
        {
          name: 'Lemon Balm',
          image:
            'https://www.gardenia.net/wp-content/uploads/2023/05/melissa-officinalis-780x520.webp',
          description: 'Citrusy scent, relieves stress and promotes sleep.',
          cost: '$14',
        },
        {
          name: 'Hyacinth',
          image:
            'https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg',
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
            'https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg',
          description: 'The oregano plants contains compounds that can deter certain insects.',
          cost: '$10',
        },
        {
          name: 'Marigold',
          image:
            'https://cdn.create.vista.com/api/media/small/76399663/stock-photo-marigold-flower',
          description: 'Natural insect repellent, also adds color to the garden.',
          cost: '$8',
        },
        {
          name: 'Geraniums',
          image:
            'https://momcrieff.com/wp-content/uploads/2023/01/red-geranium-thrill-fill-and-spill-window-box-copy-1.jpg',
          description: 'Known for their insect-repelling properties while adding a pleasant scent.',
          cost: '$20',
        },
        {
          name: 'Basil',
          image:
            'https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg',
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
            'https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg',
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
            'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
          description: 'Soothing gel used for skin ailments.',
          cost: '$14',
        },
        {
          name: 'Echinacea',
          image:
            'https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg',
          description: 'Boosts immune system and reduces inflammation.',
          cost: '$16',
        },
        {
          name: 'Peppermint',
          image:
            'https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg',
          description: 'Relieves digestive issues and headaches.',
          cost: '$13',
        },
        {
          name: 'Lemon Balm',
          image:
            'https://www.gardenia.net/wp-content/uploads/2023/05/melissa-officinalis-780x520.webp',
          description: 'Calms nerves and promotes relaxation.',
          cost: '$14',
        },
        {
          name: 'Chamomile',
          image:
            'https://images.immediate.co.uk/production/volatile/sites/10/2022/02/GettyImages-1201550930-2a50aff.jpeg?quality=90&resize=940,627',
          description: 'Soothes anxiety and promotes sleep.',
          cost: '$15',
        },
        {
          name: 'Calendula',
          image:
            'https://agresearch.montana.edu/warc/images/banners/calendula-banner.jpg',
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
          <a href="#" onClick={handleHomeClick} className="nav-link">
            Home
          </a>
          <a href="#" onClick={handlePlantsClick} className="nav-link">
            Plants
          </a>
          <a href="#" onClick={handleCartClick} className="nav-link">
            Cart
          </a>
        </div>
        <div className="navbar-right">
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
