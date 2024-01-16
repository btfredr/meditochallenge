import React, { useState } from 'react';


const FAQ = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  

  return (
    <div className="FAQ" id="FAQ"> 

      <div className="faq-container">
        
      <h1 className="container-title">Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
          <div className="question" onClick={() => handleAccordionClick(index)}>
            {item.question}
          </div>
          <div className="answer">{item.answer}</div>
        </div>
      ))}

    </div>
    </div>
  )
}

export default FAQ;