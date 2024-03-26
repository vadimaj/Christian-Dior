import Accordion from './accordionComponent/Accordion';
import data from '../data/accordeonData.json';

const AccordionSection = () => {
  return (
    <div className="accordion mb-[150px]">
      <div className="container mx-auto">
        <div className="accordion__inner pl-[200px]">
          <Accordion data={data} />
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;
