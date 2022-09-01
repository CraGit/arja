import FaqItem from "./FaqItem";
import Section from "./Section";

const FaqList = ({ faqList }) => {
  return (
    <div className="space-y-4 mt-8">
      {faqList.map((faq) => (
        <FaqItem key={faq.id} pitanje={faq.key} odgovor={faq.value} />
      ))}
    </div>
  );
};

export default FaqList;
