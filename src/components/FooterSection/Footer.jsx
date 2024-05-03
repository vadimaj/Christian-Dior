import Icon from '../icons/Icon';
import Logo from '../../ui/Logo';
import image from '../../assets/images/footer/footer_01.jpg';
const Footer = () => {
  return (
    <footer className=" bg-accent-secondary">
      <div className="container mx-auto  pb-[100px] pt-8 ">
        <div className=" sm:grid sm:grid-cols-2 md:grid-cols-6 gap-x-5 ">
          <div className="logo hidden md:block">
            <Logo
              className=" hover:fill-accent transition-colors duration-[250ms] h-[30px] w-[72px] lg:h-[50px]
  lg:w-[120px]"
            />
          </div>
          <div className="image hidden md:block col-span-2 w-3/4 md:w-full">
            <img src={image} alt="footer_img" />
          </div>
          <div className="wrapper__form mb-5 sm:mb-0 sm:col-span-2 flex flex-col gap-y-10 sm:gap-y-5 items-center sm:items-stretch lg:justify-between">
            <div className="form min-w-[320px] sm:max-w-full">
              <h4 className="uppercase font-bold leading-tight md:mb-5">
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
            <div className="wrapper__text sm:mb-10 sm:grid sm:grid-cols-2 gap-x-5 md:block">
              <div className="findBoutique">
                <h4 className="uppercase font-bold leading-tight mb-2.5 sm:mb-5">
                  Find a boutique
                </h4>
                <ul className="flex flex-col gap-y-1 sm:gap-2.5 mb-10 sm:mb-0">
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
              <div className="clientService">
                <h4 className="uppercase font-bold leading-tight mb-2.5 sm:mb-5">
                  Client services
                </h4>
                <ul className="flex flex-col gap-y-1 sm:gap-2.5 mb-10 sm:mb-0">
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
          </div>
          <div className="social sm:col-span-2 md:col-span-1 xl:grid xl:grid-cols-2 md:self-end">
            <ul className="flex md:flex-col gap-x-12 sm:gap-5 justify-center  sm:justify-evenly  md:items-end md:self-end ">
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

          <div className="footer__nav pt-16 mb-10 sm:pt-[70px] sm:col-span-2 md:col-span-6  md:mb-0  xl:col-start-2 xl:col-span-5   xl:max-w-[91%]">
            <ul className="flex gap-x-3 gap-y-8 flex-col items-center md:flex-row lg:justify-between md:divide-x-2 divide-slate-400/80">
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
