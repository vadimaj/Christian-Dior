/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

function MenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, handleToggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
function useMenuStatus() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('Context error. Component is outside the context');
  }
  return context;
}

export { MenuProvider, useMenuStatus };
