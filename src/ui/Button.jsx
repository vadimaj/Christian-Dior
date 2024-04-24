/* eslint-disable react/prop-types */

const Button = ({ children, type }) => {
  const basicStyles =
    'uppercase flex text-accent text-sm font-bold border border-current py-[1.5em] justify-center items-center hover:text-white hover:bg-accent duration-300 transition-colors ';

  const styles = {
    primary: basicStyles + ' w-full',
    secondary: basicStyles + ' px-[2.5em]',
    centerSliderSection: basicStyles + ' w-[386px]',
  };
  //' w-[180px] self-center sm:w-[240px] sm:ml-auto';
  //md:text-base md:h-[60px] h-[48px]
  return (
    <a className={styles[type]} href="#">
      {children}
    </a>
  );
};

export default Button;
