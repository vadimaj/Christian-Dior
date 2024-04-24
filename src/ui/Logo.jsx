/* eslint-disable react/prop-types */
import Icon from '../components/icons/Icon';

const Logo = ({ className, linkClassName = '' }) => {
  return (
    <a href="#" className={linkClassName}>
      <Icon id="logo" className={className} />
    </a>
  );
};

export default Logo;
