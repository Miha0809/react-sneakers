import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const array = [
  {
    title:"Чоловічі кросівки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: "/img/sneakers/1.jpg"
  },
  {
    title: "Чоловічі кросівки Nike Air Max 270",
    price: 12345,
    imageUrl: "/img/sneakers/2.jpg"
  }
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Всі косівкі</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Пошук..." />
          </div>
        </div>

        <div className="d-flex">
          {
            array.map(obj => (
              <Card
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onClick={console.log(obj)}
              />
            ))
          }

          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default App;
