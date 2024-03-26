/* eslint-disable react/prop-types */
import iconSprite from '../icons/sprite.svg';
const Icon = ({ id, width, height, className = '' }) => {
  return (
    <svg width={width} height={height} className={`fill-current ${className}`}>
      <use href={`${iconSprite}#${id}`} />
    </svg>
  );
};

export default Icon;
