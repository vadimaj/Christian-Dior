import Logo from '../ui/Logo';
import Icon from './icons/Icon';
import navMenu from '../data/navMenu.json';
const Header = () => {
  const userMenu = [
    {
      iconId: 'favorites',
      width: '24',
      height: '24',
      url: '#',
    },
    { iconId: 'cart', width: '24', height: '24', url: '#' },
  ];

  return (
    <header className="mb-[90px]">
      <div className="container mx-auto">
        <div className="header-inner flex pt-7 justify-between">
          <Logo className="hover:fill-accent transition-colors duration-[250ms]" />
          <h3 className="font-secondary uppercase ml-auto">
            LA COLLECTION PRIVÉE CHRISTIAN DIOR
          </h3>
          <nav>
            <ul className="menu mr-[185px] ml-[130px]">
              {navMenu.map(({ title, url, id }) => (
                <li
                  key={id}
                  className="hover:text-accent transition-color duration-[250ms]"
                >
                  <a className="uppercase text-xs mb-2.5" href={url}>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <ul className="user-nav flex gap-x-5">
              {userMenu.map(({ iconId, url, height, width }) => (
                <li key={iconId}>
                  <a href={url}>
                    <Icon
                      className="hover:fill-accent transition-all hover:scale-110 duration-[250ms]"
                      id={iconId}
                      width={width}
                      height={height}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
