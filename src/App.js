import './App.css';
import TravelCard from './components/TravelCard.tsx';

function App() {
  const wishlist = [
    {
      id: 1,
      country: 'France',
      city: 'Nice',
      flightPrice: 45,
      hotelPrice: 85,
    },
    {
      id: 2,
      country: 'Switzerland',
      city: 'Geneva',
      flightPrice: 80,
      hotelPrice: 150,
    },
    {
      id: 3,
      country: 'Spain',
      city: 'Barcelona',
      flightPrice: 75,
      hotelPrice: 110,
    },
    {
      id: 4,
      country: 'Montenegro',
      city: 'Podgorica',
      flightPrice: 65,
      hotelPrice: 35,
    },
    {
      id: 5,
      country: 'Italy',
      city: 'Rome',
      flightPrice: 90,
      hotelPrice: 80,
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
