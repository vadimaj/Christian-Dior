import { useMenuStatus } from '../../context/menuProvider';
import Icon from '../../components/icons/Icon';

const BurgerButton = () => {
  const { isMenuOpen, handleToggleMenu } = useMenuStatus();
  //absolute  size-6 top-8 right-8 z-[9999]
  return (
    <button
      aria-label="open menu"
      aria-controls="primary-navigation"
      aria-expanded={isMenuOpen ? 'false' : 'true'}
      onClick={handleToggleMenu}
      className="mob-nav-toggle hidden xsm:block"
    >
      <Icon
        className=""
        id={isMenuOpen ? 'close' : 'menu'}
        width="24"
        height="24"
      />
      <span className="sr-only">Menu</span>
    </button>
  );
};

//   return (
//     <button
//       aria-label="open menu"
//       aria-controls="primary-navigation"
//       aria-expanded="false"
//       onClick={handleToggleMenu}
//       className="group block  mr-7 p-3 focus:ring-1 sm:hidden sr-only"
//     >
//       <span
//         className={`block w-10  h-0.5 mb-1.5 bg-slate-400 transition-all duration-500
//          ${isMenuOpen ? `rotate-45 translate-y-[350%] w-10` : `group-hover:w-[33px]`}`}
//       />
//       <span
//         className={`block w-10  h-[2px] mb-1.5 bg-slate-400 transition-all duration-500
//          ${isMenuOpen ? `pointer-events-none` : ``}`}
//       />
//       <span
//         className={`block w-10  h-0.5  bg-slate-400 transition-all duration-500
//          ${isMenuOpen ? ` -rotate-45 -translate-y-[350%] w-10` : `group-hover:w-[30px]`}`}
//       />
//     </button>
//   );
// };

export default BurgerButton;
