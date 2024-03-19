/* eslint-disable react/prop-types */
import iconSprite from '../icons/sprite.svg';
const Icon = ({ id, width, height }) => {
  return (
    <svg width={width} height={height} className="fill-current">
      <use href={`${iconSprite}#${id}`} />
    </svg>
  );
};

export default Icon;
