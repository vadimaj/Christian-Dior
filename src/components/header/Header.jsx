import { useRef } from 'react';
import Logo from '../../ui/Logo';
import BurgerButton from '../../ui/BurgerMenu/BurgerButton';
import useOnClickOutside from '../../hooks/onClickOutside';
import { useMenuStatus } from '../../context/menuProvider';
import NavMenu from '../navigation/NavMenu';
import UserNav from './UserNav';

const HeaderMobile = () => {
  const node = useRef(null);
  const { isMenuOpen, handleToggleMenu } = useMenuStatus();

  useOnClickOutside(node, () => {
    if (isMenuOpen) {
      handleToggleMenu();
    }
  });

  return (
    //---------------mobile first  grid header ----------------------
    <header className="mb-10  md:mb-12 lg:mb-16 " ref={node}>
      <div className="container mx-auto">
        <div className="grid gap-4 pt-7 sm:gap-5 sm:grid-flow-col sm:auto-cols-[1fr_1fr_2fr] md:auto-cols-fr ">
          <Logo
            className="hover:fill-accent transition-colors duration-[250ms] h-[30px] w-[72px] sm:h-[50px]
  sm:w-[120px] "
          />
          <h3 className="hidden font-secondary text-sm sm:text-base uppercase sm:block md:max-w-none">
            LA COLLECTION PRIVÉE CHRISTIAN DIOR
          </h3>
          <div className="flex justify-between ">
            <NavMenu />
            <UserNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMobile;
