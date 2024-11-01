function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="logo" />
        <div className="header-info">
          <h3 className="text-uppercase">React sneakers</h3>
          <p className="opacity-5">Магазин ліпший кросівок</p>
        </div>
      </div>
      <ul className="header-right d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={20} height={20} src="/img/cart.svg" alt="Cart" />
          <span>1 205 грн.</span>
        </li>
        <li className="mr-30 cu-p">
          <img width={19} height={17} src="/img/favorite.svg" alt="Favorite" />
          <span>Улюблені</span>
        </li>
        <li className="cu-p">
          <img width={18} height={18} src="/img/account.svg" alt="Account" />
          <span>Профіль</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
