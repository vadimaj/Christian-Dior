/* eslint-disable react/prop-types */
import { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          text={item.text}
          description={item.description}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </>
  );
};

export default Accordion;
