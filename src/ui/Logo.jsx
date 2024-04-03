/* eslint-disable react/prop-types */
import Icon from '../components/icons/Icon';

const Logo = ({ className }) => {
  return (
    <a href="#">
      <Icon id="logo" width="120" height="50" className={className} />
    </a>
  );
};

export default Logo;
