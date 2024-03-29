import Icon from '../icons/Icon';
import Logo from '../../ui/Logo';
import image from '../../assets/images/footer/footer_01.jpg';
const Footer = () => {
  return (
    <footer className=" bg-accent-secondary">
      <div className="container mx-auto outline-dashed outline-2 outline-red-600  ">
        <div className="footer__inner  ">
          <div className="footer__top h-[390px] flex flex-wrap items-start  w-[91.7%]  bg-green-300">
            <div className="col outline-dashed outline-2 outline-green-600 basis-[18%] ">
              <Logo className="hover:fill-accent transition-colors duration-[250ms]" />
            </div>
            <div className="col outline-dashed outline-4 outline-red-600">
              <img src={image} alt="footer_img" />
            </div>
            <div className="col flex basis-[387px] ml-[70px] h-full flex-col justify-between outline-dashed outline-2 outline-purple-600 ">
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
                    className="w-full bg-transparent"
                  />
                  <button type="submit">
                    <Icon
                      id="arrow-right"
                      width="50"
                      height="16"
                      className="fill-secondary"
                    />
                  </button>
                </form>
              </div>
              <div className="">
                <h4 className="uppercase font-bold leading-tight mb-5">
                  Find a boutique
                </h4>
                <ul className="flex flex-col gap-2.5">
                  <li>
                    <a href="#">Parfums Christian Dior Boutiques</a>
                  </li>
                  <li>
                    <a href="#">Christian Dior Couture Boutiques</a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h4 className="uppercase font-bold leading-tight mb-5">
                  Client services
                </h4>
                <ul className="flex flex-col gap-2.5">
                  <li>
                    <a href="#">Contact Parfums Christian Dior</a>
                  </li>
                  <li>
                    <a href="#">Delivery & Returns</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col self-end outline-dashed outline-2 outline-red-600 ml-auto">
              <ul className="flex flex-col gap-5 ">
                <li>
                  <a href="#">
                    <Icon id="youtube" width="24" height="25" className="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Icon id="twiter" width="24" height="25" className="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Icon id="facebook" width="24" height="25" className="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Icon id="instagram" width="24" height="25" className="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__nav ">
            <ul className="flex justify-between">
              <li>
                <a href="#">Legal Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Data Protection</a>
              </li>
              <li>
                <a href="#">Personalize my choices</a>
              </li>
              <li>
                <a href="#">General Sales Conditions</a>
              </li>
              <li>
                <a href="#">Ethics & compliance</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
