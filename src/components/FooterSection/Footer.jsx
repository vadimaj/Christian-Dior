import Icon from '../icons/Icon';
import Logo from '../../ui/Logo';
import image from '../../assets/images/footer/footer_01.jpg';
const Footer = () => {
  return (
    <footer className=" bg-accent-secondary">
      <div className="container mx-auto  pb-[100px] pt-8 ">
        <div className="footer__inner grid grid-cols-[203px_1fr] grid-rows-[390px_auto]  gap-y-[60px] ">
          <div className="logo row-start-1 row-end-3">
            <Logo className="hover:fill-accent transition-colors duration-[250ms]" />
          </div>
          <div className="footer__top flex flex-wrap items-start">
            <div className="col ">
              <img src={image} alt="footer_img" />
            </div>
            <div className="col flex basis-[387px] ml-[70px] h-full flex-col justify-between ">
              <div>
                <h4 className="uppercase font-bold leading-tight mb-5">
                  Sign up for exclusivity
                </h4>
                <form className="flex items-center justify-between border-b border-primary pb-2.5">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    id="email"
                    className="text-input w-full bg-transparent outline-none  placeholder:text-xs placeholder:font-primary placeholder:font-normal placeholder:text-primary "
                  />
                  <button type="submit">
                    <Icon
                      id="arrow-right"
                      width="50"
                      height="16"
                      className="fill-secondary hover:fill-accent transition-color duration-[250ms]"
                    />
                  </button>
                </form>
              </div>
              <div className="">
                <h4 className="uppercase font-bold leading-tight mb-5">
                  Find a boutique
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {[
                    ['Parfums Christian Dior Boutiques', '#'],
                    ['Christian Dior Couture Boutiques', '#'],
                  ].map(([title, url]) => (
                    <li
                      className="hover:text-primary-hover transition-color duration-[250ms]"
                      key={title}
                    >
                      <a href={url}>{title}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h4 className="uppercase font-bold leading-tight mb-5">
                  Client services
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {[
                    ['Contact Parfums Christian Dior', '#'],
                    ['Delivery & Returns', '#'],
                    ['FAQ', '#'],
                  ].map(([title, url]) => (
                    <li
                      className="hover:text-primary-hover transition-color duration-[250ms]"
                      key={title}
                    >
                      <a href={url}>{title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col self-end  ml-auto">
              <ul className="flex flex-col gap-5 ">
                {[
                  ['youtube', '#'],
                  ['twiter', '#'],
                  ['facebook', '#'],
                  ['instagram', '#'],
                ].map(([iconId, url]) => (
                  <li key={iconId}>
                    <a href={url}>
                      <Icon
                        id={iconId}
                        width="24"
                        height="25"
                        className="hover:fill-accent transition-color duration-[250ms]"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer__bottom-nav col-start-2 ">
            <ul className="flex justify-between">
              {[
                ['Legal Terms and Conditions', '#'],
                ['Data Protection', '#'],
                ['Personalize my choices', '#'],
                ['General Sales Conditions', '#'],
                ['Ethics & compliance', '#'],
                ['Careers', '#'],
              ].map(([title, url]) => (
                <li
                  key={title}
                  className="hover:text-primary-hover transition-color duration-[250ms]"
                >
                  <a href={url}>{title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
