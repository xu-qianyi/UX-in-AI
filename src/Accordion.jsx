import React, { useState } from "react";
import "./Accordion.css";
import IconMinus from "./assets/minus-icon.png";
import IconPlus from "./assets/plus-icon.png";

const Accordion = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="content-expandable">
      {items.map((item, index) => (
        <div key={index} className="content-expandable__section">
          <h3 className="content-expandable__heading">
            <button
              type="button"
              aria-expanded={openIndex === index}
              aria-controls={`content-section-${index}`}
              onClick={() => toggleAccordion(index)}
              className="content-expandable__control"
            >
              <span className="content-expandable__title">{item.title}</span>
              <span className="content-expandable__indicator">
                <img
                  src={openIndex === index ? IconMinus : IconPlus}
                  alt={openIndex === index ? "Collapse" : "Expand"}
                  className="content-expandable__icon"
                />
              </span>
            </button>
          </h3>
          <div
            id={`content-section-${index}`}
            role="region"
            aria-labelledby={`content-heading-${index}`}
            hidden={openIndex !== index}
            className="content-expandable__details"
          >
            <p className="content-expandable__description">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
