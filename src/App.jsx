import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [sneakers, setSneakers] = useState([]);
  const [cartSneakers, setCartSneakers] = useState([]);
  const [cartOpened, setCardOpened] = useState(false);

  useEffect(() => {
    fetch("https://67200e3ce7a5792f0530559f.mockapi.io/api/sneakers")
      .then((data) => data.json())
      .then((json) => setSneakers(json));
  }, []);

  const onAddToCart = (obj) => {
    setCartSneakers((prev) => [...prev, obj]);
  };

  console.log(cartSneakers);

  return (
    <div className="wrapper clear">
      {cartOpened ? (
        <Drawer items={cartSneakers} onClose={() => setCardOpened(false)} />
      ) : null}
      <Header onClickCart={() => setCardOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Всі косівкі</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Пошук..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {sneakers.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onClickFavorite={() => console.log("Favorite")}
              onClickPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
