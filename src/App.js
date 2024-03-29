import { useEffect, useLayoutEffect, useState } from "react";
import "./App.scss";
import TravelCard from "./components/TravelCard.tsx";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { db } from "./firebase.js";

import twemoji from "twemoji";
import { emojiCodePoints } from "./utils/emojis.ts";
import Button from "./components/UI/Button.tsx";
import NewLocationDialog from "./components/NewLocationDialog.tsx";

function App() {
  const [loading, setLoading] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [showNewLocationModal, setShowNewLocationModal] = useState(false);

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

  const handleButtonClick = () => {
    setShowNewLocationModal(true);
  };

  const handleCloseModal = () => {
    setShowNewLocationModal(false);
  };

  return (
    <div className="app-container" id="emoji-container">
      <div className="page-title">
        <h1 className="page-title__text">Travel Wishlist</h1>
        <div className="emoji-container">{emojiCodePoints.plane}</div>
      </div>
      <div className="button-container">
        <Button
          label="Add new location"
          icon={emojiCodePoints.add}
          onClick={handleButtonClick}
          filled
          border
        />
      </div>
      <NewLocationDialog
        open={showNewLocationModal}
        onClose={handleCloseModal}
      />
      <div className="travel-cards-container">
        {wishlist.map((destination) => (
          <TravelCard key={destination.id} data={destination} />
        ))}
      </div>
    </div>
  );
}

export default App;
