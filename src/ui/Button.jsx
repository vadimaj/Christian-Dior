/* eslint-disable react/prop-types */

const Button = ({ children, type }) => {
  const basicStyles =
    'uppercase flex text-accent font-bold border border-current h-[60px] justify-center items-center hover:text-white hover:bg-accent duration-300 transition-colors';

  const styles = {
    primary: basicStyles + ' w-full',
    secondary: basicStyles + ' w-[240px] ml-auto',
    cenerSliderSection: basicStyles + ' w-[386px]',
  };

  return (
    <a className={styles[type]} href="#">
      {children}
    </a>
  );
};

export default Button;
