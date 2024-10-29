function Drawer({ onClose, items = [] }) {
  return (
    <div style={{ display: "block" }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img
            onClick={onClose}
            className="btn-remove"
            src="/img/btn-remove.svg"
            alt="Revove"
          />
        </h2>

        <div className="items">
          {items.map((obj) => (
            <div className="cart-item d-flex align-center mb-20">
              <div
                style={{
                  backgroundImage: `url(${obj.imageUrl})`,
                }}
                className="card-item-img"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} грн.</b>
              </div>
              <img
                className="btn-remove"
                src="/img/btn-remove.svg"
                alt="Revove"
              />
            </div>
          ))}
        </div>

        <div className="cart-total-block">
          <ul>
            <li className="d-flex">
              <span>Сума:</span>
              <div></div>
              <b>21 498 грн.</b>
            </li>
            <li className="d-flex">
              <span>Податок 5%:</span>
              <div></div>
              <b>1074 грн.</b>
            </li>
          </ul>
          <button className="green-button">
            Оформити замовлення <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
