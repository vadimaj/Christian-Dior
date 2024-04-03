/* eslint-disable react/prop-types */
import { useRef } from 'react';

import Icon from '../icons/Icon';
const AccordionItem = ({ title, text, description, isOpen, onClick }) => {
  const contentHeight = useRef();

  return (
    <div className="wrapper border-b border-solid border-primary overflow-hidden">
      <button
        className={`w-full  pb-5 pt-10 px-2.5 flex items-start
        justify-between   bg-transparent border-none
         cursor-pointer transition-color ease-in-out duration-300 hover:bg-gradient-to-r  hover:from-transparent hover:via-fuchsia-100 hover:to-transparent ${isOpen ? 'text-accent bg-gradient-to-r from-transparent via-fuchsia-100 to-transparent' : ''}`}
        onClick={onClick}
      >
        <h3 className="uppercase text-2xl flex-1 text-left">{title}</h3>
        <p className="basis-[387px] text-left">{description}</p>
        <Icon
          className={`basis-[205px] transition-all ease-in-out duration-700 ${isOpen ? 'scale-y-[-1] fill-accent' : ''}`}
          id="arrow-down"
          width="15"
          height="50"
        />
      </button>
      <div
        ref={contentHeight}
        className="text-container py-0 px-2  transition-all duration-700 "
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: '0px' }
        }
      >
        <p className="text-content py-4 ">{text}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
