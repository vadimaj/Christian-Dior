import Accordion from './Accordion';
import data from '../../data/accordeonData.json';

const AccordionSection = () => {
  return (
    <div className="mb-16 md:mb-36">
      <div className="container mx-auto">
        <div className="lg:ml-[calc((100%_-_100px)/6_+_20px)]">
          <Accordion data={data} />
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;

// import Accordion from './Accordion';
// import data from '../../data/accordeonData.json';

// const AccordionSection = () => {
//   return (
//     <div className="mb-[150px]">
//       <div className="container mx-auto">
//         <div className="pl-[203px]">
//           <Accordion data={data} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccordionSection;
