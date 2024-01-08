import './App.css';
import TravelCard from './components/TravelCard.jsx';

function App() {
  const wishlist = [
    {
      id: 1,
      country: 'United States',
      city: 'New York',
      price: 2000,
    },
    {
      id: 2,
      country: 'France',
      city: 'Paris',
      price: 2500,
    },
    {
      id: 3,
      country: 'Japan',
      city: 'Tokyo',
      price: 3000,
    },
    {
      id: 4,
      country: 'Italy',
      city: 'Rome',
      price: 1800,
    },
    {
      id: 5,
      country: 'Australia',
      city: 'Sydney',
      price: 2200,
    },
  ];

  return (
    <div className="app-container">
      <h1>Travel Wishlist</h1>
      <div className="travel-cards-container">
        {wishlist.map((destination, index) => (
          <TravelCard key={index} data={destination} />
        ))}
      </div>
    </div>
  );
}

export default App;
