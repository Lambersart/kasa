import { useState } from "react";
import "../App.css"; // Assure-toi que les styles sont bien appliqués

function Accordion({ title, content }) {
      const [isOpen, setIsOpen] = useState(false);

      return (
            <div className="accordion">
                  <div
                        className="accordion-header"
                        onClick={() => setIsOpen(!isOpen)}
                  >
                        <span>{title}</span>
                        <span>{isOpen ? "▲" : "▼"}</span>
                  </div>
                  {isOpen && (
                        <div className="accordion-content">
                              <p>{content}</p>
                        </div>
                  )}
            </div>
      );
}

export default Accordion;
