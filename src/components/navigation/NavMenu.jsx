import { useMenuStatus } from '../../context/menuProvider';
import navMenu from '../../data/navMenu.json';
const NavMenu = () => {
  const { isMenuOpen } = useMenuStatus();

  return (
    <nav>
      <ul
        id="primary-navigation"
        className={`flex flex-col xsm:gap-3 xsm:fixed xsm:inset-y-0 xsm:right-0 xsm:left-[40%] xsm:bg-fuchsia-100 xsm:pt-[95px] xsm:px-10 xsm:z-[1000]  xsm:transition-all xsm:duration-700 xsm:shadow-md ${isMenuOpen ? `xsm:translate-x-0 ` : `xsm:translate-x-full`}  `}
      >
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
  );
};

export default NavMenu;
