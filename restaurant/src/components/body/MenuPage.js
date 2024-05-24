import React from 'react';
import './MenuPage.css';
import bankuImage from '../../assets/images/banku.jpg';
import fufuImage from '../../assets/images/fufu.jpg';
import friedRiceImage from '../../assets/images/fried_rice.jpg';
import jollofRiceImage from '../../assets/images/jollof_rice.jpg';
import keleweleImage from '../../assets/images/kelewele.jpg';

const menuItems = [
  {
    name: 'Banku with Okro Stew',
    description: 'A traditional Ghanaian dish made from fermented cornmeal and served with okro stew.',
    price: '$10.99',
    image: bankuImage
  },
  {
    name: 'Fufu with Peanut Butter Soup',
    description: 'A popular West African dish made from pounded plantains, served with a rich peanut butter soup.',
    price: '$12.99',
    image: fufuImage
  },
  {
    name: 'Fried Rice with Chicken',
    description: 'A delicious and versatile dish made from stir-fried rice with vegetables and chicken.',
    price: '$9.99',
    image: friedRiceImage
  },
  {
    name: 'Jollof Rice with Fried Fish',
    description: 'A famous West African dish made with rice cooked in a tomato-based sauce, served with fried fish.',
    price: '$11.99',
    image: jollofRiceImage
  },
  {
    name: 'Kelewele',
    description: 'Spicy fried plantains, a popular Ghanaian snack or side dish.',
    price: '$5.99',
    image: keleweleImage
  },
];

const MenuPage = () => {
  return (
    <div className="menu-page">
      <h2>Our Menu</h2>
      <ul className="menu-grid">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <h3 className="menu-item-name">{item.name}</h3>
            <p className="menu-item-description">{item.description}</p>
            <p className="menu-item-price">{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuPage;
