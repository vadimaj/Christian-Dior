import Icon from './icons/Icon';
const Header = () => {
  return (
    <header className="mb-[90px]">
      <div className="container mx-auto">
        <div className="header-inner flex pt-7 justify-between">
          <a href="#">
            <Icon id="logo" width="120" height="50" />
          </a>
          <h3 className="font-secondary uppercase ml-auto">
            LA COLLECTION PRIVÉE CHRISTIAN DIOR
          </h3>
          <nav>
            <ul className="menu mr-[185px] ml-[130px]">
              <li>
                <a className="uppercase text-xs mb-2.5" href="#">
                  women's fragrance
                </a>
              </li>
              <li>
                <a className="uppercase text-xs mb-2.5" href="#">
                  men's fragrance
                </a>
              </li>
              <li>
                <a className="uppercase text-xs mb-2.5" href="#">
                  makeup
                </a>
              </li>
              <li>
                <a className="uppercase text-xs mb-2.5" href="#">
                  skincare
                </a>
              </li>
              <li>
                <a className="uppercase text-xs mb-2.5" href="#">
                  dior spa
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <ul className="user-nav flex gap-x-5">
              <li>
                <a href="#">
                  <Icon id="favorites" width="24" height="24" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon id="cart" width="24" height="24" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
