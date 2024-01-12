import { useEffect, useLayoutEffect, useState } from "react";
import "./App.scss";
import TravelCard from "./components/TravelCard.tsx";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { db } from "./firebase.js";

import twemoji from "twemoji";
import { emojiCodePoints } from "./utils/emojis.ts";

function App() {
  // const wishlist = [
  //   {
  //     id: 1,
  //     country: 'France',
  //     city: 'Nice',
  //     flightPrice: 45,
  //     hotelPrice: 85,
  //     flightDuration: 125,
  //   },
  //   {
  //     id: 2,
  //     country: 'Switzerland',
  //     city: 'Geneva',
  //     flightPrice: 80,
  //     hotelPrice: 150,
  //     flightDuration: 100,
  //   },
  //   {
  //     id: 3,
  //     country: 'Spain',
  //     city: 'Barcelona',
  //     flightPrice: 75,
  //     hotelPrice: 110,
  //     flightDuration: 130,
  //   },
  //   {
  //     id: 4,
  //     country: 'Montenegro',
  //     city: 'Podgorica',
  //     flightPrice: 65,
  //     hotelPrice: 35,
  //     flightDuration: 180,
  //   },
  //   {
  //     id: 5,
  //     country: 'Italy',
  //     city: 'Rome',
  //     flightPrice: 90,
  //     hotelPrice: 80,
  //     flightDuration: 150,
  //   },
  // ];

  const [loading, setLoading] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const collectionRef = collection(db, "wishlist");

  useLayoutEffect(() => {
    twemoji.parse(document.getElementById("emoji-container"));
  }, [wishlist]);

  useEffect(() => {
    const q = query(collectionRef, orderBy("country"));
    setLoading(true);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const wishlist = [];
      querySnapshot.forEach((doc) => {
        wishlist.push({ ...doc.data(), id: doc.id });
      });
      console.log("wishlist", wishlist);
      setWishlist(wishlist);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="app-container" id="emoji-container">
      <div className="page-title">
        <h1 className="page-title__text">Travel Wishlist</h1>
        <div className="emoji-container">{emojiCodePoints.plane}</div>
      </div>
      <div className="travel-cards-container">
        {wishlist.map((destination) => (
          <TravelCard key={destination.id} data={destination} />
        ))}
      </div>
    </div>
  );
}

export default App;
