import Icon from '../icons/Icon';
import BurgerButton from '../../ui/BurgerMenu/BurgerButton';
const UserNav = (props) => {
  const userMenu = [
    {
      iconId: 'favorites',
      width: '24',
      height: '24',
      url: '#',
    },
    { iconId: 'cart', width: '24', height: '24', url: '#' },
  ];
  return (
    <div className="flex gap-x-7 sm:gap-x-5 absolute sm:static top-10 right-4 z-[9999]">
      <ul className="flex gap-x-2 sm:gap-x-5">
        {userMenu.map(({ iconId, url, height, width }) => (
          <li key={iconId}>
            <a href={url}>
              <Icon
                className="hover:fill-accent transition-all hover:scale-110 duration-[250ms]"
                id={iconId}
                width={width}
                height={height}
              />
            </a>
          </li>
        ))}
      </ul>
      <BurgerButton />
    </div>
  );
};

export default UserNav;
